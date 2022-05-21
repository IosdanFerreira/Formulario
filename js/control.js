

function cadastrar(){
    //Input
    let name = document.getElementById('name');
    //Div nameError
    let nameError = document.getElementById('nameError')
    let className = name.getAttribute('class')

    if(name.value == ""){
        nameError.classList.remove("inputFeedback");
        nameError.classList.add("error")
    }else{
        nameError.classList.remove('error')
        nameError.classList.add("inputFeedback");
    }

    //Surname
    let sursame = document.getElementById('surname');
    let surnameError = document.getElementById('surnameError')
    let classSurName = surname.getAttribute('class')

    if(surname.value == ""){
        surnameError.classList.remove("inputFeedback");
        surnameError.classList.add("error")
    }else{
        surnameError.classList.remove('error')
        surnameError.classList.add("inputFeedback");
    }

    //Email
    let email = document.getElementById('email');
    let emailError = document.getElementById('emailError')
    let classEmail = email.getAttribute('class')

    if(email.value == ""){
        emailError.classList.remove("inputFeedback");
        emailError.classList.add("error")
    }else{
        emailError.classList.remove('error')
        emailError.classList.add("inputFeedback");
    }

    //Password
    let password = document.getElementById('password');
    let passwordError = document.getElementById('passwordError')
    let classpassword = password.getAttribute('class')

    if(password.value == ""){
        passwordError.classList.remove("inputFeedback");
        passwordError.classList.add("error")
    }else{
        passwordError.classList.remove('error')
        passwordError.classList.add("inputFeedback");
    }

    //confPassword
    let confPassword = document.getElementById('confPassword');
    let confPasswordError = document.getElementById('confPasswordError');
    let classconfpassword = confPassword.getAttribute('class')

    if(confPassword.value !== password.value || confPassword.value == ""){
        confPasswordError.classList.remove("confPassword-Feedback");
        confPasswordError.classList.add("error")
    }else{
        confPasswordError.classList.add("confPassword-Feedback");
        confPasswordError.classList.remove("error")
    }

}