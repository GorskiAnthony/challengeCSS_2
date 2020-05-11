
/* init error to 0 */
let error = 0;

/* Function valideForm */
function validateForm() {
    event.preventDefault();

    const mail = document.getElementById("mail");
    const mailValue = mail.value;
    
    /** Controle Mail */
    /** Just controle @ into my email */
    const parseMail = mailValue.split("@");

    /** if value is different to empty so mail valide */
    if(mailValue !== "" && parseMail.length === 2 ) {
        error = 0;
        mail.classList.remove("error");
        document.getElementById("error").innerHTML = "";
        /** else if value egal to empty AND error egal 1 so add class ERROR to my input*/
    } else if( (mailValue === "" || parseMail !== 2) && error === 1) {
        mail.classList.add("error");
        /** else add a text for explain error and add class error */
    } else {
        document.getElementById("error").innerHTML += "Please provide a valid email";
        mail.classList.add("error");
        error = 1;
    }
}
