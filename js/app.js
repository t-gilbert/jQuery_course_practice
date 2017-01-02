// script.js

$(function() {

    // Click the GO button
    $('.go').click(function() {
        
        
        //  checking to see if a car has won the race
        function checkIfComplete() {
            
            if( isComplete == false ) {
                isComplete = true;
            } else {
                place = 'second';
            }
            
        }
        
        // get the width of the cars
        var carWidth = $('#blue_car').width();
        
        // get the width of the racetrack
        var raceTrackWidth = $(window).width() - carWidth;
        
        // generate a random number
        
        var raceTime1 = Math.floor( (Math.random() * 6000) + 100 );
        var raceTime2 = Math.floor( (Math.random() * 6000) + 100 );
        
        // set a flag variable to FALSE by default
        var isComplete = false;
        
        // set a flag variable to FIRST by default
        var place = 'first';
        
        // animate car 1
        $('#blue_car').animate({
        
            // move the car width of the racetrack
            right: raceTrackWidth
           
            
            
        }, raceTime1, function() {
            
      
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo1 span').text( 'Finished in ' + place + ' at ' + raceTime1 + ' milliseconds!' );
            
        });
        
        // animate car 2
        $('#red_car').animate({
        
            // move the car width of the racetrack
             right: raceTrackWidth
            
            
        }, raceTime2, function() {
            
            // animation is complete
            
            // run a function
            checkIfComplete();
            
            // give some text feedback in the race info box
            $('#raceInfo2 span').text( 'Finished in ' + place + ' place at ' + raceTime2 + ' milliseconds!' );
            
        });
        
    });
    
    // reset the race
    $('.reset').click(function() {
        $('.car').css('right','0');
        $('.raceInfo span').text('');
    });
    
});
    








