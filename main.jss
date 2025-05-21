@import url("https://fonts.googleapis.com/css2?family=Poppins&family=Share+Tech+Mono&display=swap");

/* Global styles */

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
}

html {
  font-family: PredigeRoundedPanic,"Trebuchet MS","Helvetica Rounded",Arial,sans-serif;
  font-size: 12px;
  box-sizing: border-box;
  scroll-behavior: smooth;
  color: #080D14;
  background: #FEF9c7;
  overflow-x: hidden;
}

.mapouter{position:relative;text-align:right;height:403px;width:420px;}.gmap_canvas {overflow:hidden;background:none!important;height:403px;width:420px;}

a {
  text-decoration: none;
  color: #303C6C;
}

a:hover {
  color: #F172A1;
}

ul {
  list-style: none;
}

p {
  font-size: 1.4rem;
}
/* Animated text*/

.ml15 {
  font-weight: 300;
  font-size: 1.8em;
  text-transform: uppercase;
  letter-spacing: 0.5em;

}

.ml15 .word {
  display: inline-block;
  line-height: 1em;
}


/* header */

header {
  width: 100%;
  height: 5rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
}

.container {
  width: 100%;
  max-width: 90rem;
  max-height: 80vh;
  margin: 0 auto;
  padding: 0 ;
}

nav {
    background: #9FEDD7;
    color: #303C6C;
    display: flex;
    justify-content: space-between;
}
nav .mainMenu {
    display: flex;
    list-style: none;
}
nav .mainMenu li a {
    display: inline-block;
    padding: 15px;
    text-decoration: none;
    text-transform: uppercase;
    color: #303C6C;
    font-size: 1.5rem;
}
nav .mainMenu li a:hover {
    background: #F172A1;
    text-decoration: overline underline;
}
nav .openMenu {
    font-size: 2rem;
    margin: 20px;
    display: none;
    cursor: pointer;
}
nav .mainMenu .closeMenu , .icons i {
    font-size: 2rem;
    display: none;
    cursor: pointer;
}
/*.fa-facebook:hover {color: rgb(0, 110, 255);}
.fa-twitter:hover {color: rgb(86, 154, 243);}
.fa-instagram:hover {color: rgb(255, 0, 191);}
.fa-github:hover {color: rgb(255, 123, 0);}*/

nav .logo img{
    margin: 0;
    width: 155px;
    height: 155px;
    cursor: pointer;
}
nav .mainMenu {
        height: 100vh;
        position: fixed;
        top: 0;
        right: 0;
        left: 0;
        z-index: 10;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: #9FEDD7;
        transition: top 1s ease;
        display: none;
    }
    nav .mainMenu .closeMenu {
        display: block;
        position: absolute;
        top: 20px;
        right: 20px;

    }
    nav .openMenu {
        display: block;
    }
    nav .mainMenu li a:hover {
        background: none;
        color: #F172A1;
        font-size: 1.6rem;
    }
    .icons i {
        display: inline-block;
        padding: 12px;
    }

@keyframes navLinkAnimate {
  from {
    opacity: 0;
    transform: translate(50px);

  }
  to {
    opacity: 1;
    transform: translate(0px);

  }
}

/* Landing Page */
.landing-page {
  
  height: 80vh;
  width: 100%;
  max-height: 100rem;
  /*padding: 2.5rem;*/
  align-content: center;
  background-color:#9FEDD7;

    
}

.main-message {
  width: 100%;
  text-transform: uppercase;
  position: absolute;
  left: 50%;
  top: 50%;
  
  transform: translate(-50%, -50%);
  text-align: center;
}

.main-message h2 {
  letter-spacing: 1rem;
  font-size: 2rem;
  white-space: nowrap;
  /*animation: typing 4s steps(27) ;*/
  width: 27ch;
  margin: auto;
  display: block;
  
}

@keyframes typing {
  from{
    width: 0ch;
  }
  to {
    width: 27ch;
  }
}

.main-message h3 {
  font-size: 4rem;
  margin: 1rem 0;
 
  
}

.main-message p {
  text-transform: none;
  font-size: 1.7rem;
  font-weight: 400;
}

.intro-btn {
  display: flex;
  justify-content: center;
}

.btn {
  margin: 0 9px;
  background: #fef9c7;
  border-radius: 2rem;
  color: #303C6C;
  padding: 1rem 2.5rem;
  display: inline-block;
  margin-top: 2rem;
  transition: background-color 650ms ;
  font-weight: 500;
  letter-spacing: 2px;
}

