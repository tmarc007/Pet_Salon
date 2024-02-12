var globalVariable= "I'm in global scope";

function myFunction() {
    // This functon can access globalVariable console.log(globalVariable);

    console.log(globalVariable);
}

myFunction();
//--------
function myFunction2() {
    var localVar="I'm in local scope";

    console.log(localVar);

    if (true) {
        let blockVariable = "I'm in block scope";
        console.log(blockVariable);
    }
}


myFunction2();

function planeTicket(destination,price){
    console.log("Traveling to... " + destination);
    return price*1.11;
}

function calculateProfits(){
var price1=planeTicket("Mexico",100);
var price2=planeTicket("Italy",200);
var price3=planeTicket("China",150);

    console.log(price1+price2+price3);
}

calculateProfits();












// function calculateProfits(){
//     var price1=planeTicket("Italy",100);
//     var price2=planeTicket("Spain",200);
//     var price2=planeTicket("China",150);

//     console.log(price1+price2+price3)
// }

// calculateProfits();








