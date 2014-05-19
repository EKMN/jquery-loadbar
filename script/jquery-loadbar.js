/* Copyright (C) 2014 Johannes Ekman - "Jekk" 
 * Author: Github.com/jekk/
 * Mod: Github.com/jekk/jquery-loadbar/
 * License: Github.com/jekk/jquery-loadbar/license.txt/
 * Requires: jQuery
 */

(function($) {
    $.fn.loadbar = function(value, speed, filling) {
        // take the value and set the loadbars value to it
        // on the filling you can choose different filling modes: exact or increment (default(no arg) is exact).
        // ie. $(".test").loadbar(15,"slow,"increment"); would increment the current value of the loadbar by 15, not set it to the value of 15.

        var loadbar = $(this);
        var lbValue = loadbar.val();
        var lbMaxValue loadbar.attr('max'),

        if (value != null && filling == null) {
            lbValue = value; //meaning that loadbar is set to default filling mode: "exact"
        }
        if (value != null && filling == "increment") {
            lbValue = lbValue += value; /* increments the loadbar value by the inputted amount*/
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
        //TODO: limit the bar from reaching above the value of the max attribute
    }
})(jQuery);