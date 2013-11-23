(function () {
    var shadesOfGrey = {
            'light': [80, '#999', '#000'],
            'medium': [40, '#666', '#000'],
            'dark': [20, '#333', '#fff'],
            'sunshine': [130, '#fff470', '#000']
        },
        coverElement = document.querySelector('.cover'),
        baseClassName = coverElement.className,
        actualShading = 'light',
        blocked = false;

    var animendFunction = function() {
        coverElement.style = 'background-color: ' + shadesOfGrey[actualShading][1];

        coverElement.removeEventListener('animationend', animendFunction);

        blocked = false;
    };

    window.ondevicelight = function(event) {
        var lux = event.value || 130;

        if (lux < shadesOfGrey.dark[0]) {
            setShadeOfGrey('dark');
        } else if (lux > shadesOfGrey.dark[0] && lux < shadesOfGrey.medium[0]) {
            setShadeOfGrey('medium');
        } else if (lux > shadesOfGrey.medium[0] && lux < shadesOfGrey.light[0]) {
            setShadeOfGrey('light');
        } else if (lux > shadesOfGrey.light[0]) {
            setShadeOfGrey('sunshine');
        }
    };

    function setShadeOfGrey(shade) {
        if (actualShading !== shade && !blocked) {
            coverElement.className = baseClassName + ' grey_' + shade;
            actualShading = shade;
            coverElement.addEventListener('animationend', animendFunction);
            blocked = true;
        }
    }

})();