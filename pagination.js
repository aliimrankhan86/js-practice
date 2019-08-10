<!DOCTYPE HTML>
<html>

<head>
    <title>Fetch API & Pagination</title>
    <style type="text/css">
        #table {
            width: 100%;
            border: 0.1rem solid black;
            border-collapse: collapse;
        }

        #table td {
            border: 0.1rem solid black;
            border-collapse: collapse;
        }

        #table tr:nth-child(1) th {
            text-align: center;
            font-weight: bold;
            border-right: 0.1rem solid black;
        }

        #table tr:nth-child(1) td {
            text-align: center;
            font-weight: bold;
            border-right: 0.1rem solid black;
        }

        #buttons {
            margin: 20px auto;
            display: block;
            max-width: 200px;
        }

        #buttons button {
            display: inline-block;
            padding: 8px;
            margin: 0 5px;
            font-size: 1.2rem;
        }
    </style>
</head>

<body>
    <h1>Fetch Api & Paginaion</h1>

    <table id="table">
        <tr>
            <th>No</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>ID</th>
        </tr>
    </table>

    <div id="buttons"></div>


    <script type="text/javascript">
        const api = fetch('https://randomuser.me/api/?results=50')
            .then(res => res.json())
            .then(data => {
                var newData = data.results;
                var index = 0;
                var tempArray = [];
                var masterArray = [];
                var table = document.getElementById('table');
                var btns = document.getElementById('buttons');
                // console.log(newData);

                // creating objects of the pieces of information for pagination
                var listofobjects = newData.map((item, index) => {
                    var objs = {
                        index: index + 1,
                        name: item.name.first,
                        gender: item.gender,
                        email: item.email,
                        id: item.id
                    }
                    return objs;
                })

                listofobjects.forEach(element => {
                    index++;
                    if (index < 10) {
                        tempArray.push(element);
                    }
                    else {
                        masterArray.push(tempArray);
                        index = 0;
                        tempArray = [];
                    }
                });

                console.log(masterArray)

                // for the pagination to be available on load
                firstTable();


                masterArray.forEach((element, index) => {
                    var btn = document.createElement('button');
                    btn.innerHTML = index + 1;
                    btns.appendChild(btn);
                    btn.addEventListener('click', function () {
                        destroyTable();
                        createTable(index);
                    })
                })

                function createTable(i) {
                    masterArray[i].forEach((item, index) => {
                        var tr = table.insertRow(-1);
                        var tdNo = tr.insertCell(0);
                        var tdName = tr.insertCell(1);
                        var tdGender = tr.insertCell(2);
                        var tdEmail = tr.insertCell(3);
                        var tdId = tr.insertCell(4);
                        tdNo.innerHTML = item.index;
                        tdName.innerHTML = item.name;
                        tdGender.innerHTML = item.gender;
                        tdEmail.innerHTML = item.email;
                        tdId.innerHTML = item.id;
                    })
                }

                function destroyTable() {
                    table.innerHTML = " ";
                    var tr = table.insertRow(-1);
                    var tdNo = tr.insertCell(0);
                    var tdName = tr.insertCell(1);
                    var tdGender = tr.insertCell(2);
                    var tdEmail = tr.insertCell(3);
                    var tdId = tr.insertCell(4);
                    tdNo.innerHTML = "No";
                    tdName.innerHTML = "Name";
                    tdGender.innerHTML = "Gender";
                    tdEmail.innerHTML = "Email";
                    tdId.innerHTML = "ID";
                }

                function firstTable(number) {
                    masterArray[0].forEach((item, index) => {
                        var tr = table.insertRow(-1);
                        var tdNo = tr.insertCell(0);
                        var tdName = tr.insertCell(1);
                        var tdGender = tr.insertCell(2);
                        var tdEmail = tr.insertCell(3);
                        var tdId = tr.insertCell(4);
                        tdNo.innerHTML = item.index;
                        tdName.innerHTML = item.name;
                        tdGender.innerHTML = item.gender;
                        tdEmail.innerHTML = item.email;
                        tdId.innerHTML = item.id;
                    });
                };
            });
    </script>

</body>

</html>