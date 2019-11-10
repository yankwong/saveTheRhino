STR.crisis = (function () {

    let crisis = [
        {
            name: 'Funding for conservation efforts is running low, and is under staffed to protect the rhinos',
            action1: {
                population: '5',
                budget: '100'
            },
            action2: {
                population: '5',
                budget: '100'
            },
            action3: {
                population: '5',
                budget: '100'
            },
            action4: {
                population: '5',
                budget: '100'
            },
        },
        {
            name: 'Procher are active in the area',
            action1: {
                population: '5',
                budget: '100'
            },
            action2: {
                population: '5',
                budget: '100'
            },
            action3: {
                population: '5',
                budget: '100'
            },
            action4: {
                population: '5',
                budget: '100'
            },
        },
        {
            name: 'Baby rhino wander away from the parents and being attacked by wild predators',
            action1: {
                population: '5',
                budget: '100'
            },
            action2: {
                population: '5',
                budget: '100'
            },
            action3: {
                population: '5',
                budget: '100'
            },
            action4: {
                population: '5',
                budget: '100'
            },
        },
        {
            name: 'The herd of rhinos have wandered off from.the protected habitat',
            action1: {
                population: '5',
                budget: '100'
            },
            action2: {
                population: '5',
                budget: '100'
            },
            action3: {
                population: '5',
                budget: '100'
            },
            action4: {
                population: '5',
                budget: '100'
            },
        },
        {
            name: 'Deforestation continues and habitable area for the rhino lessens',
            action1: {
                population: '5',
                budget: '100'
            },
            action2: {
                population: '5',
                budget: '100'
            },
            action3: {
                population: '5',
                budget: '100'
            },
            action4: {
                population: '5',
                budget: '100'
            },
        },
        {
            name: 'The female does not get along with the male rhino and distancing herself',
            action1: {
                population: '5',
                budget: '100'
            },
            action2: {
                population: '5',
                budget: '100'
            },
            action3: {
                population: '5',
                budget: '100'
            },
            action4: {
                population: '5',
                budget: '100'
            },
        },
        {
            name: 'Villagers mistaken the rhino as big pig and beginning to shoot at them',
            action1: {
                population: '5',
                budget: '100'
            },
            action2: {
                population: '5',
                budget: '100'
            },
            action3: {
                population: '5',
                budget: '100'
            },
            action4: {
                population: '5',
                budget: '100'
            },
        }
    ];


    let fetchOneCrisis = function () {
        STR.utils.shuffleArray(crisis);
        return crisis[0];
    };

    return {
        fetchOneCrisis
    }
})();