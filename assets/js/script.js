function validar_dados(first_name, last_name, email, inquiry_type, message, consent){
    let valid = true;

    if (!consent) {
        document.getElementById('message-erro-consent').innerHTML = 'To submit this form, please consent to being contacted';
        valid = false;
    } 
    else {
        document.getElementById('message-erro-consent').innerHTML = '';
    }
    
    if (message === "") {
        document.getElementById('message_erro_message').innerHTML = 'This field is required';
        valid = false;
    } 
    else  {
        document.getElementById('message_erro_message').innerHTML = '';
    
        localStorage.setItem("message", message);
    }
    
    if (inquiry_type === null) {
        document.getElementById('message-erro-query-type').innerHTML = 'mandatory query type';
        valid = false;
    } 
    else  {
        document.getElementById('message-erro-query-type').innerHTML = '';
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById('message_erro_email').innerHTML = 'Email invalido';
      }
      else{
        document.getElementById('message_erro_email').innerHTML = '';
      }
    
    if (last_name === "") {
        document.getElementById('message_erro_last_name').innerHTML = 'This field is required';
        valid = false;
    } 
    else  {
        document.getElementById('message_erro_last_name').innerHTML = '';
    
        localStorage.setItem("last_name", last_name);
    }
    
    if (first_name === "") {
        document.getElementById('message_erro_first_name').innerHTML = 'This field is required';
        valid = false;
    } 
    else  {
        document.getElementById('message_erro_first_name').innerHTML = '';
    
        localStorage.setItem("first_name", first_name);
    }
}

function coletar() {

    let first_name = document.getElementById('first-name').value;
    let last_name = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let inquiry_type = document.querySelector('input[name="inquiry-type"]:checked');
    const message = document.getElementById('message').value;
    let consent = document.getElementById('consent').checked;

    validar_dados(first_name, last_name, email, inquiry_type, message, consent);

}



const validateEmail = (event) => {
let input = event.target;
let email = input.value;
let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
};