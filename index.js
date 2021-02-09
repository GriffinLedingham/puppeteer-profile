module.exports = (page) => {
  page.timings = function () {
    const p = new Promise((resolve, reject) => {
      (async () => {
        try {
          const performanceTiming = JSON.parse(
            await page.evaluate(() => {
              return JSON.stringify(window.performance.timing);
            })
          );
          resolve(performanceTiming);
        } catch (e) {
          reject(e);
        }
      })();
    });
    return p.then((performanceTiming) => {
      log('Timings', performanceTiming);
    });
  };

  page.profileHeap = function () {
    const p = new Promise((resolve, reject) => {
      (async () => {
        try {
          const prototypeHandle = await this.evaluateHandle(
            () => Object.prototype
          );
          const objectsHandle = await this.queryObjects(prototypeHandle);
          const numberOfObjects = await this.evaluate(
            (instances) => instances.length,
            objectsHandle
          );

          await Promise.all([
            prototypeHandle.dispose(),
            objectsHandle.dispose(),
          ]);

          resolve(numberOfObjects);
        } catch (e) {
          reject(e);
        }
      })();
    });
    return p.then((numberOfObjects) => {
      log('Heap Count', `Objects: ${numberOfObjects}`);
    });
  };
  return page;
};

function log(title, text) {
  if(typeof text == 'object') {
    text = JSON.stringify(text,null,2)
  }
  process.stdout.write(`==== ${title} ====\n`);
  process.stdout.write(`${text}\n`);
}