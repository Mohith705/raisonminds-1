const puppeteer = require("puppeteer");

const run = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(" http://localhost:3000/");

  // await page.pdf({ path: 'vitap.pdf', format: 'A4' });
  await page.pdf({
    path: "vitpwebsitefromapi.pdf",
    format: "A4",
    printBackground: true,
    margin: {
      top: "100px",
      left: "50px",
      right: "50px",
      bottom: "100px",
    },
    displayHeaderFooter: true,
    headerTemplate: `<p style="font-size:12px; margin: 0 auto;"><span class="pageNumber"></span> of <span class="totalPages"></span></p>`,
  });

  console.log("done");

  await browser.close();
};

run();
