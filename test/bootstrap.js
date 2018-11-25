const puppeteer = require('puppeteer');
const _ = require('lodash');
const globalVariables = _.pick(global, ['browser']);
const chai = require('chai').should();

// puppeteer options
const opts ={
    headless: false,
    slowMo: 100,
    timeout: 10000
};

// expose variables
before (async function() {
    global.browser = await puppeteer.launch(opts);
});

// close browser and reset global variables
after (function() {
    browser.close();
    global.browser = globalVariables.browser;
});
