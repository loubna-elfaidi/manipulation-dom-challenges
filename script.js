// let objet = {
//     Nom : "elfaidi" , 
//     email : "elafidi@gmail.com" ,
//     role : "developeuse"
// }


// const article = document.querySelector("#card")
// function afficher(){
//     objet.forEach(function(d){
//     const h = document.createElement("h2");
//     const p_email = document.createElement("p");
//     const p_role = document.createElement("p")

//     h.textContent = d.Nom ;
//     p_email.textContent = d.email ;
//     p_role.textContent = d.role ;

//     article.append(h , p_email , p_role);
// })
// }
// afficher();



// document.getElementById("nom").textContent = objet.Nom ;
// document.getElementById("email").textContent = objet.email ; 
// document.getElementById("role").textContent = objet.role ;



// const card = document.querySelector(".card");

// card.querySelector(".card-title").textContent = objet.Nom ; 
// card.querySelector(".card-email").textContent = objet.email ;
// card.querySelector(".card-role").textContent = objet.role ; 

// let objet = [
//     {
//     Nom : "elfaidi" , 
//     email : "elafidi@gmail.com" ,
//     role : "developeuse"
// },
// {
//     Nom :"sofia",
//     email:"sofia@gmail.com",
//     role: "editrice"
// },
// {
//     Nom :"yanis",
//     email:"yanis@gmail.com" ,
//     role: "dévloppeur"
// },
// {
//     Nom :"léa",
//     email:"lea@gmail.com",
//     role:"designer"
// },

// ]

// NIVEAU 1 :
// EX 1:

// const cards = document.querySelectorAll("grid")

// let prénom = "loubna";
// const span = document.querySelector("#prenom");
// span.textContent = prénom

// EX2 :

// const btn = document.createElement("button");
// btn.addEventListener("click" , ()=>{
//     console.log("cliquer");
// });

// EX 3 : 

// const paragraphe  = document.querySelector("#text");
// // paragraphe.textContent = "Ce texte va changer de style.";
// const btn = document.querySelector("#style-btn");
// // btn.textContent = "Styliser";
// btn.addEventListener("click" , ()=>{
//     paragraphe.style.color = "red";
//     paragraphe.style.fontSize = "20px";
// })

//  EX 4 :
// // const body = document.querySelector("body")
// const p = document.createElement("p");
// p.textContent = "Ajoutez-y du texte";
// document.body.appendChild(p)

// EX 5 : 

// const input = document.querySelector("#name-input");
// const btn = document.querySelector("#validate-btn");
// const titre = document.querySelector("#output");

// btn.addEventListener("click" , ()=>{
//     titre.textContent = input.value
// })

// EX 6 : 

// const liste = document.querySelector("#todo");
// const input = document.querySelector("#todo-input");
// const btn = document.querySelector("#add-btn");

// btn.addEventListener("click" , ()=>{
//     const li = document.createElement("li");
//     li.textContent = input.value 
//     liste.appendChild(li);
// })

// NIVEAU 2 

// EX 1 

// const user = {
//   nom: "Karim Benali",
//   email: "karim@exemple.com",
//   role: "Administrateur",
// };

// const article = document.querySelector("#card")

// const Nom = document.querySelector("#user-name");
// Nom.textContent = user.nom ;
// const Email = document.querySelector("#user-email");
// Email.textContent = user.email ; 
// const Role = document.querySelector("#user-role");
// Role.textContent = user.role ;

// article.append(Nom , Email , Role);

// EX 2 : 

// const bouton = document.querySelector("#btn");
// bouton.addEventListener("click" , ()=>{
//    event.target.textContent = "C'est cliqué !";
// })

// EX 3 :

// const bouton = document.querySelector("#toggle-btn");
// const card = document.querySelector("#details");

// bouton.addEventListener("click" , ()=>{
//     if(card.style.display === "none"){
//         card.style.display = "block"
//     }else{
//          card.style.display = "none";
//     }
// })

// EX 4 :

// const image = document.createElement("img")
// image.setAttribute("src" , "https://questgrid-three.vercel.app/images/paysage.png")
// image.classList.add("rounded-img")
// document.querySelector("#image-container").append(image);



// EX 5 :

// const input = document.querySelector("#inpt")
// const p = document.querySelector("#para")

// input.addEventListener("input" , ()=>{
//     p.textContent = input.value ;
// })

// EX 6 :

// const liste = document.querySelector("#todo");
// const input = document.querySelector("#todo-input");
// const btn = document.querySelector("#add-btn");



// liste.addEventListener("click" , (event)=>{
//     const li = event.target.closest('li');
//    li.classList.toggle("done");
// })
// btn.addEventListener("click" , ()=>{
//     const li = document.createElement("li");
//     li.textContent = input.value;
//     liste.append(li);

// })

// NIVEAU 3 : 

// EX 1 :

// const user = {
//   nom: "Karim Benali",
//   email: "karim@exemple.com",
//   role: "Administrateur",
// };

// const card = document.querySelector(".card");

// card.querySelector(".card-title").textContent= user.nom;
// card.querySelector(".card-email").textContent= user.email;
// card.querySelector("card-role").textContent = user.role

// EX 2 : 

// const boutons = document.querySelectorAll(".btn");

// boutons.forEach(function(btn){
//     btn.addEventListener("click" , ()=>{
//         btn.textContent = "clique"
//     })
// })

// EX 3 : 

// const listes = document.querySelectorAll("li")


// listes.forEach(function(liste){
//     liste.addEventListener("click" , ()=>{
//         listes.forEach((li)=> li.classList.remove("active"))
//         liste.classList.add("active")
       
//     })
// })

// EX 4 : 

// const langages = ["JavaScript", "Python", "Rust", "Go", "TypeScript"];

// const container = document.querySelector("#list-container");

// const liste = document.createElement("ul");

// langages.forEach(function(langage){
//     const li = document.createElement("li");
//     li.textContent = langage ; 
//     liste.append(li);
// })
// container.append(liste)

// EX 5 :

// const form = document.getElementById("signup-form");

// form.addEventListener("submit" , (event)=>{
//     event.preventDefault();
//     const formData = {
//         nom : form.username.value ,
//         email :form.email.value
//     }
//     console.log(formData);
    

// })

// EX 6 :

// const input = document.querySelector("#search");
// const cards = document.querySelectorAll("#cards");
// input.addEventListener("input" , ()=>{
//     const query = input.value.toLocaleLowerCase();
//     cards.forEach(function(card){
//         const text = card.textContent.toLocaleLowerCase();
//         card.style.display = text.includes(query) ? "block" : "none"


//     })
// })




