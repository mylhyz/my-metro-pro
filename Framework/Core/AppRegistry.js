

const registry = {};


const AppRegistry = {

    registerApp(appKey, provider) {
        registry[appKey] = provider;
    },

    runApp(appKey, initParams) {
        return registry[appKey] && registry[appKey]();
    }

}

module.exports = AppRegistry;