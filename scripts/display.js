function displayPetNames(){
    getE('pets').innerHTML="";
    for (let i=0; i<salon.pets.length; i++){
        getE('pets').innerHTML+=`<p>${salon.pets[i].name}</p>`;
    }
    getE('totalPets').innerHTML=`Total=${salon.pets.length}`;
    
}

function displayPetCards(){
    getE('pets').innerHTML="";
    let card="";
    for (let i=0; i<salon.pets.length; i++){
        let pet = salon.pets[i];
        card+=`
            <div class="petCard">
                <p>Name: ${pet.name}</p>
                <p>Age: ${pet.age}</p>
                <p>Gender: ${pet.gender}</p>
                <p>Breed: ${pet.breed}</p>
                <p>Service: ${pet.service}</p>
                <p>Payment: ${pet.payment}</p>
                <p>Type: ${pet.type}</p>
            </div>
        `;
    }
    getE('pets').innerHTML=card;
}
function displayPetTable()































//Fernandas info that I can't make sense of
//     getE('t_pet').innerHTML="";
//     let infoT="";
//     let pet-"";
//     let lengthPet=salon.pets.length;

//     for(let i=0; i<salon.pets.length; i++){
//         if(order==true){
//             lengthPet-=1;
//             pet=salon.pets[lengthPet];
//         }else{
//             pet-salon.pets[i];
//         }
//         infoT += `
//         <tr>
//             <td>${pet.name}</td>
//             <td>${pet.age}</td>
//             <td>${pet.gender}</td>
//             <td>${pet.breed}</td>
//             <td>${pet.service}</td>
//             <td>${pet.payment}</td>
//             <td>${pet.type}</td>
//         </tr>
//         `;
//     }
//     getE('t_pet').innerHTML=`
//     <table>
//         <thead>
//             <th>Name</th>
//             <th>Age</th>
//             <th>Gender</th>
//             <th>Breed</th>
//             <th>Service</th>
//             <th>Payment</th>
//             <th>Type</th>
//         </thead>
//         <tbody>
//             ${infoT}
//         </tbody>
//     </table>
//     `;
// }

// // invert information
// let invert=true;
// function invertPets(){
//     invert=!invert;
//     displayPetTable(invert);
// }











