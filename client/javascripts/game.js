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
            return STR.utils.getRandomInt(2, 8);
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
        // setCurrentDay = (newDay) => {
        //     return $('.safari').attr('data-current-day', newDay);
        // },
        // getCurrentDay = () => {
        //     return $('.safari').attr('data-current-day'); 
        // },
        displayCrisis = (crisisObject) => {
            let $alertBox = $('.crisis');
            const crisisMessage = crisisObject.name;
            $alertBox.html(crisisMessage);
        },
        startTheDay = () => {
            currentDay = 0;
            let currentCrisis = STR.crisis.fetchOneCrisis();
            updateActionButtons(currentCrisis);
            displayCrisis(currentCrisis);
        },
        updatePopulation = (amountToDeduct) => {
            population -= parseInt(amountToDeduct);
            console.log('new population', population);
        },
        updateBudget = (amountToDeduct) => {
            budget -= parseInt(amountToDeduct);
            console.log('new budget', budget);
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

                    updatePopulation(populationImpact);
                    updateBudget(budgetImpact);
                    killRhino(1);
                    incrementDay();
                });
            });
        },
        killRhino = (numberOfRhino) => {
            let $aliveRhinos = $('.rhino-img').not('.dead');
            for (let i = 0; i < numberOfRhino; i++) {
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
        incrementDay = () => {
            currentDay++;
            console.log('Today is day ' + currentDay);
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