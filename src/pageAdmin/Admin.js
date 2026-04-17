console.log("admin")
function fetchcall ()  {
// (B1) GET FORM DATA
    const submitForm = document.getElementById("submit-form");
    console.log(submitForm)
    submitForm.addEventListener('click', async (e) => {
        e.preventDefault(); // IMPORTANT : Empêche la page de se recharger
        console.log("ici")
        

        async function envoyerDonnees() {

        const data = new FormData(document.getElementById("registerForm"));
        console.log(data)
        const obj = Object.fromEntries(data);
        console.log(obj)

        try {
            const response = await fetch("../../index.php", {
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
                    // Ici, tu pourrais rediriger l'utilisateur vers la page login sans recharger
                    // ex: window.location.hash = '#login';
                } else {
                    messageZone.innerHTML = `<p class="error">${result.message}</p>`;
                }    } catch (error) {
            console.error("Erreur lors de l'envoi:", error.message);
        }
          console.log(data)
        }

        envoyerDonnees()  
    })

}

fetchcall()