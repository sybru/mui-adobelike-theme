import fs from 'fs'
import path from 'path'
import { webpack, Configuration } from 'webpack'

const packageJson = require('../package.json');
const root = path.dirname(__dirname);

const buildDir  = `${root}/build`;
const distDir   = `${root}/dist`;
const config: Configuration = {
    mode: "production",
    entry: {
        "index": `${root}/src/index.ts`,
        "after-effects/index": `${root}/src/after-effects/index.ts`
    },
    output: {
        path: buildDir,
        filename: "[name].js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "ts-loader",
                    options: {
                        configFile: "tsconfig.json"
                    }
                }
                
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    target: ["web", "es2015"],

    externals: /^(react|@mui\/)/i,
}

const exists = (path: string) => fs.promises.access(path).then(() => true).catch(() => false);

const getDirs = async (dir: string) => {
    
    const items = await fs.promises.readdir(dir, { withFileTypes: true });
    return items.filter(item => item.isDirectory()).map(({ name }) => `${dir}/${name}`);
}

const readDirRecursive = async (dir: string) => {
    if( !(await exists(dir)) ){ return []; }
    const items = await fs.promises.readdir(dir, { withFileTypes: true });
    const result: string[] = [];
    for(const item of items){
        const path = `${dir}/${item.name}`;
        if(item.isFile()){ result.push(path); }
        else if(item.isDirectory()){
            for(const innerItem of await readDirRecursive(path)){
                result.push(innerItem);
            }
        }
    }
    return result;
}

const removeDirRecursive = async (dir: string) => {
    if( !(await exists(dir)) ){ return; }
    const items = await fs.promises.readdir(dir, { withFileTypes: true });
    if(items.length === 0){
        await fs.promises.rmdir(dir);
        return;
    }
    for(const item of items){
        const path = `${dir}/${item.name}`;
        if(item.isFile()){
            await fs.promises.unlink(path);
        }
        else if(item.isDirectory()){
            await removeDirRecursive(path);
            // if((await fs.promises.readdir(path)).length === 0){
            //     await fs.promises.rmdir(path);
            // }
        }
    }
    await fs.promises.rmdir(dir);
}

const textUpperToHyphen = (text: string) => {
    const matchAll = Array.from(text.matchAll(/[A-Z]/g));
    return text.split("").reduce<string>((result, char, index) => {
        if(!matchAll.some(value => value.index === index)){ return result += char; }
        return result += `-${char.toLowerCase()}`;
    }, "");
}

const writePackageJson = (
    path: string,
    { name, version, author, license }: { name: string; version: string; author: string; license: string; }
) => {
    return fs.promises.writeFile(
        path,
        JSON.stringify({
            name,
            version,
            author,
            license,
            main: "index.js",
            types: "index.d.ts"
        }, null, "\t")
    );
}

webpack(config, async (err, stats) => {
    console.log(err);
    console.log(stats?.compilation.errors);
    
    try{
        const { name, version, author, license } = packageJson;
        const dist = `${distDir}/${version}`;

        await removeDirRecursive(dist);

        const appDuildDirs = await getDirs(buildDir);
        for(const appBuildDir of appDuildDirs){
            let appName = path.basename(appBuildDir);
            const packageName = textUpperToHyphen(appName);
            await writePackageJson(
                `${appBuildDir}/package.json`,
                {
                    name: `@${name}/${packageName}`,
                    version,
                    author,
                    license
                }
            );
        }

        await writePackageJson(`${buildDir}/package.json`, { name: `@${name}`, version, author, license });
        
        if(await exists(dist)){
            await removeDirRecursive(dist);
        }
        await fs.promises.mkdir(dist, { recursive: true });
        
        const items = await readDirRecursive(buildDir);
        for(const item of items){
            const name = item.replace(`${buildDir}/`, "");
            const dest = `${dist}/${name}`;
            const dir = path.dirname(dest);
            await fs.promises.mkdir(dir, { recursive: true });
            await fs.promises.rename(item, dest);
        }
        await fs.promises.writeFile(
            path.resolve('./package.json'),
            JSON.stringify({
                ...packageJson,
                main: `./dist/${version}/index.js`,
	            types: `./dist/${version}/index.d.ts`,
            }, null, "\t")
        );
        await removeDirRecursive(buildDir);
    }catch(error){
        console.error(error);
    }
});