STR.crisis = (function () {

    let crisis = [
        {
            name: 'Oh no!! Illegal logging is happening in the area',
            action1: {
                population: '5',
                budget: '10'
            },
            action2: {
                population: '5',
                budget: '10'
            },
            action3: {
                population: '5',
                budget: '10'
            },
            action4: {
                population: '5',
                budget: '10'
            },
        },
        {
            name: 'Procher',
            action1: {
                population: '5',
                budget: '10'
            },
            action2: {
                population: '5',
                budget: '10'
            },
            action3: {
                population: '5',
                budget: '10'
            },
            action4: {
                population: '5',
                budget: '10'
            },
        },
        {
            name: 'Baby rhino attacked by wild predators',
            action1: {
                population: '5',
                budget: '10'
            },
            action2: {
                population: '5',
                budget: '10'
            },
            action3: {
                population: '5',
                budget: '10'
            },
            action4: {
                population: '5',
                budget: '10'
            },
        },
        {
            name: 'wandered away from safe zone',
            action1: {
                population: '5',
                budget: '10'
            },
            action2: {
                population: '5',
                budget: '10'
            },
            action3: {
                population: '5',
                budget: '10'
            },
            action4: {
                population: '5',
                budget: '10'
            },
        },
        {
            name: 'deforestation worsen',
            action1: {
                population: '5',
                budget: '10'
            },
            action2: {
                population: '5',
                budget: '10'
            },
            action3: {
                population: '5',
                budget: '10'
            },
            action4: {
                population: '5',
                budget: '10'
            },
        },
        {
            name: 'too aggressive to bread',
            action1: {
                population: '5',
                budget: '10'
            },
            action2: {
                population: '5',
                budget: '10'
            },
            action3: {
                population: '5',
                budget: '10'
            },
            action4: {
                population: '5',
                budget: '10'
            },
        },
        {
            name: 'mistakenly hunted',
            action1: {
                population: '5',
                budget: '10'
            },
            action2: {
                population: '5',
                budget: '10'
            },
            action3: {
                population: '5',
                budget: '10'
            },
            action4: {
                population: '5',
                budget: '10'
            },
        }
    ];


    let fetchOneCrisis = function () {
        return STR.utils.randomizeArrayElements(crisis)[0];
    };

    return {
        fetchOneCrisis
    }
})();