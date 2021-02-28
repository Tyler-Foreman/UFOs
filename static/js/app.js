// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// buildTable function using data
function buildTable(data){
    // Clear out any existing data
    tbody.html("");

    // Loop through each object in the data and append data for each value
    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
            });
        });
    }