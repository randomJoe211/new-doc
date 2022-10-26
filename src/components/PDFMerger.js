const PDFMerger = require('pdf-merger-js');

var merger = new PDFMerger();

(async () => {
  await merger.add('./pdf/NebulaGraphDatabase.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('./pdf/NebulaGraphCloud.pdf'); 

  await merger.save('./pdf/NebulaGraphDocsInAll.pdf'); //save under given name and reset the internal document
  
  // Export the merged PDF as a nodejs Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
})();