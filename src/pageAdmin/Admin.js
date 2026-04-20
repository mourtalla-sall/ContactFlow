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
const pagination = [
  
];
var current_page = 1;
var pagination_per_page = 3;
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
    var btn_next = document.getElementById('btn_next');
    var btn_prev = document.getElementById('btn_prev');
    var listing_table = document.getElementById('TableList');
    var page_span = document.getElementById('page');
    if (page < 1) page = 1;
    if (page > totNumPages()) page = totNumPages();
    listing_table.innerHTML = '';
    for (var i = (page - 1) * pagination_per_page; i < (page * pagination_per_page); i++) {
        listing_table.innerHTML += pagination[i].number + '<br>';
    }
    page_span.innerHTML = page;
    if (page == 1) {
        btn_prev.style.visibility = 'hidden';
    } else {
        btn_prev.style.visibility = 'visible';
    }
    if (page == totNumPages()) {
        btn_next.style.visibility = 'hidden';
    } else {
        btn_next.style.visibility = 'visible';
    }
    }
    window.onload = function() {
    change(1);
    };


getDataContact(); 
nextPage()
fetchcall();

 


});