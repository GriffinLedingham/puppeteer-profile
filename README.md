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

## API

### page.timings()

Prints the Chrome page load timings.

```javascript
await page.timings()
```
```
==== Timings ====
{
  "navigationStart": 1612849857595,
  "unloadEventStart": 0,
  "unloadEventEnd": 0,
  "redirectStart": 0,
  "redirectEnd": 0,
  "fetchStart": 1612849857596,
  "domainLookupStart": 1612849857603,
  "domainLookupEnd": 1612849857603,
  "connectStart": 1612849857603,
  "connectEnd": 1612849857603,
  "secureConnectionStart": 0,
  "requestStart": 1612849857603,
  "responseStart": 1612849857616,
  "responseEnd": 1612849857618,
  "domLoading": 1612849857621,
  "domInteractive": 1612849858034,
  "domContentLoadedEventStart": 1612849858034,
  "domContentLoadedEventEnd": 1612849858601,
  "domComplete": 1612849858830,
  "loadEventStart": 1612849858830,
  "loadEventEnd": 1612849858831
}
```

### page.profileHeap()

Prints the current object count in the browser heap. This can be used at various times throughout your Puppeteer tests

```javascript
await page.profileHeap()
```
```
==== Heap Count ====
Objects: 74332
```

### page.runtimeMetrics()

Prints the Chrome page runtime metrics.

```javascript
await page.runtimeMetrics()
```
```
==== Metrics ====
{
  "Timestamp": 387342.204604,
  "Documents": 5,
  "Frames": 4,
  "JSEventListeners": 894,
  "Nodes": 31967,
  "LayoutCount": 132,
  "RecalcStyleCount": 240,
  "LayoutDuration": 0.121866,
  "RecalcStyleDuration": 0.141439,
  "ScriptDuration": 1.314362,
  "TaskDuration": 2.327362,
  "JSHeapUsedSize": 9894336,
  "JSHeapTotalSize": 15261696
}
```
