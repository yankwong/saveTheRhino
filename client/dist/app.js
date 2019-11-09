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
    const rhino = [
        {
            name: 'Delilah',
            animate: '',

        },
        {
            name: 'Harapan',
            animate: ''
        }
    ]; 

    let
        getOneRandomRhino = () => {
            const totalRhino = rhino.length;
            const rhinoIndex = STR.utils.getRandomInt(1, totalRhino);
            return rhino[rhinoIndex];
        },
        getAllRhinoPositionsArray = () => {
            const availablePositions = $('.rhino-position').length;
            const numberOfRhinos = STR.constants.maxRhino;

            return STR.utils.getXRandomInt(availablePositions, numberOfRhinos);
        },
        putRhino = (rhinoId, positionId) => {
            // pick rhinoFrom rhinos.js
            const positionSelector = `.rhino-position.rhino-position-${positionId}`;
            const $positionDiv = $(positionSelector);
            const imgHtml = `<img class="animated rhino-${rhinoId}" src="https://place-hold.it/40x40/grey" alt="rhino">`;
            $positionDiv.prepend(imgHtml);
        },
        putRhinosInMap = () => {
            const positionsArray = getAllRhinoPositionsArray();
            positionsArray.forEach((element) => {
                putRhino(0, element);
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
        getXRandomInt = (max, total) => {
            let arrayOfIntegers = getArrayFromOneToMax(max);
            const shuffled = arrayOfIntegers.sort(() => 0.5 - Math.random());

            return shuffled.slice(0, total);
        };

    return {
        showDiv,
        hideDiv,
        clearDiv,
        getURLParam,
        getRandomInt,
        getXRandomInt
    }
})();