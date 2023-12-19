const puppeteer = require('puppeteer-extra')

const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const url = process.argv[2];
if(!url){
    return;
}

puppeteer.launch({ headless: 'new', args: ["--no-sandbox"] }).then(async browser => {
    const page = await browser.newPage()
    await page.setViewport({ width: 1920, height: 1080 })

    try {
        const response = await page.goto(url, {
            waitUntil: 'networkidle0',
            timeout: 15000
        });

        const content = await response.text();
        // do something with the content

        await page.screenshot({ type: 'jpeg', path: 'screenshot.jpeg', fullPage: true });
        console.log('Status code: ' + response.status());
    } catch (error) {}

    await browser.close()
})