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


    function handleClick(){
        // Grab the datetime value from the filter
        let date = d3.select("#datetime").property("value");
        let filteredData = tableData;

        // Check to see if a date was entered and filter using that date
        if (date) {
            filteredData = filteredData.filter(row => row.datetime === date);
        };
        buildTable(filteredData);
        
    d3.selectAll("#filter-btn").on("click", handleClick);

    buildTable(tableData);
    };

