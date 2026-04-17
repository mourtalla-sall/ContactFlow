import AddContact from "./src/pageAdmin/AddContact";
import Admin from "./src/pageAdmin/AddContact";

console.log('plop')
const result = AddContact()

const mainContainer = document.getElementById("main-container")
mainContainer.innerHTML = result

