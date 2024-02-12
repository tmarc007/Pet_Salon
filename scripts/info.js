let salon={
    name:"Virtual Pets",
    phone:"555-555-5555",
    address:{
        number:"224",
        street:"Bushnell Ave.,",
        state: "CA",
        city: "Rancho Cuchmonga",
        zip:"94546"
    },
    pets:[]
}
function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} our address is: ${salon.address.number} ${salon.address.street}  ${salon.address.city} ${salon.address.state} ${salon.address.zip}</p>
    `;
}

displayFooterInfo();
