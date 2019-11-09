let STR = STR || {};

STR.crisis = (function () {

    const crisis = [
        {
            name: 'Tornado',
            impact: 100
        },
        {
            name: 'Hunter',
            impact: 10
        }
    ];


    let getCrisis = function () {
    };

    return {
        initConstants: initConstants
    }
})();

$(function () {
    STR.constants.initConstants();
});