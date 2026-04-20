import AddContact from "./src/pageAdmin/AddContact";
import Dashbord from "./src/pageAdmin/Dashbord";
import Admin from "./src/pageAdmin/AddContact";

console.log('plop')
const result = AddContact()
const dashbord = Dashbord()

// const mainContainer = document.getElementById("main-container")
// mainContainer.innerHTML = result;
const mainContainer = document.getElementById("main-container")
mainContainer.innerHTML = dashbord + result;

const accueil1 = document.getElementById('link-home')
const contact1 = document.getElementsByClassName('link-contact')

const BASE_URL = "/Contactflow"

const routes = [
    { path : BASE_URL + "/", file : "./pages/Home.js" },
    { path : BASE_URL + "/contact", file: "./pages/Contact.js"},
    { path : BASE_URL + "/fav", file: "./pages/Favorites.js"}
]


// const pages ={ accueil: ` <section class='hero'>
//     <h1>Contactflow</h1>
//     <p>Le Lorem Ipsum est du texte latin utilisé pourla composition et la mise en page avant impression</p>
//     <a href='/contact' class='link-contact'>Voir les contact</a><button class='btn-dark' onclick='changer()'>Changer couleur</button>`,
//     contact: `<h1>
//     Contactflow</h1>
//     <div>
//         <div>
//             <input type='text' placeholder='rechercher un contact'>
//             <button></button></div>
//             <button>Add Contact</button></div>
//             <div><table><thead><tr><th>Prénom</th><th>Nom</th><th>Email</th><th>Téléphone</th><th>Action</th></tr></thead><tbody><tr><td>Lamali</td><td>Abdallah</td><td>lamali@gmail.com</td><td>Téléphone</td><td></td></tr><tr><td>Rayane</td><td>Benoudia</td><td>rayane@gmail.com</td><td>Téléphone</td><td></td></tr><tr><td>Mourtalla</td><td>Sall</td><td>mourtalla@gmail.com</td><td>Téléphone</td><td></td></tr></tbody></table></div>`}
// const rootdiv = document.getElementById("root")


const router = async () => {
    const currentPath = location.pathname;
    console.log(currentPath,"currentPath")
    let match = null;

    for (let i = 0; i < routes.length; i++) {
        const route = routes[i];
        console.log(route, 'route')

        if (currentPath === route.path || currentPath === route.path + "/") {
            match = route; 
            break;         
        }
    }

    const appContainer = document.getElementById("root");

    // console.log(await match.file,'toto')
    if (match !== null) {
        try {
            const module = await import(match.file);
            const render = module.default;
            
            appContainer.innerHTML = render();
        } catch (error) {
            console.error("Erreur de chargement du module :", error);
            appContainer.innerHTML = "<h1>Erreur de chargement</h1>";
        }
    } else {
        appContainer.innerHTML = "<h1>404</h1><p>Page introuvable.</p>";
    }
};

router()

// function changerpage(nomDeLaPage) {
//     rootdiv.innerHTML=pages[nomDeLaPage]
    
// }
// console.log(contact1)
// for (let index = 0; index < contact1.length; index++) {
//     const element = contact1[index];
    
//     console.log(element,'element')
//     contact1[index].addEventListener('click', function(e){
//         console.log("L'URL actuelle est :", window.location.pathname)
//         history.pushState('null','','contact')
//         console.log(history)
//         e.preventDefault()
//         changerpage('contact')
//         console.log(history.state)
// })};

// accueil1.addEventListener('click',function(e){
//     console.log("L'URL actuelle est :", window.location.pathname)
    
// e.preventDefault() 
// history.pushState('null','','home')
// changerpage('accueil')
// })
// console.log("L'URL actuelle est :", window.location.pathname)

