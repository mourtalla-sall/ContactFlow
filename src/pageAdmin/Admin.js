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
                        let container  = document.getElementById('tableauxContact')
                        let tr = document.createElement("tr")
                        let td = document.createElement("td")

                        tr.appendChild(td)
                        td.innerHTML = "toto"
                        container.appendChild(tr)

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

//  pagination remplie par getDataContact
let pagination = [];
let current_page = 1;
const pagination_per_page = 2;

function totNumPages() {
  return Math.ceil(pagination.length / pagination_per_page);
}

function prevPage() {
  if (current_page > 1) {
    current_page--;
    change(current_page);
  }
}
function nextPage() {
  if (current_page < totNumPages()) {
    current_page++;
    change(current_page);
  }
}

function change(page) {
    let btn_next = document.getElementById('btn_next');
    let btn_prev = document.getElementById('btn_prev');
    let listing_table = document.getElementById('tableauxContact'); 
    let page_span = document.getElementById('page');

    if (page < 1) page = 1;
    if (page > totNumPages()) page = totNumPages();

    listing_table.innerHTML = '';

    // affiche les contacts de la page courante
    let debut = (page - 1) * pagination_per_page;
    var fin = page * pagination_per_page;
    for (var i = debut; i < fin && i < pagination.length; i++) {
        listing_table.innerHTML +=
            '<tr>' +
                '<td>' + pagination[i].firstName + '</td>' +
                '<td>' + pagination[i].lastName + '</td>' +
                '<td>' + pagination[i].email + '</td>' +
                '<td>' + pagination[i].telephone + '</td>' +
            '</tr>';
    }

    if (page_span) page_span.innerHTML = page + ' / ' + totNumPages();
        if (btn_prev) {
            if (page == 1) {
                btn_prev.style.visibility = 'hidden';
            } else {
                btn_prev.style.visibility = 'visible';
            }
        }

        if (btn_next) {
            if (page == totNumPages()) {
                btn_next.style.visibility = 'hidden';
            } else {
                btn_next.style.visibility = 'visible';
            }
        }
    }

async function getDataContact() {
    try {
        const response = await fetch('index.php');
        
        if (!response.ok) {
            throw new Error('Erreur: ' + response.status);
        }

        const dataContact = await response.json();
        console.log(dataContact);

        // remplit pagination avec les contacts
        pagination = dataContact;

        // affiche la première page
        change(1);

    } catch (error) {
        console.error('ERREUR:', error.message);
    }
}

// boutons pagination
let btn_prev = document.getElementById('btn_prev');
let btn_next = document.getElementById('btn_next');
if (btn_prev) btn_prev.addEventListener('click', prevPage);
if (btn_next) btn_next.addEventListener('click', nextPage);

getDataContact(); 
fetchcall();

});