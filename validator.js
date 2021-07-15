var destin = document.getElementById("destin");
var origin = document.getElementById("origin");

destin.addEventListener("keyup", function (event)
{
    if(destin==origin)
    {
        destin.setCustomValidity("Origin and Destination can't be same");
    }
});

// function checkDestination()
// {
//     var origin = document.forms["RegForm"]["origin"];
//     var destin = document.forms["RegForm"]["destin"];

//     if(origin.value == destin.value)
//     {
//         window.alert("Origin and Destination cannot be same.");
//         destin.focus();
//         return false;
//     }

//     return true;
// }