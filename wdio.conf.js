exports.config = {
    specs: [
      './tests/admin.test.js'
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
    baseUrl: 'http://tongster.synology.me',
    waitforTimeout: 1500000,
    framework: 'mocha',
    reporter: 'spec',
    mochaOpts: {
      ui: 'bdd'
    },
};
