let btnGen=document.querySelector("button");

btnGen.addEventListener('click',() => {
let info=faker.helpers.createCard();

let {name,email,address:{city,country,zipcode}}=info;
document.querySelector("#name").value=name;
document.querySelector("#email").value=email;
document.querySelector("#city").value=city;
document.querySelector("#ZipCode").value=zipcode;
document.querySelector("#Country").value=country;
});