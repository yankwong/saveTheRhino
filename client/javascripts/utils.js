STR.utils = (function () {
    let showDiv = function ($div) {
        $div.removeClass('hidden');
    },
    hideDiv = function ($div) {
        $div.addClass('hidden');
    },
    clearDiv = function ($div) {
        $div.empty();
    },
    // from StackOverflow. usage: getURLParam('q', 'hxxp://example.com/?q=abc')
    getURLParam = (name, url) => {
        if (!url) url = location.href;
        name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
        let regexS = "[\\?&]" + name + "=([^&#]*)";
        let regex = new RegExp(regexS);
        let results = regex.exec(url);
        return results == null ? null : results[1];
    },
    getRandomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    return {
        showDiv,
        hideDiv,
        clearDiv,
        getURLParam,
        getRandomInt
    }
})();