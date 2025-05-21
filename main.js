//Function expression to select elements `

// const selectElement = (s) => document.querySelector(s);
// const navLinks = document.querySelectorAll(".nav-link");

// selectElement(".burger-menu-icon").addEventListener("click", () => {
//     selectElement(".nav-list").classList.toggle("active");
//     selectElement(".burger-menu-icon").classList.toggle("toggle")

//     navLinks.forEach((link, index) => {
//         if (link.style.animation){
//             link.style.animation = ""
//         }else{
//             link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
//             console.log(index/7 + 0.5)
//         }
//     })
// });

// navLinks.forEach(link => {
//     link.addEventListener("click", () => {
//         selectElement(".nav-list").classList.toggle("active");
//         selectElement(".burger-menu-icon").classList.toggle("toggle");

//         navLinks.forEach((link, index) => {
//             if (link.style.animation){
//                 link.style.animation = ""
//             }else{
//                 link.style.animation = `navLinkAnimate 0.5s ease forwards ${ index/7 + 0.5}s`
//                 console.log(index/7 + 0.5)
//             }
//         })
//     })
// })
 const mainMenu = document.querySelector('.mainMenu');
 const closeMenu = document.querySelector('.closeMenu');
 const openMenu = document.querySelector('.openMenu');


 openMenu.addEventListener('click',show);
 closeMenu.addEventListener('click',close);
 mainMenu.addEventListener('click',close);

 function show(){
     mainMenu.style.display = 'flex';
     mainMenu.style.top = '0';
 }
 function close(){
     mainMenu.style.top = '-100%';
 }
