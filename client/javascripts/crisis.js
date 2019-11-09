STR.crisis = (function () {

    let crisis = [
        {
            name: 'Oh no!! Illegal logging is happening in the area',
            impact: 10,
        },
        {
            name: 'Procher',
            impact: 15
        },
        {
            name: 'Baby rhino attacked by wild predators',
            impact: 5
        },
        {
            name: 'wandered away from safe zone',
            impact: 8
        },
        {
            name: 'deforestation worsen',
            impact: 10
        },
        {
            name: 'too aggressive to bread',
            impact: 5
        },
        {
            name: 'mistakenly hunted',
            impact: 10
        }
    ];


    let fetchOneCrisis = function () {
        return STR.utils.randomizeArrayElements(crisis)[0];
    };

    return {
        fetchOneCrisis
    }
})();