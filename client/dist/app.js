$(function () {
  STR.constants = {
    maxRhino: 8,
  }
});
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
            name: 'Procher are active in the area',
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
            name: 'Baby rhino wander away from the parents and being attacked by wild predators',
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
            name: 'The herd of rhinos have wandered off from.the protected habitat',
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
            name: 'Deforestation continues and habitable area for the rhino lessens',
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
            name: 'The female does not get along with the male rhino and distancing herself',
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
            name: 'Villagers mistaken the rhino as big pig and beginning to shoot at them',
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
        STR.utils.shuffleArray(crisis);
        return crisis[0];
    };

    return {
        fetchOneCrisis
    }
})();
STR.games = (function () {
    
    const rhinos = [
        {
            name: 'Delilah',
            animate: 'bounce',
        },
        {
            name: 'Harapan',
            animate: 'heartBeat'
        },
        {
            name: 'Andatu',
            animate: 'jello'
        },
        {
            name: 'Bina',
            animate: 'pulse'
        },
        {
            name: 'Ratu',
            animate: 'headShake'
        },
        {
            name: 'Rosa',
            animate: 'swing'
        },
        {
            name: 'Andalas',
            animate: 'wobble'
        },
        {
            name: 'Fq',
            animate: 'rubberBand'
        }
    ];

    let
        currentDay = 0,
        population = 80,
        budget = 1500,
        getOneRandomRhino = () => {
            const totalRhino = rhinos.length;
            const rhinoIndex = STR.utils.getRandomInt(1, totalRhino);
            return rhinos[rhinoIndex];
        },
        getAllRhinoPositionsArray = () => {
            const availablePositions = $('.rhino-position').length;
            const numberOfRhinos = STR.constants.maxRhino;

            return STR.utils.getXRandomInt(availablePositions, numberOfRhinos);
        },
        getAnimationDelay = () => {
            return STR.utils.getRandomInt(4, 10);
        },
        putRhino = (rhinoId, positionId) => {
            const positionSelector = `.rhino-position.rhino-position-${positionId}`;
            const $positionDiv = $(positionSelector);
            const rhinoName = rhinos[rhinoId].name;
            const rhinoAnimateStyle = rhinos[rhinoId].animate;
            const animateDelay = getAnimationDelay();

            const imgHtml = `
            <img class="animated rhino-img infinite delay-${animateDelay}s ${rhinoAnimateStyle} alive rhino-${rhinoId}" src="client/images/rhino.png" alt="${rhinoName}">
            <span class="rhino-name">${rhinoName}</span>`;
            $positionDiv.prepend(imgHtml);
        },
        putRhinosInMap = () => {
            const positionsArray = getAllRhinoPositionsArray();

            positionsArray.forEach((element, index) => {
                putRhino(index, element);
            })
        },
        displayCrisis = (crisisObject) => {
            let $alertBox = $('.crisis');
            const crisisMessage = crisisObject.name;
            $alertBox.html(crisisMessage);
        },
        startTheDay = () => {
            let currentCrisis = STR.crisis.fetchOneCrisis();
            console.log('what is the crisis???', currentCrisis);
            updateActionButtons(currentCrisis);
            displayCrisis(currentCrisis);
        },
        updatePopulation = (amountToDeduct) => {
            updateProgressBar('population', population, (population - amountToDeduct));
            population -= parseInt(amountToDeduct);
        },
        updateProgressBar = (barType, oldValue, newValue) => {
            const barSelector = barType === 'population' ? 
                                    '.progress .population-bar' : '.progress .budget-bar';
            let $barToUpdate = $(barSelector);
            const percentValue = parseFloat((newValue / oldValue) * 100).toFixed(1);
            $barToUpdate.css('width', percentValue + '%');
        },
        updateBudget = (amountToDeduct) => {
            updateProgressBar('budget', budget, (budget - amountToDeduct));
            budget -= parseInt(amountToDeduct);
        },
        updateActionButtons = (crisisObject) => {
            let $actionButtons = $('.control-panel .action-btn');
            $actionButtons.unbind('click');
            $.each($actionButtons, (index, actionButton) => {
                const $currentButton = $(actionButton)

                $currentButton.bind('click', () => {
                    const actionId = index + 1;
                    const populationImpact = crisisObject[`action${actionId}`].population;
                    const budgetImpact = crisisObject[`action${actionId}`].budget;

                    const totalRhinoAlive = $('.alive').length;
                    const adjustedRhinoCount = Math.ceil((population - populationImpact) / 10);

                    killRhino(totalRhinoAlive - adjustedRhinoCount);
                    updatePopulation(populationImpact);
                    updateBudget(budgetImpact);

                    if (gameHasEnded()) {
                        if (userHasWon()) {
                            // GAME OVER: WIN
                        } else {
                            // GAME OVER: LOSE
                        }
                    } else {
                        incrementDay();
                    }
                    
                });
            });
        },
        killRhino = (numberToKill) => {
            let $aliveRhinos = $('.rhino-img').not('.dead');
            for (let i = 0; i < numberToKill; i++) {
                let rhinoElement = $aliveRhinos[i];
                let $rhinoElement = $(rhinoElement);
                $rhinoElement.removeClass('alive bounce heartBeat jello pulse headShake swing wobble rubberBand');
                $rhinoElement.addClass('dead bounceOut');
                setTimeout(function() {
                    $rhinoElement.addClass('invisible');
                    $($rhinoElement.siblings('span.rhino-name')[0]).addClass('invisible');
                },1000);
            }
        },
        gameHasEnded = () => {
            return currentDay > 5 || population <= 0;
        },
        userHasWon = () => {
            return gameHasEnded && population > 0;
        },
        incrementDay = () => {
            currentDay++;
            startTheDay();
        },
        initialize = () => {
            putRhinosInMap();
            startTheDay();
        };

    return {
        initialize
    }
})();

$(function () {
    STR.games.initialize();
});
STR.utils = (function () {
    const rhino = [
        {
            name: 'Delilah',
            animate: 'bounce infinite delay-2s',

        }, 
        {
            name: 'Harapan',
            animate: 'bounce infinite delay-2s'
        }
    ];

    let getOneRandomRhino = () => {
        const totalRhino = rhino.length;
        const rhinoIndex = STR.utils.getRandomInt(1, totalRhino);
        return rhino[rhinoIndex];
    }

    return {
        getOneRandomRhino
    }
})();
STR.utils = (function () {
    let
        showDiv = function ($div) {
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
        },
        getArrayFromOneToMax = (max) => {
            return [...Array(max).keys()].map(x => ++x);
        },
        randomizeArrayElements = (arrayToSort) => {
            return arrayToSort.sort(() => 0.5 - Math.random());
        },
        // better randomizer
        shuffleArray = (array) =>{
            for (let i = array.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [array[i], array[j]] = [array[j], array[i]];
            }
        },
        getXRandomInt = (max, howManyToGet) => {
            let arrayOfIntegers = getArrayFromOneToMax(max);
            const shuffled = randomizeArrayElements(arrayOfIntegers);

            return shuffled.slice(0, howManyToGet);
        };

    return {
        showDiv,
        hideDiv,
        clearDiv,
        getURLParam,
        getRandomInt,
        getXRandomInt,
        shuffleArray,
        randomizeArrayElements
    }
})();