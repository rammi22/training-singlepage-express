// https://github.com/puppeteer/puppeteer/blob/master/docs/api.md
//import expect from 'expect-puppeteer';
import puppeteer from 'puppeteer';

const timeout = 5000;

describe ('Homepage', () => {
  
	it ('should display text on page', async () => {
		const browser = await puppeteer.launch({
			timeout: 5000,
			headless: false,
			defaultViewport: null,
			args:['--start-maximized'],
		});
		const page = await browser.newPage();
		await page.goto('http://localhost:3000');
		await expect(page).toMatch('Codebeispiel::SinglePageApplikation (SPA)')
		const title = await page.title()
		await expect(title).toEqual("Home")
		await browser.close()
	}, timeout) 
})