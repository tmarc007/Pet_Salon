let salon={//object
    name:"🐶 The Fashion Pet 🐶",
    phone:"999-999-9999",
    address:{
        number:"262",
        street:"Heaven St.",
        city:"San Diego,",
        state:"California",
        zip:"92145"
    },
    pets:[] //array
}
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} We are located at: ${salon.address.number} ${salon.address.street}  ${salon.address.city} ${salon.address.state} ${salon.address.zip}</p>
    `;
}

displayFooterInfo();
