let salon={
    name:"The fashion pet",
    phone:"555-555-5555",
    address:{
        street:"Bushnell Ave",
        number:"224",
        zip:"34546"
    }
}

let pet1={
    name:"Scooby",
    age:60
}

let pet2={
    name:"Scrappy"
    age:50
}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} the address is $(salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}
displayFooterInfo();