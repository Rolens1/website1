$(function name (calculations){

    $(function name(params) {
        $('.numbers').addClass('hide');
        $('.button-quote').click(function(){
        var buttonqID = $(this).attr('data-buttonqID');
        $('.numbers').addClass('hide').removeClass('active').removeClass('display:inline-block;');
        $('.'+buttonqID).removeClass('hide').addClass('show').addClass('active');
        })     
    })

    /*-----Radio buttons--------*/
   
    $("input").change(function(){



        /*----------Residential Building Calculator----------*/
        var floors = parseInt($('#floorsNum').val());
            var totalStories_resi = Math.ceil(floors / 20)
            
            
               

        var appart = parseInt($('#appartNum').val());

            var round_totalshaft
            var nombrePorteAscenseur
            nombrePorteAscenseur = Math.ceil(appart/6/floors)
            round_totalshaft = totalStories_resi * nombrePorteAscenseur
           
            
            $('#resi-totalelevator1').text(round_totalshaft)
            
        
        var resi1 = document.getElementById("resi-elevatortype1")
        var resi2 = document.getElementById("resi-elevatortype2")
        var resi3 = document.getElementById("resi-elevatortype3")

        var resi4 = document.getElementById("resi-installation1")
        var resi5 = document.getElementById("resi-installation2")
        var resi6 = document.getElementById("resi-installation3")

        

        /*------1------*/
        var resi_pricing1 = (resi1.value) * round_totalshaft
        var resi2_pricing1 = resi_pricing1 + (resi_pricing1 * 0.10)
        var resi2_pricing2 = resi_pricing1 + (resi_pricing1 * 0.13)
        var resi2_pricing3 = resi_pricing1 + (resi_pricing1 * 0.16)



        if (resi1.checked === true && resi4.checked === true) {  
            $('#resi-price1').text(resi2_pricing1+ " $")
        }
        if (resi1.checked === true && resi5.checked === true) {  
            $('#resi-price1').text(resi2_pricing2+ " $")   
        }
        if (resi1.checked === true && resi6.checked === true) {  
            $('#resi-price1').text(resi2_pricing3+ " $")

        }
        
        /*-----2*------*/
        var total12 = (resi2.value) * round_totalshaft
        var total121 = total12 + (total12 * 0.10)
        var total122 = total12 + (total12 * 0.13)
        var total123 = total12 + (total12 * 0.16)




        if (resi2.checked === true && resi4.checked === true) {  
            $('#resi-price1').text(total121)

        }
        if (resi2.checked === true && resi5.checked === true) {  
            $('#resi-price1').text(total122)        
        }
        if (resi2.checked === true && resi6.checked === true) {  
            $('#resi-price1').text(total123)    
        }

        /*------3------*/
        var total13 = (resi3.value) * round_totalshaft
        var total131 = total13 + (total13 * 0.10)
        var total132 = total13 + (total13 * 0.13)
        var total133 = total13 + (total13 * 0.16)



        if (resi3.checked === true && resi4.checked === true) {  
            $('#resi-price1').text(total131)       
        }
        if (resi3.checked === true && resi5.checked === true) {  
            $('#resi-price1').text(total132)        
        }
        if (resi3.checked === true && resi6.checked === true) {  
            $('#resi-price1').text(total133)        
        }






/*corp*/

        var corp4 = document.getElementById("corp-installation1")
        var corp5 = document.getElementById("corp-installation2")
        var corp6 = document.getElementById("corp-installation3")

        var corp1 = document.getElementById("corp-elevatortype1")
        var corp2 = document.getElementById("corp-elevatortype2")
        var corp3 = document.getElementById("corp-elevatortype3")

        var maxPerFloor1 = parseInt($('#maxPerFloor1').val());
        var floors1 = parseInt($('#floors1Num').val());
        var basement1 = parseInt($('#basement1Num').val());
        var totalElevatorCorp1 = 0
        totalElevatorCorp1 = ((basement1 + floors1) * maxPerFloor1) / 1000
        var totalcolumn1
        totalcolumn1 = Math.ceil(floors1 / 20)
        var totalPerColumn1
         totalPerColumn1 = Math.ceil(totalElevatorCorp1 / totalcolumn1)

        var totalElevatorB
        totalElevatorB = totalcolumn1 * totalPerColumn1
        $('#corp-totalelevator1').text(totalElevatorB)





        var totalElevatorB1 = totalElevatorB * corp1.value
        var totalElevatorB11 = totalElevatorB1 + (totalElevatorB1 * .1)
        var totalElevatorB12 = totalElevatorB1 + (totalElevatorB1 * .13)
        var totalElevatorB13 = totalElevatorB1 + (totalElevatorB1 * .16)

        if (corp1.checked === true && corp4.checked === true) {
            $('#corp-price1').text(totalElevatorB11)      
        }
        if (corp1.checked === true && corp5.checked === true) {
            $('#corp-price1').text(totalElevatorB12)
         }
         if (corp1.checked === true && corp6.checked === true) {
            $('#corp-price1').text(totalElevatorB13)

         }



         var totalElevatorB1a = totalElevatorB * corp2.value
         var totalElevatorB111 = totalElevatorB1a + (totalElevatorB1a * .1)
         var totalElevatorB122 = totalElevatorB1a + (totalElevatorB1a * .13)
         var totalElevatorB133 = totalElevatorB1a + (totalElevatorB1a * .16)

         if (corp2.checked === true && corp4.checked === true) {
            $('#corp-price1').text(totalElevatorB111)
         }
         if (corp2.checked === true && corp5.checked === true) {
            $('#corp-price1').text(totalElevatorB122)
          }
          if (corp1.checked === true && corp6.checked === true) {
            $('#corp-price1').text(totalElevatorB133)
          }



          var totalElevatorB1aa = totalElevatorB * corp3.value
         var totalElevatorB1111 = totalElevatorB1aa + (totalElevatorB1aa * .1)
         var totalElevatorB1222 = totalElevatorB1aa + (totalElevatorB1aa * .13)
         var totalElevatorB1333 = totalElevatorB1aa + (totalElevatorB1aa * .16)

          if (corp3.checked === true && corp4.checked === true) {
            $('#corp-price1').text(totalElevatorB1111)
         }
         if (corp3.checked === true && corp5.checked === true) {
            $('#corp-price1').text(totalElevatorB1222)
          }
          if (corp3.checked === true && corp6.checked === true) {
            $('#corp-price1').text(totalElevatorB1333)
          }



        /*commercial*/



        var comm4 = document.getElementById("comm-installation1")
        var comm5 = document.getElementById("comm-installation2")
        var comm6 = document.getElementById("comm-installation3")

        var comm1 = document.getElementById("comm-elevatortype1")
        var comm2 = document.getElementById("comm-elevatortype2")
        var comm3 = document.getElementById("comm-elevatortype3")

        var elevators1 = parseInt($('#elevator2Num').val());


        var commShaft = elevators1
        $('#comm-totalelevator1').text(elevators1)


        commShaft = elevators1 * comm1.value
        var commShaft1 = commShaft + (commShaft * 0.10)
        var commShaft2 = commShaft + (commShaft * 0.13)
        var commShaft3 = commShaft + (commShaft * 0.16)





        if (comm1.checked === true && comm4.checked === true) {
           $('#comm-price1').text(commShaft1)

        }
        if (comm1.checked === true && comm5.checked === true) {
           $('#comm-price1').text(commShaft2)

        }
        if (comm1.checked === true && comm6.checked === true) {
           $('#comm-price1').text(commShaft3)

        }


        commShaft2a = elevators1 * comm2.value
        var commShaft11 = commShaft2a + (commShaft2a * 0.10)
        var commShaft22 = commShaft2a + (commShaft2a * 0.13)
        var commShaft33 = commShaft2a+ (commShaft2a * 0.16)


        if (comm2.checked === true && comm4.checked === true) {
           $('#comm-price1').text(commShaft11)

         }
         if (comm2.checked === true && comm5.checked === true) {
           $('#comm-price1').text(commShaft22)

         }
         if (comm2.checked === true && comm6.checked === true) {
           $('#comm-price1').text(commShaft33)

         }


         commShaft2aa = elevators1 * comm3.value
         var commShaft111 = commShaft2aa + (commShaft2aa * 0.10)
         var commShaft222 = commShaft2aa + (commShaft2aa * 0.13)
         var commShaft333 = commShaft2aa+ (commShaft2aa * 0.16)
 
 
         if (comm3.checked === true && comm4.checked === true) {
             alert(commShaft111)
           $('#comm-price1').text(commShaft11)

          }
          if (comm3.checked === true && comm5.checked === true) {
              alert(commShaft222)
           $('#comm-price1').text(commShaft22)

          }
          if (comm3.checked === true && comm6.checked === true) {
              alert(commShaft333)
           $('#comm-price1').text(commShaft33)

          }

        

        
        /*hybbrid*/
        var hybr1 = document.getElementById("hybr-elevatortype1")
        var hybr2 = document.getElementById("hybr-elevatortype2")
        var hybr3 = document.getElementById("hybr-elevatortype3")

        var hybr4 = document.getElementById("hybr-installation1")
        var hybr5 = document.getElementById("hybr-installation2")
        var hybr6 = document.getElementById("hybr-installation3")


        var maxPerFloor3 = parseInt($('#maxPerFloor3').val());
        var floors3 = parseInt($('#floors3Num').val());
        var basement3 = parseInt($('#basement3Num').val());
        var totalElevatorCorp = 0
        totalElevatorCorp = ((basement3 + floors3) * maxPerFloor3) / 1000
        var totalcolumn
        totalcolumn = Math.ceil(floors3 / 20)
        var totalPerColumn
         totalPerColumn = Math.ceil(totalElevatorCorp / totalcolumn)

        var totalElevatorA
        totalElevatorA = totalcolumn * totalPerColumn
        $('#hybr-totalelevator1').text(totalElevatorA)
          



               
          var totalElevatorA1 = totalElevatorA * hybr1.value
          var totalElevatorA11 = totalElevatorA1 + (totalElevatorA1 * 0.1)
          var totalElevatorA12 = totalElevatorA1 + (totalElevatorA1 * 0.13)
          var totalElevatorA13 = totalElevatorA1 + (totalElevatorA1 * 0.16)



        if (hybr1.checked === true && hybr4.checked === true) {
        
           $('#hybr-price1').text(totalElevatorA11)
        }
        if (hybr1.checked === true && hybr5.checked === true) {
        
        $('#hybr-price1').text(totalElevatorA12)
        }
        if (hybr1.checked === true && hybr6.checked === true) {
       
        $('#hybr-price1').text(totalElevatorA13)
        }

        var totalElevator2A1 = totalElevatorA * hybr2.value
        var totalElevator2A11 = totalElevator2A1 + (totalElevator2A1 * 0.1)
        var totalElevator2A12 = totalElevator2A1 + (totalElevator2A1 * 0.13)
        var totalElevator2A13 = totalElevator2A1 + (totalElevator2A1 * 0.16)


        if (hybr2.checked === true && hybr4.checked === true) {
        
            $('#hybr-price1').text(totalElevator2A11)
         }
         if (hybr2.checked === true && hybr5.checked === true) {
         
         $('#hybr-price1').text(totalElevator2A12)
         }
         if (hybr2.checked === true && hybr6.checked === true) {
         
         $('#hybr-price1').text(totalElevator2A13)
         }

         var totalElevator22A1 = totalElevatorA * hybr3.value
         var totalElevator22A11 = totalElevator22A1 + (totalElevator22A1 * 0.1)
         var totalElevator22A12 = totalElevator22A1 + (totalElevator22A1 * 0.13)
         var totalElevator22A13 = totalElevator22A1 + (totalElevator22A1 * 0.16)
 
         if (hybr3.checked === true && hybr4.checked === true) {
            
         $('#hybr-price1').text(totalElevator22A11)

         }
         if (hybr3.checked === true && hybr5.checked === true) {
         
         $('#hybr-price1').text(totalElevator22A12)

         }
         if (hybr3.checked === true && hybr6.checked === true) {
         
         $('#hybr-price1').text(totalElevator22A13)

         }


    
})











        

    
 /*corporation*/
    // $(function changeDispla2() {
        
    //     var elevatorNumber = 0;
    //     elevatorNumber = ((basement1 + floors1)*maxPerFloor1)/1000;
    //     var totalStories = 0;
    //     totalStories = (basement1 + floors1);

        
    //     if (totalStories > 19) {
    //         var elevatorColumn = 0;
    //         elevatorColumn = (totalStories / 20);
    //         var totalElevator = 0;
    //         totalElevator = elevatorNumber * elevatorColumn;
    //         }
    //     else {
    //     }
    //         $(".corp").change(function(){
    //             $('#corp-price1').html("appart")
    //             $('#corp-totalelevator1').html(totalElevator)
    //             $('#corp-totalfloor1').html(totalStories)
    //           });
        

    // })

    /*hybrid*/
    // $(function changeDisplay4() {
        
    //     var elevatorNumber1 = 0;
    //     elevatorNumber1 =0 ;
    //     var totalStories1 = 0;
    //     totalStories1 = (floors33 + basement33);
        

    //     if (totalStories1 > 19) {
    //         var elevatorColumn1 = 0;
    //         elevatorColumn1 = (totalStories1 / 20);
    //         var totalElevator1 = 0;
    //         totalElevator1 = elevatorNumber1 * elevatorColumn1;
    //         }
    //     else {
    //     }
        
    //     $(".hybr").change(function(){
    //         $('#hybr-price1').html("appart")
    //         $('#hybr-totalelevator1').html("app2")
    //             // $('#hybr-totalfloor1').html("33")
    //         document.getElementById("hybr-totalfloor1").innerHTML = totalStories1;
    //           });
        
    // })
    




    
})







