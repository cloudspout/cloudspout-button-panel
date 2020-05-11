const fs = require('fs');
const archiver = require('archiver');
const glob = require("glob")

const cwd = 'dist/'
const folderPath = '**';
const out = 'cloudspout-button-panel.zip';

glob(folderPath, {cwd}, (err, files) => {

    if (err) {
        console.error(err);
        return err;
    }

    const output = fs.createWriteStream('dist/' + out);
    const archive = archiver('zip', {zlib:{level: 9}});
    archive.pipe(output);

    files.forEach(file => {
        if (file === out) return;
        console.log(file);
        archive.file(cwd + file, {name:'cloudspout-button-panel/'+file});
    });

    archive.finalize();

});


