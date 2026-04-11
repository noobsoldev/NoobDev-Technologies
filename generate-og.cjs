const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630 });
  await page.goto('https://noobdev.tech', { waitUntil: 'networkidle2' });
  await page.screenshot({ path: 'public/og-image.jpg', type: 'jpeg', quality: 80 });
  await browser.close();
  console.log('OG image generated successfully.');
})();
