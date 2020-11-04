const axios = require('axios');
const cheerio = require('cheerio');

axios.get('https://www.forextradingbig.com/instaforex-broker-review/')
    .then(response => {
        const html = response.data;
        const $ = cheerio.load(html);
        const scrapedata = $('a', '.comment-bubble').text();;
        console.log(scrapedata);
    }).catch(error => {
        console.log(error);
    });

    // line 4: performing a GET request
    // line 6: handling the success
    // line 7: loading response data into a Cheerio instance
    // line 8: selecting the elements with the data
    // line 9: outputting the scraped data
    // line 10: handling error