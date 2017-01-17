$.fn.LuProgressBar = function (options) {
    var settings = $.extend({
        currentTotal: 10,
        qualifiedShippingTotal: 100
    }, options);
    this.html('<div id="myProgress" style="border-radius:5px;position: relative;height: 30px;width: 100%;background-color: gray;"><div id="myBar" style="border-radius:5px;position: absolute;height: 100%;background-color: #4CAF50;width:10%"> </div></div>');
    var move = function (currentValue, maxValue) {
        var percentage = parseInt((currentValue / maxValue) * 100);
        var current = 0;
        var id = setInterval(frame, 5);

        function frame() {
            if (current > percentage) {
                clearInterval(id);
            } else {
                current++;
                $('#myBar').css('width', current + '%');
            }
        }
    }
    move(settings.currentTotal, settings.qualifiedShippingTotal);
    return this;
}
