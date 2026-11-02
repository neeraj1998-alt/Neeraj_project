// Find the Add New Job button
const addJobButton = document.querySelector("button");

// When Add New Job is clicked
addJobButton.addEventListener("click", function () {

    // Create the form
    const form = document.createElement("div");

    form.innerHTML = `
        <h2>Add New Job</h2>

        <input type="text" id="companyName" placeholder="Company Name">

        <input type="text" id="jobRole" placeholder="Job Role">

        <input type="text" id="jobLocation" placeholder="Location">

        <input type="text" id="salary" placeholder="Salary">

        <input type="date" id="applicationDate">

        <select id="jobStatus">
            <option value="Applied">Applied</option>
            <option value="Interview">Interview</option>
            <option value="Selected">Selected</option>
            <option value="Rejected">Rejected</option>
        </select>

        <button id="saveJob">Save Job</button>
    `;

    // Add form to the page
    document.querySelector("main").appendChild(form);


    // Find Save Job button
    const saveJobButton = document.querySelector("#saveJob");


    // When Save Job is clicked
    saveJobButton.addEventListener("click", function () {

        // Get values from form
        const company = document.querySelector("#companyName").value;
        const role = document.querySelector("#jobRole").value;
        const location = document.querySelector("#jobLocation").value;
        const salary = document.querySelector("#salary").value;
        const date = document.querySelector("#applicationDate").value;
        const status = document.querySelector("#jobStatus").value;


        // Check if required fields are empty
        if (company === "" || role === "") {
            alert("Please enter Company Name and Job Role.");
            return;
        }


        // Find the table body
        const tableBody = document.querySelector("tbody");


        // Create a new table row
        const newRow = document.createElement("tr");


        // Add job information to the row
        newRow.innerHTML = `
            <td>${company}</td>
            <td>${role}</td>
            <td>${location}</td>
            <td>${status}</td>
            <td>${date}</td>
        `;


        // Add new row to the table
        tableBody.appendChild(newRow);


        // Show success message
        alert("Job application added successfully!");


        // Clear form fields
        document.querySelector("#companyName").value = "";
        document.querySelector("#jobRole").value = "";
        document.querySelector("#jobLocation").value = "";
        document.querySelector("#salary").value = "";
        document.querySelector("#applicationDate").value = "";
        document.querySelector("#jobStatus").value = "Applied";

    });

});
async function testBackend() {
    try {
        const response = await fetch("http://localhost:5000/");
        const message = await response.text();

        console.log("Backend Response:", message);
    } catch (error) {
        console.error("Backend Error:", error);
    }
}

testBackend();