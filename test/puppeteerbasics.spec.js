describe('puppeteer basics', function() {
    let page;

    before (async function() {
        page = await browser.newPage();
        await page.goto('http://localhost:8080');
    });

    after (async function() {
        await page.close();
    });

    it('should have the correct page title', async function() {
        (await page.title()).should.equal('Puppeteer Mocha');
    });

    it('should have a heading', async function() {
        const HEADING_SELECTOR = 'h1';
        let heading;
        await page.waitFor(HEADING_SELECTOR);
        heading = await page.$eval(HEADING_SELECTOR, heading => heading.innerText);
        heading.should.equal('Page Title');

    });

    it('should have a single content section', async function() {
        const BODY_SELECTOR = '.main-content';
        await page.waitFor(BODY_SELECTOR);
        (await page.$$(BODY_SELECTOR)).should.have.lengthOf(1);
    });

});
