exports.config = {
    specs: [
      './tests/*.test.js'
    ],
    exclude: [
      // 'path/to/excluded/files'
    ],
    capabilities: [{
        browserName: 'firefox'
    }],
    logLevel: 'silent',
    coloredLogs: true,
    screenshotPath: './errorShots/',
    baseUrl: 'http://tongster.synology.me',
    waitforTimeout: 10000,
    framework: 'mocha',
    reporter: 'spec',
    mochaOpts: {
      ui: 'bdd'
    },
};
