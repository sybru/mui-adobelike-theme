import fs from 'fs'
import path from 'path'
import { webpack, Configuration } from 'webpack'

console.log(  );

const packageJson = require('../package.json');
const root = path.dirname(__dirname);

const buildDir  = `${root}/build`;
const distDir   = `${root}/dist`;
const config: Configuration = {
    mode: "production",
    entry: `${root}/src/theme.ts`,
    output: {
        path: buildDir,
        filename: "index.js",
        libraryTarget: "umd"
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: "ts-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },

    target: ["web", "es2015"],

    externals: {
        "react": "react",
        "createTheme": "@mui/material/styles"
    }
}

const removeDirRecursive = async (dir: string) => {
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
            if((await fs.promises.readdir(path)).length === 0){
                await fs.promises.rmdir(path);
            }
        }
    }
}

webpack(config, async (err, stats) => {
    console.log(err);
    console.log(stats?.compilation.errors);
    
    try{
        const { name, version, author, license } = packageJson;
        const dist = `${distDir}/${version}`;
        try{
            await fs.promises.access(dist);
            await removeDirRecursive(dist);
        }
        catch(err){}
        finally{
            await fs.promises.mkdir(dist, { recursive: true });
        }
        const items = await fs.promises.readdir(buildDir, { withFileTypes: true });
        for(const item of items){
            if(item.isDirectory()){ continue; }
            await fs.promises.rename(`${buildDir}/${item.name}`, `${dist}/${item.name}`);
        }
        
        await fs.promises.writeFile(
            `${dist}/package.json`,
            JSON.stringify({
                name,
                version,
                author,
                license,
                main: "index.js",
                types: "theme.d.ts"
            }, null, "\t")
        );
        await fs.promises.writeFile(
            path.resolve("./package.json"),
            JSON.stringify({
                ...packageJson,
                main: `./dist/${version}/index.js`,
                types: `./dist/${version}/theme.d.ts`
            }, null, "\t")
        );
        console.log(path.resolve("./package.json"));
        await removeDirRecursive(buildDir);
    }catch(error){
        console.log(error);
    }
});