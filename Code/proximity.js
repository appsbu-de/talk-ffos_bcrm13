function activateProximity() {
    var resElement = document.querySelector("#results");
    window.ondeviceproximity = function (event) {
        // Check proximity, in centimeters
        var data = "Distance: " + event.value + "cm" +
                   "Min: " + event.min +
                   "Max: " + event.max;

        resElement.innerHTML = data;
    };
}