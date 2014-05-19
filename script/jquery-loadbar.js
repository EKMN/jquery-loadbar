/* Copyright (C) 2014 Johannes Ekman - "Jekk" 
 * Author: Github.com/jekk/
 * Mod: Github.com/jekk/jquery-loadbar/
 * License: Github.com/jekk/jquery-loadbar/license.txt/
 * Requires: jQuery
 */
(function($) {
    $.fn.loadbar = function(value, filling, speed) {
        // take the value and set the loadbars value to it
        // on the filling you can choose different filling modes: exact or increment (default(no arg) is exact).
        // ie. $(".test").loadbar(15,"slow,"increment"); would increment the current value of the loadbar by 15, not set it to the value of 15.

        //loadbar global variables
        var loadbar = $(this);
        var lbValue = loadbar.val();
        var lbMaxValue = loadbar.attr('max');
        var lbNewVal = lbValue + value;

        //case exact
        if (value != null && filling == null) {
            loadbar.val(value); //sets the value
            console.log("Exact called. Set loadbar value to " + value);
        }
        //case increment
        if (value != null && filling == "increment" && lbNewVal < lbMaxValue) {
            /* increments the loadbar value by the inputted amount*/
            loadbar.val(lbNewVal); //sets the value
            console.log("Increment called. Incremented loadbar value by " + value + " to " + lbNewVal);
        }
        if (speed != null) {
            if (speed == "slow") {
                //animate loadbar filling with slow speed
            }
            if (speed == "medium") {
                //animate loadbar filling with medium speed
            }
            if (speed == "fast") {
                //animate loadbar filling with fast speed
            }
        }
        //TODO: fix the filling speed animation, clean the code and add empty(); and fill();-functions to the plugin
    }
})(jQuery);