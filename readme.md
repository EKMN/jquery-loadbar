Intro
=====

jQuery Loadbar is a tool for manipulating and controlling loadingbars / progressbars (short. "loadbar").
The plugin itself is very lightweight; the minified (non-gzipped) version weighs merely 0.5kb, which means that the script will hardly affect any load times.

Examples
===

The script has only one function: "loadbar();". The function is fairly simple; you choose whether to increment the
loadingbar by any amount between 1-100 or to assign an exact value to it. Lastly, you can configure the bar fillrate 
by defining how fast the flowing color will animate by passing a string ("slow", "medium" or "fast") as an argument to the function

The function syntax is as follows: $(".anyClass, #id or element").loadbar(value, filling, speed);
Value is an integer while filling and speed are both strings.

Sample usage:

    $(".loadbar").loadbar(35,"increment");
    $(".loadbar").loadbar(15,"increment");
    $(".loadbar").loadbar(55);
    $(".loadbar2").loadbar(0); //the loadbars are independent and work separately.
    $("button").click(function(){
        $(".loadbar2").loadbar(10,"increment");
    });

  
     
