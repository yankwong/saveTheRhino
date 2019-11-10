STR.crisis = (function () {

    let crisis = [
        {
            name: 'Funding for conservation efforts is running low, and is under staffed to protect the rhinos',
            action1: {
                population: '17',
                budget: '400'
            },
            action2: {
                population: '10',
                budget: '150'
            },
            action3: {
                population: '22',
                budget: '500'
            },
            action4: {
                population: '2',
                budget: '0'
            },
        },
        {
            name: 'Procher are active in the area',
            action1: {
                population: '17',
                budget: '400'
            },
            action2: {
                population: '10',
                budget: '150'
            },
            action3: {
                population: '22',
                budget: '500'
            },
            action4: {
                population: '2',
                budget: '0'
            },
        },
        {
            name: 'Baby rhino wander away from the parents and being attacked by wild predators',
            action1: {
                population: '17',
                budget: '400'
            },
            action2: {
                population: '10',
                budget: '150'
            },
            action3: {
                population: '22',
                budget: '500'
            },
            action4: {
                population: '2',
                budget: '0'
            },
        },
        {
            name: 'The herd of rhinos have wandered off from.the protected habitat',
            action1: {
                population: '17',
                budget: '400'
            },
            action2: {
                population: '10',
                budget: '150'
            },
            action3: {
                population: '22',
                budget: '500'
            },
            action4: {
                population: '2',
                budget: '0'
            },
        },
        {
            name: 'Deforestation continues and habitable area for the rhino lessens',
            action1: {
                population: '17',
                budget: '400'
            },
            action2: {
                population: '10',
                budget: '150'
            },
            action3: {
                population: '22',
                budget: '500'
            },
            action4: {
                population: '2',
                budget: '0'
            },
        },
        {
            name: 'The female does not get along with the male rhino and distancing herself',
            action1: {
                population: '17',
                budget: '400'
            },
            action2: {
                population: '10',
                budget: '150'
            },
            action3: {
                population: '22',
                budget: '500'
            },
            action4: {
                population: '2',
                budget: '0'
            },
        },
        {
            name: 'Villagers mistaken the rhino as big pig and beginning to shoot at them',
            action1: {
                population: '17',
                budget: '400'
            },
            action2: {
                population: '10',
                budget: '150'
            },
            action3: {
                population: '22',
                budget: '500'
            },
            action4: {
                population: '2',
                budget: '0'
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