const JSZip = require("jszip");
const fs = require('fs');
const content = fs.readFileSync(__dirname + "/input.docx", "binary");
const zip = new JSZip(content);
const buf = zip.generate({type:"nodebuffer", mimeType:"application/zip"});
fs.writeFileSync(__dirname+"/output.zip",buf);
