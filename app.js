#!/usr/bin/env node
const fs = require("fs")
const prependFile = require('prepend-file');
const CreateAppHTML = require("./lib/AppHTML")
const CreateManifest = require("./lib/Manifest")
const CreateServiceWorker = require("./lib/ServiceWorker")


const makeDir = (path) => {
    fs.mkdir(path,
        {
            recursive: true
        }, (err) => {
            if (err) {
                console.log("error occurred in creating new directory", err);
                return;
            }

            console.log("New directory created successfully");
        });
}

const createFile = (file, data) => {
    if (!file) {
        fs.writeFile(file, data, (err) => {
            if (err) {
                console.log(`Could not install`);
            } else {
                console.log("Successfully installed!")
            }
        })

    } else {
        prependFile(file, data)
    }
}

// Run query function
async function runQuery() {
    try {
        const appHtml = CreateAppHTML.generateFile()
        const manifest = CreateManifest.generateFile()
        const serviceWorker = CreateServiceWorker.generateFile()

        const appHtmlDir = `./src`
        const manifestDir = `./src/static`
        const serviceWorkerDir = `./src`

        makeDir(appHtmlDir)
        makeDir(manifestDir)
        makeDir(serviceWorkerDir)

        createFile(`${appHtmlDir}/app.html`, appHtml)
        createFile(`${manifestDir}/manifest.json`, manifest)
        createFile(`${serviceWorkerDir}/service-worker.js`, serviceWorker)
    } catch (error) {
        console.log(error);
    }
}
runQuery()
