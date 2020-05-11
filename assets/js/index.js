
function validateForm() {
    event.preventDefault();

    const mailValue = document.getElementById("mail").value;

    if(mailValue !== "") {
        console.log("OK")
        console.log("Mail : ", mailValue);
    } else {
        document.getElementById("error").innerHTML += "Please provide a valid email";
        mailValue.classList.add("error");
    }
    
}
