const saveConfig = function (config) {
    localStorage.setItem('config', JSON.stringify(config))
}

const loadConfig = function () {
    let config = localStorage.getItem('config');

    if (config) {
        return JSON.parse(config);
    } else {
        return null;
    }
}

export { saveConfig, loadConfig }