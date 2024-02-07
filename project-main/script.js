var arr=['home1.png','home2.png','home3.jpg','home4.jpeg','home5.png']
        z=0
                document.getElementById('a').src=arr[z]
        function pl(){
            ++z
            if(z>arr.length-1){
                z=0
            }
            document.getElementById('a').src=arr[z]
            
    
        }
        function mi(){
            --z
            if(z<0){
                z=arr.length-1
            }
            document.getElementById('a').src=arr[z]
        }
        setInterval(pl,8000)
        // end 

        var are=['ser1.jpg','ser2.jpg']
        ze=0
                document.getElementById('ae').src=are[ze]
        function ab(){
            ++ze
            if(ze>are.length-1){
                ze=0
            }
            document.getElementById('ae').src=are[ze]
            
    
        }
        function ac(){
            --ze
            if(ze<0){
                ze=are.length-1
            }
            document.getElementById('ae').src=are[ze]
        }





        // jquary

        $(document).ready(function(){
            $(".ta").on({
              mouseenter: function(){
                $(this).css("background-color", "lightgray");
              },  
              mouseleave: function(){
                $(this).css("background-color", "");
              }, 
              click: function(){
                $(this).css("background-color", "");
              }  
            });
          });



