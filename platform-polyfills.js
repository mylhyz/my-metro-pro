
global.setTimeout = function (...args) {
    print_log('setTimeout => ' +JSON.stringify(args));
}


global.clearTimeout = function (...args) {
    print_log('clearTimeout => ' +JSON.stringify(args));
}