document.addEventListener('DOMContentLoaded', function() {
console.log("admin")

function fetchcall() {
    const submitForm = document.getElementById("submit-form");
    if (submitForm) {
        submitForm.addEventListener('click', async (e) => {
            e.preventDefault();

            async function envoyerDonnees() {
                const data = new FormData(document.getElementById("registerForm"));
                const obj = Object.fromEntries(data);

                try {
                    const response = await fetch("index.php", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(obj)
                    });

                    if (!response.ok) {
                        throw new Error(`Erreur HTTP: ${response.status}`);
                    }

                    const result = await response.json();
                    const messageZone = document.getElementById('message-zone');
                    if (result.status === "success") {
                        messageZone.innerHTML = `<p class="success">${result.message}</p>`;
                    } else {
                        messageZone.innerHTML = `<p class="error">${result.message}</p>`;
                    }
                } catch (error) {
                    console.error("Erreur lors de l'envoi:", error.message);
                }
            }

            envoyerDonnees();
        });
    }

}

async function getDataContact() {
    const tableauxContact = document.getElementById('tableauxContact');
    
    try {
        const response = await fetch('index.php');
        
        if (!response.ok) {
            throw new Error('Erreur: ' + response.status);
        }

        const dataContact = await response.json();

        tableauxContact.innerHTML = '';

        dataContact.forEach(contact => {
            tableauxContact.innerHTML += 
                '<tr>' +
                    '<td>' + contact.firstName + '</td>' +
                    '<td>' + contact.lastName + '</td>' +
                    '<td>' + contact.email + '</td>' +
                    '<td>' + contact.telephone + '</td>' +
                '</tr>';
        });

    } catch (error) {
        console.error('ERREUR:', error.message);
    }
}


getDataContact(); 
fetchcall();

 


});