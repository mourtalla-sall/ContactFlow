export default function AddContact() {
    return `
        <style>
            .auth-page {
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
            }
            .auth-container {
                background: white;
                padding: 2rem;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
                width: 400px;
            }
            .auth-container h1 {
                margin-bottom: 1rem;
            }
            .auth-container input {
                width: 100%;
                padding: 0.5rem;
                margin-bottom: 1rem;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
            .btn {
                width: 100%;
                padding: 0.5rem;
                background: #010408ff;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
            .btn:hover {
                background: #0056b3;
            }
        </style>
        <div class="auth-page">
            <div class="auth-container">
                <h1>Ajout Contact</h1>
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