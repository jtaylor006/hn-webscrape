const puppeteer = require('puppeteer');
puppeteer.launch()

    .then(async browser => {
        const page = await browser.newPage();
        await page.goto('https://www.reddit.com/r/scraping/');
        await page.waitForSelector('body');
        let grabPosts = await page.evaluate(() => {
            let allPosts = document.body.querySelectorAll('.Post');
            scrapeItems = [];
            allPosts.forEach(item => {
                let postTitle = item.querySelector('h3').innerText;
                let postDescription = '';
                try {
                    postDescription = item.querySelector('p').innerText;
                } catch (err) {}
                scrapeItems.push({
                    postTitle: postTitle,
                    postDescription: postDescription,
                });
            });
            let item = {
                "redditPosts": scrapeItems,
            };
            return items;
        });
        console.log(grabPosts);
        await browser.close();
    }).catch(function (err) {
        console.error(err);
    });

// line 2: initiating Puppeteer
// line 5-6: opening a new page and navigating to Reddit
// line 8: manipulating the page's content
// line 10-: storing the post items in an array then selecting for retrieving content
// line 27: outputting the scraped data
// line 28: closing the browser
// line 29: handling any errors