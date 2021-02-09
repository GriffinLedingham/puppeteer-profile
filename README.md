# puppeteer-profile

A profiling library for Puppeteer.

```npm i puppeteer-profile```

## Usage

```javascript
const puppeteerProfile = require('puppeteer-profile');

describe('Test', () => {
  beforeAll(async () => {
    // Attach profiling methods to the Puppeteer page object
    page = puppeteerProfile(page);
    await page.goto('http://localhost:8080');
    
    // Output Chrome page load timings
    await page.timings();
    
    // Output Chrome heap object count
    await page.profileHeap();
  });
});
  
```
