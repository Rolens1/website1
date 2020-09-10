$(function name (calculations){

    $(function name(params) {
        $('.numbers').addClass('hide');
        $('.button-quote').click(function(){
        var buttonqID = $(this).attr('data-buttonqID');
        $('.numbers').addClass('hide').removeClass('active').removeClass('display:inline-block;');
        $('.'+buttonqID).removeClass('hide').addClass('show').addClass('active');


        })     
    })


    $('.calculate').on('click', function(){
        var appart = $('#appartNum').val();
        var floors = $('#floorsNum').val();
        var floors3 = parseInt($('#floors3Num').val());
        var floors1 = parseInt($('#floors1Num').val());
        var basement1 = parseInt($('#basement1Num').val());
        var basement3 = parseInt($('#basement3Num').val());
        var elevators = parseInt($('#elevator2Num').val());
        var maxPerFloor3 = parseInt($('#maxPerFloor3').val());
        var maxPerFloor1 = parseInt($('#maxPerFloor1').val());
        var floorstotal = 1;



        
        

      $(function name(appartcalcul){  
       if ($('#floorsNum').val() > 19) {
        floorstotal = 1+(floors / 20);
        }
        else {
            floorstotal = 1;
        }
        var totalshaft = 0;
        totalshaft =((appart / floors) / 6) * floorstotal;
        $("#result").html(totalshaft);  
        
    })

    $(function name(corpcalcul) {
        
        var elevatorNumber = 0;
        elevatorNumber = ((basement1 + floors1)*maxPerFloor1)/1000;
        var totalStories = 0;
        totalStories = (basement1 + floors1);

        
        if (totalStories > 19) {
            var elevatorColumn = 0;
            elevatorColumn = (totalStories / 20);
            var totalElevator = 0;
            totalElevator = elevatorNumber * elevatorColumn;
            }
        else {
        }
        alert('firstone '+ totalElevator)

    })
    $(function name(hybridcalcul) {
        
        var elevatorNumber1 = 0;
        elevatorNumber1 = ((floors3 + basement3)*maxPerFloor3)/1000;
        var totalStories1 = 0;
        totalStories1 = (floors3 + basement3);
        

        if (totalStories1 > 19) {
            var elevatorColumn1 = 0;
            elevatorColumn1 = (totalStories1 / 20);
            var totalElevator1 = 0;
            totalElevator1 = elevatorNumber1 * elevatorColumn1;
            }
        else {
        }
    alert('this is it bro ' + totalElevator1);
    })

    $(function name(commercialcalcul){
        var totalElevator2 = 0;
        totalElevator2 = elevators;
        alert('the num sum tum '+totalElevator2)

    })
    

    })
})