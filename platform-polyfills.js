
global.setTimeout = function (...args) {
    print_log('setTimeout => ' + JSON.stringify(args));
}


global.clearTimeout = function (...args) {
    print_log('clearTimeout => ' + JSON.stringify(args));
}

global.registry = {};


global.AppRegistry = {

    registerApp(appKey, provider) {
        print_log('register app key => ' + appKey);
        registry[appKey] = provider;
    },

    runApp(appKey, initParams) {
        print_log('run app key => ' + appKey);
        return registry[appKey] && registry[appKey]();
    }

}