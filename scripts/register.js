let salon={
    name:"The fashion pet",
    phone:"555-555-5555",
    address:{
        street:"Bushnell Ave",
        number:"224",
        zip:"34546"
    },
    pets:[ //pets array
        {
            name:"Scooby",
            age:3
        },
        {
            name:"Scrappy",
            age:1
        },
        {
            name:"Tweety",
            age:3
        }
    ]  //pets array
}
// salon.pets.push(pet1,pet2);

console.log(salon.pets[0].name);
console.log(salon.pets[1].name);
console.log(salon.pets[2].name);
console.log(salon.pets.length);

function displayFooterInfo(){
    // console.log(salon.name);
    // console.log(salon.phone);
    // console.log(salon.address.street);
    // document.write(`
    // <p> Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    // `)
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    `;
}
displayFooterInfo();



// function displayFooterInfo(){
//     document.getElementById("info").innerHTML=`
//     <p> Welcome to the ${salon.name} the address is $(salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
//     `;
// }
// displayFooterInfo();