# index.html

<!DOCTYPE html>
<html>
    <head>
        <title>
            HTML CRUD with Pure JavaScript
        </title>
        <link rel="stylesheet" href="styles.css">
    </head>

    <body>
        <table>
            <tr>
                <td>
                    <form onsubmit="event.preventDefault();onFormSubmit();" autocomplete="off">
                        <div>
                            <label>Full Name</label>
                            <input type="text" name="fullName" id="fullName">
                        </div>
                        <div>
                            <label>EMP Code</label>
                            <input type="text" name="empCode" id="empCode">
                        </div>
                        <div>
                            <label>Salary</label>
                            <input type="text" name="salary" id="salary">
                        </div>
                        <div>
                            <label>City</label>
                            <input type="text" name="city" id="city">
                        </div>
                        <div class="form-action-buttons">
                            <input type="submit" value="submit">
                        </div>
                    </form>
               
                </td>
                <td>
                    <table class="list" id="employeeList">
                        <thead>
                            <tr>
                                <th>Full Name</th>
                                <th>EMP Code</th>
                                <th>Salary</th>
                                <th>City</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>

                        </tbody>
                    </table>
                </td>
            </tr>
        </table>
        <script src="script.js"></script>
    </body>function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}
function readFormData() {
    var formData={};
    formData["fullName"] = document.getElementById("fullName").Value;
    formData["empCode"] = document.getElementById("empCode").Value;
    formData["salary"] = document.getElementById("salary").Value;
    formData["city"] = document.getElementById("city").Value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`;
}

# styles.css

body > table{
    width: 80%;
}

table{
    border-collapse: collapse;
}
table.list{
    width:100%;
}

td,th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even),table.list thead>tr{
    background-color: #dddddd;
}

input[type=text], input[type=number]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
    width: 30%;
    background-color: #ddd;
    color: #000;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

form div.form-action-buttons{
    text-align: right;
}

a{
    cursor: pointer;
    text-decoration: undeerline;
    color: #0000ee;
    margin-right: 4px;
}

label.validation-error{
    color: red;
    margin-left: 5px;
}

.hide{
    display:none;
}
</html>


# scriptjs

function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}
function readFormData() {
    var formData={};
    formData["fullName"] = document.getElementById("fullName").Value;
    formData["empCode"] = document.getElementById("empCode").Value;
    formData["salary"] = document.getElementById("salary").Value;
    formData["city"] = document.getElementById("city").Value;
    return formData;
}


function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.fullName;
    
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.empCode;
    
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.salary;
    
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.city;
    
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`;
}

# styles.css

body > table{
    width: 80%;
}

table{
    border-collapse: collapse;
}
table.list{
    width:100%;
}

td,th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
}

tr:nth-child(even),table.list thead>tr{
    background-color: #dddddd;
}

input[type=text], input[type=number]{
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
}
    width: 30%;
    background-color: #ddd;
    color: #000;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

form div.form-action-buttons{
    text-align: right;
}

a{
    cursor: pointer;
    text-decoration: undeerline;
    color: #0000ee;
    margin-right: 4px;
}

label.validation-error{
    color: red;
    margin-left: 5px;
}

.hide{
    display:none;
}
