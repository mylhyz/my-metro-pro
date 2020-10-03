global.providers = {};
global.AppRegistry = {
    registerApp(appKey, provider) {
        print_log('register app key => ' + appKey);
        providers[appKey] = provider;
    },

    runApp(appKey, initParams) {
        let provider = providers[appKey];
        if (provider) {
            print_log('run app key => ' + appKey);
            let json = provider();
            global.nativeRender(json);
        } else {
            print_log('app key => ' + appKey + ' not exists');
        }
    }

}