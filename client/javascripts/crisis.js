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
        return crisis;
    };

    return {
        getCrisis
    }
})();

$(function () {
    STR.crisis.getCrisis();
});