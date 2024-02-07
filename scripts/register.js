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

function Pet(n,a,g){  //constructor
    this.name=n;
    this.age=a;
    this.gender=g;
}

function displayFooterInfo(){
    document.getElementById("info").innerHTML=`
    <p> Welcome to the ${salon.name} our address is: ${salon.address.number} ${salon.address.street}  ${salon.address.city} ${salon.address.state} ${salon.address.zip}</p>
    `;

    document.getElementById("info2").innerHTML=`
    <p> Welcome to the ${salon.name} our address is: ${salon.address.number} ${salon.address.street}  ${salon.address.city} ${salon.address.state} ${salon.address.zip}</p>
    `;

}

// function displayFooterInfo(){
//     let footerInfo = document.getElementsByClassName("footer-info");

//     for (let i = 0; i<footerInfo.length; i++){
//         footerInfo[i].innerHTML=`<p> Welcome to the ${salon.name} our address is: ${salon.address.number} ${salon.address.street}  ${salon.address.city} ${salon.address.state} ${salon.address.zip}</p>
//         `;
//     }
// }

function displayPetNames(){
    document.getElementById('pets').innerHTML="";
    for(let i=0; i<salon.pets.length; i++){
        document.getElementById('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    document.getElementById('totalPets').innerHTML=`Total=${salon.pets.length}`;

}

//get element from Html
let inputName= document.getElementById("txtName");
let inputAge= document.getElementById("txtAge");
let inputGender= document.getElementById("txtGender");

function register(){
    //1. get values
    //2. 
    let newPet= new Pet(inputName.value,inputAge.value,inputGender.value);
    console.log(newPet);
    //3. push the newPet to the array
    salon.pets.push(newPet);
    //4. call display function
    displayPetNames();
    //5. clear the input
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
}

function init(){
    //create predifined obj
    let pet1=new Pet("Jindo",2,"Male");
    let pet2=new Pet("Lolipop",1,"Male");
    let pet3=new Pet("Sparky",1,"Male");
    salon.pets.push(pet1,pet2,pet3);
    //executing fn
    displayPetNames();
    displayFooterInfo();
}

window.onload=init; //wait to render the HTML






    // pets:[ //pets array
    //     {
    //         name:"Jindo",
    //         age:"2 1/2 years",
    //         gender:"Female",
    //         skills: "ldlkdld dkdkjoei sdkjdf idid",
    //         breed: "Jindo"
    
    //     },
    //     {
        //         name:"Lolipop",
        //         age: "1 year",
        //         gender: "Female",
        //         skills: "dken disdid iwmdjdi iehdsh",
        //         breed: "Chihuahua"
        //     },
        //     {
            //         name:"Sparky",
            //         age:"10 months",
            //         gender: "Male",
            //         skills: "ddlfklk eiei;jf oieiof ieiiei",
            //         breed: "Pit bull"
            
        
     //pets array

// salon.pets.push(pet1,pet2);

// console.log(salon.pets[0].name);
// console.log(salon.pets[1].name);
// console.log(salon.pets[2].name);
// console.log(salon.pets.length);

// function displayFooterInfo(){
    // console.log(salon.name);
    // console.log(salon.phone);
    // console.log(salon.address.street);
    // document.write(`
    // <p> Welcome to the ${salon.name} the address is ${salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    // `)



// displayFooterInfo();
// function displayFooterInfo(){
    //     document.getElementById("info").innerHTML=`
    //     <p> Welcome to the ${salon.name} the address is $(salon.address.street} ${salon.address.number} ${salon.address.zip}</p>
    //     `;
    // }

// displayFooterInfo();