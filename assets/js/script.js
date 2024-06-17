function coletar() {
    let first_name = document.getElementById('first-name').value;
    let last_name = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let inquiry_type = document.querySelector('input[name="inquiry-type"]:checked');
    const message = document.getElementById('message').value;
    let consent = document.getElementById('consent').checked;


    let valid = true;

    if (first_name === "") {
        document.getElementById('message_erro_first_name').innerHTML = 'This field is required';
        valid = false;
    } else {
        document.getElementById('message_erro_first_name').innerHTML = '';
    }

    if(last_name === ""){
        document.getElementById('message_erro_last_name').innerHTML = 'This field is required';
        valid = false;
    }
    else{
        document.getElementById('message_erro_last_name').innerHTML = '';
    }

    if(email === ""){
        document.getElementById('message_erro_email').innerHTML = 'Pleace enter a valid email address';
        valid = false;
    }
    else{
        document.getElementById('message_erro_email').innerHTML = '';
    }

    if (inquiry_type === null) {
        document.getElementById('message-erro-query-type').innerHTML = 'Tipo de consulta obrigatório';
        valid = false;
    } else {
        document.getElementById('message-erro-query-type').innerHTML = '';
    }

    if(message === ""){
        document.getElementById('message_erro_message').innerHTML = 'This field is required';
        valid = false;
    }
    else{
        document.getElementById('message_erro_message').innerHTML = '';
    }

    if (!consent) {
        document.getElementById('message-erro-consent').innerHTML = 'To submit this form, please consent to being contacted';
        valid = false;
    } else {
        document.getElementById('message-erro-consent').innerHTML = '';
    }

    return valid;
}