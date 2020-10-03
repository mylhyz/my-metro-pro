module.exports = {
    /* general options */

    resolver: {
        /* resolver options */
    },
    transformer: {
        /* transformer options */
    },
    serializer: {
        /* serializer options */
        getPolyfills: () => ['polyfills/platform.js', 'polyfills/AppRegistry.js']
    },
    server: {
        /* server options */
    }
};