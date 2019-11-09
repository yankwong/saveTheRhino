$(function () {
  STR.constants = {
    maxRhino: 8
  }
});
STR.crisis = (function () {

    const crisis = [
        {
            name: 'Illegal logging',
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


    let getCrisis = function () {
        return crisis;
    };

    return {
        getCrisis
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
        initialize = () => {
            putRhinosInMap();
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
        randomizeArrayElements
    }
})();