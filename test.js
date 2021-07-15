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
        function appendData(data) {
            var mainContainer = document.getElementById("flight");
            for (var i = 0; i < data.length; i++) 
            {   if(data[i].Destination=="Mumbai")
                {
                  var div = document.createElement("div");
                div.innerHTML = 'Origin: ' + data[i].Origin + ' ' + data[i].Destination;
                mainContainer.appendChild(div);
                }
                
            }
        }