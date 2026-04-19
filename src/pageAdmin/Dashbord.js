function Dashbord() {
    return(`
        <h1>Dashboard</h1>
            <table class='border 1'>
                <thead>
                    <tr>
                        <th>Prénom</th>
                        <th>Nom</th>
                        <th>Email</th>
                        <th>Téléphone</th>
                    </tr>
                </thead>
                <tbody id="tableauxContact">
                </tbody>
            </table>
        `)
}

export default Dashbord