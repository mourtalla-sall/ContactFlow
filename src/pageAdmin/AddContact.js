export default function AddContact() {
    return `
        <div class="auth-page">
            <div class="auth-container">
                <h1>Inscription</h1>
                <div id="message-zone"></div>
                <form id="registerForm">
                    <input type="text" name="firstName" placeholder="Prénom" required>
                    <input type="text" name="lastName" placeholder="Nom" required>
                    <input type="email" name="email" placeholder="Email" required>
                    <input type="num" name="telephone" placeholder="téléphone" required>
                    <button id="submit-form" type="button" class="btn">Validez</button>
                </form>
            </div>
        </div>
    `;
}
