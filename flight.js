 
    document.getElementById('formSearch').onsubmit = function() 
    { 
        var dest = document.getElementById('formSearch').destin.value;
        var orig = document.getElementById('formSearch').origin.value;
        
        
            var ele = document.getElementsByName('radioone');
            var radio=0;
            for(i = 0; i < ele.length; i++) 
            {   if(ele[i].checked)
                    radio=ele[i].value;
            }
        
        
            fetch('flight.json')
            .then(function (response) 
            {
                 return response.json();
            })
            .then(function (data) 
            {
               appendData(data);
            })
            .catch(function (err) 
            {
                console.log('error: ' + err);
            });
            
            function appendData(data) 
            {
                var mainContainer=document.getElementById("flight1");
                   
                if(orig!=dest)
                {
                    var journey=document.getElementById("journey");
                    var journ = document.createElement("div");
                    journ.setAttribute("id","jour");
                    
                    if(radio==1)
                    {
                        journ.innerHTML=orig + " > " + dest + " > " + orig;

                    }

                    else
                    {
                        journ.innerHTML = orig + " > " + dest;
                    }

                    journey.append(journ);
                }
                             
                for (var i = 0; i < data.length; i++) 
                {   if((data[i].destination==dest)&&(data[i].origin==orig))
                    {
                        var conta = document.createElement("div")
                        conta.setAttribute("id","flight");
                        mainContainer.append(conta);
                      
                        
                        var contain = document.createElement("div")
                        contain.setAttribute("id","flight2");
                        conta.append(contain); 

                        var fcost=document.createElement("span");
                        fcost.setAttribute("id", "cost");
                        fcost.innerHTML ="Rs. " + data[i].cost;
                        contain.appendChild(fcost);

                        var fno=document.createElement("span");
                        fno.setAttribute("id", "flightno");
                        fno.innerHTML = data[i].a;
                        contain.appendChild(fno);

                        var orgdes = document.createElement("span");
                        orgdes.setAttribute("id", "orig-dest");
                        orgdes.innerHTML = data[i].ap + " > " + data[i].ap1;
                        contain.appendChild(orgdes);

                        var depart=document.createElement("span");
                        depart.setAttribute("id", "departure");
                        depart.innerHTML = "Departure: " + data[i].de;
                        contain.appendChild(depart);

                        var arriv=document.createElement("span");
                        arriv.setAttribute("id", "arrival");
                        arriv.innerHTML = "Arrival: " + data[i].ar;
                        contain.appendChild(arriv);
                        
                        var button = document.createElement("button");
                        button.setAttribute("")
                        contain.appendChild(button);
                       
                
                    }

                        // else    
                        //     {
                        //         var noflight = document.createAttribute("div");
                        //         noflight.setAttribute("id","nofl");
                        //         noflight.innerHTML="No Flights Found!";
                        //         mainContainer.appendChild(noflight);
                        //         console.log("Uh oh")
                        //     }
                
                }
            }
        return false;
    };

 