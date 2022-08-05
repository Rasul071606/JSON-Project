const fullNameHeading = document.getElementById("name")
fullNameHeading.innerHTML = data1[0].name.first + " " + data1[0].name.last

const personPic = document.getElementById("person");

const genderStat = document.getElementById("gender");
genderStat.innerHTML = "Gender: " + data1[0].gender

const ageStat = document.getElementById("age")
ageStat.innerHTML = data1[0].dob.age + " years old"

const addressStat = document.getElementById("address");
addressStat.innerHTML = data1[0].location.street.number + data1[0].location.street.name

const emailStat = document.getElementById("email");
emailStat.innerHTML = data1[0].email

const randomizerBtn = document.getElementById("btn");

function getPeopleData(){
    let randomIndex = Math.floor(Math.random()*data1.length);
    let randomPerson = data1[randomIndex];
    fullNameHeading.innerHTML = randomPerson.name.first + " " + randomPerson.name.last
    personPic.src = randomPerson.picture.large
    genderStat.innerHTML = "Gender: " + randomPerson.gender
    ageStat.innerHTML = "Age: " + randomPerson.dob.age + " years old"
    addressStat.innerHTML = "Address: " + randomPerson.location.street.number + randomPerson.location.street.name
    emailStat.innerHTML = "Email: " + randomPerson.email
    
}

randomizerBtn.onclick = function(event){
    event.preventDefault();
    getPeopleData();
}