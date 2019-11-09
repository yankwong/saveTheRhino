STR.crisis = (function () {

    const crisis = [
        {
            name: 'Illegal logging',
            impact: 10,
        },
        {
            name: 'Procher',
            impact: 15
        }
    ];


    let getCrisis = function () {
        return crisis;
    };

    return {
        getCrisis
    }
})();