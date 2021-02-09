# puppeteer-profile

A profiling library for Puppeteer, based on a collection of Puppeteer recipes aggregated by [puppeteer-webperf](https://github.com/addyosmani/puppeteer-webperf).

## Getting Started

### Installation

```
npm i puppeteer-profile
```

### Usage

Attach the `puppeteer-profile` API to the page object in your test's `beforeAll`.

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

### API

- #### page.timings()

```javascript
await page.timings()
```

Prints the Chrome page load timings.

- #### page.profileHeap()

```javascript
await page.profileHeap()
```

Prints the current object count in the browser heap. This can be used at various times throughout your Puppeteer tests 
