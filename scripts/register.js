let petID=0
//constructor
function Pet(n,a,g,b,s,p,t){
    this.name=n;
    this.age=a;
    this.gender=g;
    this.breed=b;
    this.service=s;
    this.payment=p;
    this.type=t;
    this.id=petID++;
}

function getE(id){
    return document.getElementById(id);
}
//get elements from HTML
let inputName= getE("txtName");
let inputAge= getE("txtAge");
let inputGender= getE("txtGender");
let inputBreed= getE("txtBreed");
let inputService=getE("txtService");
let inputPayment= getE("txtPayment");
let inputType= getE("txtType");


function isValid(aPet){
    let validation=true;
    //clear the style
    //document.querySelectorAll("inputs");
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
        getE("txtAge").classList.add("alert-error");
        getE("txtAge").classList.add("alert-error");
        getE("txtBreed").classList.add("alert-error");
    }
    return validation;
}

function showNotifications(msg,type){
    // getE("notifications").classList.remove("hidden");
    $("#notifications").slideDown(1000);
    getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;
    getE("notifications").innerHTML=`<p class="${type}">${msg} </p>`;
    $("#notifications").slideUp(2000);
    // setTimeout(function(){
    //     getE("notifications").classList.add("hidden");
    // },3000);
}
function register(){
    //1)getting value
    //2) create the newPet using the constructor
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputPayment.value,inputType.value);
    console.log(newPet);

    if(isValid(newPet)==true){
        //3) push the newPet to the array
        salon.pets.push(newPet);
        //4) call display function
        saveItem(newPet,"petsDB");
        displayPetCards();
        //5) clear the input
        inputName.value="";
        inputAge.value="";
        inputGender.value="";
        inputBreed.value="";
        inputService.value="";
        inputPayment.value="";
        inputType.value="";

        showNotifications("Successful registration","alert-success");
    }else{
        showNotifications("Please fill out all the required fields","alert-error");
    }
}
function deletePet(petID){
    let deleteIndex;// to get the index of the array (positon of the odj)
    for(let i=0; i<salon.pets.length; i++){
        let pet = salon.pets[i];
        if(pet.id==petID){
            deleteIndex=i;
            break;
        }
    }
    getE(petID).remove();//remove from the HTML
    salon.pets.splice(deleteIndex,1);//remove the pet from the array
}

function getServices(){
    let servicesList = readItems("services");
    for(let i=0; i<servicesList.length; i++){
        let service = servicesList[i];
        $("#txtService").append(
            `<option value="${service.description}">${service.description}</option>`
        );
    }
}
function init(){
    //creating predefined obj
    
    let pet3=new Pet("Speedy",2,"Male","Chihuahua","Nails","Debit","Dog");
    let pet4=new Pet("Scooby2",1,"Male","Pitbull","Vaccine","Debit","Dog");
    let pet5=new Pet("Scrappy2",1,"Male","Doberman","Grooming","Visa","Dog");
    let pet6=new Pet("Speedy2",1,"Male","Golden Retreiver","Grooming","Visa","Dog");
    salon.pets.push(pet3,pet4,pet5,pet6);
    //exacuting fn
    displayPetCards();
    getServices();
}
window.onload=init;// wait to render the HTML

