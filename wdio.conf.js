exports.config = {
    specs: [
      './tests/*.test.js',
      './tests/**/*.test.js'
    ],
    exclude: [
      // 'path/to/excluded/files'
    ],
    capabilities: [{
        browserName: 'chrome'
    }],
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: process.env.SERVER ?
      'http://' + process.env.SERVER : 'http://tongster.synology.me',
    waitforTimeout: 1500000,
    framework: 'mocha',
    reporter: 'spec',
    mochaOpts: {
      ui: 'bdd'
    },
};