.btn:hover {
  color: #fafafa;
  background-color:#F172A1;
}

.scroll-down i {
  color: #303C6C;
  transition: color 650ms;
  margin-top: 2rem;
  font-size: 3.5rem;
}

.scroll-down i:hover {
  color: #F172A1;
}

/* About */

.about {
  width: 100%;
  max-height: 80vh;
  margin: 2rem 0;
  
}

.about .container {
  display: flex;
  text-align: center;
}


.about-text-box {
  
  height: 24rem;
  width: auto;
  margin: 2rem;
  
  
}

.about-text-box h2 {
  font-size: 4rem;
  margin-bottom: 20px;
}

.about-text-box p {
  
  font-size: 1.4rem;
  margin-bottom: 1.45rem;
}

/*Skills and education */

.education {
  
  background-color:#026670;
  width: 100%;
  max-height: 100rem;

  
  
}
/*.education .container{
    width: 100%;
    
  }*/

.title-heading {
  text-align: center;
  padding: 3rem 0;
}

.title-heading h2 {
  font-size: 2rem;
  margin: 0.5rem 0 1rem 0;
}

.title-heading p {
  font-family: "Poppins", sans-serif;
  margin-bottom: 5rem;
}

.education-tiers {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(25rem, 1fr));
  gap: 1rem;
  min-height: 60vh;
  /*padding-top: 2rem;*/

}

.tier-item {
  max-height: 40vh;
  padding: 3rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: default;
}


.tier-item i {
  font-size: 3.5rem;
}

.tier-item h2 {
  font-size: 2rem;
  margin: 2rem 0;
  text-decoration: underline;
  color:rgba(22,22,22, 1);
  
}
.tier-item h3 {
  font-size: 20px;
  margin: 1rem 0;
  color:rgba(22,22,22, 1);
}

.tier-item p {
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
}
.tier-item ul {
  font-family: "Poppins", sans-serif;
  font-size: 1.4rem;
  list-style-type: square;
}



/* Contact */

.contact {
  width: 100%;
  max-width: 120vh;
  margin: auto;
}

.contact h2 {
  text-align: center;
  font-size: 2.5rem;
  padding: 3rem 0;
  

}
.contact i{
  padding: 2rem;

}

.contact p {
  
  font-size: 1.4rem;
  padding: 3rem;
  margin: 0.9rem 2rem;
}

.contact .container {
  
  display: flex;
  margin: auto;
  align-items: center;
}

/* Footer */

footer {
  width: 100%;
  max-height: 100rem;
  color: #080D14;
  background-color:#9FEDD7;
  text-align: center;
  font-size: 1.2rem;
  display: flex;
  padding-top: 3rem;
  justify-content: center;
  flex-direction: column;
}

footer a {
  margin: 3rem 0.2rem;
}

.footer-coded-by {
  margin: 2rem 0;
}

.footer-social a {
  margin: 0 0.5rem;
  font-size: 2rem;
}

/* Responsive Design */

@media (max-width: 700px) {


.container {
  max-height: 60%;
  max-width: 700px;
  flex-direction: column;
  margin: 0;
}



.main-message h3 {
    font-size: 3rem;
  }


  p {
    font-size: 1.3rem;
  }
  
.title-heading {
    margin: 0;
  }

.main-message h2 {
    letter-spacing: 1rem;
    font-size: 1.5rem;
  }

.main-message h3 {
    font-size: 2rem;
  }

.main-message p {
    font-size: 1.3rem;
  }
.btn {
    border-radius: 0.9rem;
    padding: 0.9rem 0.9rem;
  }

.about-text-box{
    flex-direction: column;
    margin-bottom: 15rem; 
  }
.about-text-box h2 {
    font-size: 3rem;
    margin-bottom: 20px;
  }
.about-text-box p {
    margin-bottom: 3rem;
  }

.title-heading h2 {
    margin-bottom: 2rem;
  }
.title-heading p {
    font-size: 1.3rem;
  }

.education {
  margin: auto;
  align-content: center;
 
}

.contact {
  margin: auto;
  align-content: center;
}

  .row:after {
  content: "";
  display: table;
  clear: both;
}

  footer,
  footer p {
    font-size: 1.2rem;
  
  }
