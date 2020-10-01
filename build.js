const Metro = require('metro');

Metro.loadConfig().then((config) => {
    Metro.runBuild(config, {
        entry: 'index.js',
        minify: false,
        out: 'metro-bundle.js'
    });
});