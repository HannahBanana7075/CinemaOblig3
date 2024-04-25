$(document).ready(function () {
    getTickets();
});

/*let tickets = [];*/ //creates an array to store several ticket objects.

function addTicket(){
    if (validation()) {
        console.log("Invalid");
        return;
    }

    let movie = document.getElementById("movieSelection").value;
    let amount = document.getElementById("amount").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;

    let ticket = {
        //creates ticket objects
        movie: movie,
        amount: amount,
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email
    }

    document.getElementById("movieSelection").value = "Bill & Ted's Excellent Adventure";
    document.getElementById("amount").value = "";
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("phoneNumber").value = "";
    document.getElementById("email").value = "";

    console.log(ticket);

    $.post("/saveTicket", ticket, function () {
        console.log("awdwa");

        getTickets();

        /*$.get("/hent", function (data) {
            formater(data);
        });*/
    });


    /*tickets.push(ticket);
    showTicketList();*/
} // creates a function to add "ticket" (object) to "tickets" (array).

function validation(){
    //do validation here
    /*resetErrors();*/
    let movie = document.getElementById("movieSelection").value;
    let amount = document.getElementById("amount").value;
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let phoneNumber = document.getElementById("phoneNumber").value;
    let email = document.getElementById("email").value;
    //creates a JS variable that retrieves the user input value from the form fields.

    console.log(movie);
    console.log(amount);
    console.log(firstName);
    console.log(lastName);
    console.log(phoneNumber);
    console.log(email);
    //console log for each input field, this is for testing.

    // lines 27 through 50 should never run due to HTML validation, but this is a good "second defence" to prevent invalid user input.
    let invalid = false;
    if(firstName.length===0)
    {
        document.getElementById("firstNameError").innerHTML= "Please enter a name.";
        invalid = true;
    }
    if(lastName.length===0)
    {
        document.getElementById("lastNameError").innerHTML= "Please enter a name.";
        invalid = true;
    }
    if(!(phoneNumber.length===8||phoneNumber.length===10))
    {
        document.getElementById("phoneNumberError").innerHTML= "Phone number must be valid.";
        invalid = true
    } //if statement validates phone number length.
    if(email.length===0)
    {
        document.getElementById("emailError").innerHTML= "Please enter a valid E-Mail address.";
        invalid = true;
    }
    /*if(invalid){
        return;
    }*/ //return prevents ticket from being added if fields are invalid.


    /*document.getElementById("amount").value= null;*/
    //empties "amount" to prevent double click.
    /*addTicket(ticket)*/
}

function showTicketList(data){
    let myHTML = [];
    let headers =`
    <table>
    <tr>
    <th>Movie</th>
    <th>Amount</th>
    <th>First name</th>
    <th>Last name</th>
    <th>Phone number</th>
    <th>E-Mail</th>
    </tr>
    `; //adds headers to "tickets" list
    myHTML.push(headers);

    // Loop through tickets array to create table rows for each ticket.
    for (let input of data){
        console.log(input);
        let row =`
        <tr> 
        <td>
        ${input.movie}
        </td> 
        <td>
        ${input.amount}
        </td>
        <td>
        ${input.firstName}
        </td>
        <td>
        ${input.lastName}
        </td>
        <td>
        ${input.phoneNumber}
        </td>
        <td>
        ${input.email}
        </td>
        </tr>
        `; //tr(table row) td(table data). each td displays input data under coorelating header.
        myHTML.push(row);
    }

    let result = myHTML.join(""); //empty quotes to prevent commas in the output.
    document.getElementById("allTickets").innerHTML= result;
    // Join HTML array into a single string.
}

function emptyList(){
    $.ajax({
        url: "/deleteAll",
        type: "DELETE",
        success: function () {

            getTickets()
        }
    });
} //this function empties the "tickets" array.

function resetErrors(){
    document.getElementById("phoneNumberError").innerHTML="";
} //this function resets error messages.

//Remember to:
//explain descisions
//add citations if needed


function getTickets() {
    $.get("/getTickets", function (data) {
        showTicketList(data);
    });
}