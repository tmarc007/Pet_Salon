//constructor
function Pet(n,a,g,b,s,p,t){  
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.payment=p;
    this.type=t;
}

function getE(id){
    return document.getElementById(id);
}
//get element from Html
let inputName= getE("txtName");
let inputAge= getE("txtAge");
let inputGender= getE("txtGender");
let inputBreed= getE("txtBreed");
let inputService= getE("txtService");
let inputPayment= getE("txtPayment");
let inputType= getE("txtType");

function isValid(aPet){
    let validation=true;
    //Clear the style
    //Document.querySelectorAll("inputs");
    getE("txtName").classList.remove("alert-error");
    getE("txtAge").classList.remove("alert-error");
    getE("txtBreed").classList.remove("alert-error");
    if(aPet.name==""){
        //the pet is not valid
        validation=false;
        getE("txtName").classList.add("alert-error");
        getE("txtAge").classList.add("alert-error");
        getE("txtBreed").classList.add("alert-error");
    }
    if(aPet.age==""){
        validation=false;
        getE("txtName").classList.add("alert-error");
        getE("txtAge").classList.add("alert-error");
        getE("txtBreed").classList.add("alert-error");
    }
    return validation;
}

function showNotifications(msg,type){
    getE("notifications").classList.remove("hidden");
    getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;

    setTimeout(function(){
        getE("notifications").classList.add("hidden");
    },3000);
}
function register(){
    //1. get values
    //2. create the newPet using the constructor
    let newPet= new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputPayment.value,inputType.value);
    console.log(newPet);

    if(isValid(newPet)==true){
        //3. push the newPet to the array
        salon.pets.push(newPet);
        //4. call display function
        displayPetCards();
        //5. clear the input
        inputName.value="";
        inputAge.value="";
        inputGender.value="";
        inputBreed.value="";
        inputService.value="";
        inputPayment.value="";
        inputType.value="";
    }else{
        showNotifications("INPUT ERROR!!! ---> Please fill out all the reqired fields","alert-error");
}
}

function init(){
    //create predifined obj

    let pet3=new Pet("Speedy",2,"Male","Chihuahua","Nails","Debit","Dog");
    let pet4=new Pet("Scooby2",1,"Male","Pitbull","Vaccine","Debit","Dog");
    let pet5=new Pet("Scrappy2",1,"Male","Doberman","Grooming","Visa","Dog");
    let pet6=new Pet("Speedy2",1,"Male","Golden Retreiver","Grooming","Visa","Dog");
    salon.pets.push(pet3,pet4,pet5,pet6);
    //executing fn
    displayPetCards();
}
window.onload=init;//wait to render the HTML


















// function displayFooterInfo(){
//     let footerInfo = document.getElementsByClassName("footer-info");

//     for (let i = 0; i<footerInfo.length; i++){
//         footerInfo[i].innerHTML=`<p> Welcome to the ${salon.name} our address is: ${salon.address.number} ${salon.address.street}  ${salon.address.city} ${salon.address.state} ${salon.address.zip}</p>
//         `;
//     }
// }








window.onload=init; //wait to render the HTML


//* for assignment 3
function displayPetTable(){

}
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