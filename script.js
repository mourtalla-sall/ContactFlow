
const accueil1 = document.getElementById('link-home')
const contact1 = document.getElementById('link-contact')

const pages ={ accueil: "<h1>Bienvenue sur ContactFlow</h1>",
    contact: "<form><input type ='password' name = 'password'>mot de passe <input type ='email' name = 'email'>Adresse Mail "
}
const rootdiv = document.getElementById("root")




function changerpage(nomDeLaPage) {
    rootdiv.innerHTML=pages[nomDeLaPage]
    
}
contact1.addEventListener('click',function(e){
    console.log("L'URL actuelle est :", window.location.pathname)
    history.pushState('null','','contact')
    console.log(history)
    e.preventDefault()
    changerpage('contact')
    console.log(history.state)
})
accueil1.addEventListener('click',function(e){
    console.log("L'URL actuelle est :", window.location.pathname)
    
e.preventDefault() 
history.pushState('null','','home')
changerpage('accueil')
})
console.log("L'URL actuelle est :", window.location.pathname)

