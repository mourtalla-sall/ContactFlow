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
