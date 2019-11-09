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