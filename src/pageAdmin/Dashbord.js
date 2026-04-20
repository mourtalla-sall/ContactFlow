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
            
            <div id="TableList"></div>
            <a href="javascript:prevPage()" id="btn_prev">Prev</a>&nbsp;
            <a href="javascript:nextPage()" id="btn_next">Next</a><br>
            page: <span id="page"></span>
        `)
}

export default Dashbord