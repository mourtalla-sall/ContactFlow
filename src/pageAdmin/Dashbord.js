function Dashbord() {
    return(`
        <style>
            h1 {
                font-family: Arial, sans-serif;
                margin-bottom: 1rem;
            }
            table {
                width: 100%;
                border-collapse: collapse;
                margin-bottom: 1rem;
            }
            th, td {
                padding: 0.75rem;
                text-align: left;
                border: 1px solid #ddd;
            }
            th {
                background-color: #000102ff;
                color: white;
        
            #btn_prev, #btn_next {
                display: inline-block;
                padding: 0.5rem 1rem;
                background: #007bff;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                margin: 0.5rem;
            }
            #btn_prev:hover, #btn_next:hover {
                background: #0056b3;
            }
            #page {
                font-weight: bold;
            }
        </style>

        <h1>Dashboard</h1>
            <table>
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