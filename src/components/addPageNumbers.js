const { PDFDocument, StandardFonts } = require("pdf-lib");
const { writeFileSync, readFileSync } = require("fs");

async function addPageNumbers() {
  const document = await PDFDocument.load(readFileSync("./pdf/NebulaGraphDocsInAll.pdf"));

  const courierBoldFont = await document.embedFont(StandardFonts.Courier);
  const pageIndices = document.getPageIndices();

  for (const pageIndex of pageIndices) {
    const page = document.getPage(pageIndex);

    page.drawText(`${pageIndex + 1}`, {
      x: page.getWidth() / 2,
      y: 20,
      font: courierBoldFont,
      size: 12
    });
  }

  writeFileSync("./pdf/NebulaGraphDocsInAll.pdf", await document.save());
}

addPageNumbers().catch((err) => console.log(err));