
const portfolioContainers = document.querySelectorAll(".project");
const contactFormContainer = document.querySelector(".contact-form");
const buttonSubmit = document.querySelector(".send-message-button");
const formName = document.getElementById("form-name");
const errorName = document.getElementById("error-name");
const formEmail = document.getElementById("form-email");
const errorEmail = document.getElementById("error-email");
const formMessage = document.getElementById("form-message");
const errorMessage = document.getElementById("error-message");
const errorIcon = document.querySelector(".error-icon");

// verifica o campo de entrada do nome
const verifyName= function(){
if (formName.value === "") {
    errorName.textContent = "Não deixe em branco!";
    errorName.classList.add("error");
    buttonSubmit.disabled = true;
    return false;
} else {
    errorName.textContent = "";
    errorName.classList.remove("error");
    buttonSubmit.disabled = false;
}
return true;
}

// verifica o campo de entrada do email
const verifyEmail = function () {
    let email = formEmail.value
    // se o e-mail está em formato válido
    if (!email.includes('@')) {
        errorIcon.classList.remove("hide-error-icon");
        errorEmail.textContent = "Formato inválido";
        errorEmail.classList.add("error");

        buttonSubmit.disabled = true;
        return false;
    } else {
        errorEmail.textContent = "";
        errorIcon.classList.add("hide-error-icon");
        errorEmail.classList.remove("error");
        buttonSubmit.disabled = false;
    }
    return true;
}

// verifica o campo de entrada da mensagem
const verifyMessage = function () {
    // se o campo da mensagem está vazio
    if (formMessage.value === "") {
        errorMessage.textContent = "Não deixe em branco";
        errorMessage.classList.add("error");
        buttonSubmit.disabled = true;
        return false;
    } else {
        errorMessage.textContent = "";
        errorMessage.classList.remove("error");
        buttonSubmit.disabled = false;
    }
    return true;
}

// addEventListener para campos de entrada para acionar funções de verificação
formName.addEventListener("change", function (event) {
    verifyName();
})
formEmail.addEventListener("change", function (event) {
    verifyEmail();
})
formMessage.addEventListener("change", function (event) {
    verifyMessage();
})

buttonSubmit.addEventListener("click", function (event) {
    event.preventDefault();
    verifyName();
    verifyEmail();
    verifyMessage();

    // Se todos os campos forem válidos, exibe mensagem de sucesso e limpa formulário
    if (verifyName() && verifyEmail() && verifyMessage() === true) {

        formName.value = "";
        formEmail.value = "";
        formMessage.value = "";
        alert("Obrigado, sua mensagem foi enviada!");
    }
    // Registra detalhes do formulário no console
    const formDetails = {
        Name: formName.value,
        Email: formEmail.value,
        Message: formMessage.value
    }
    console.log(formDetails);
})

portfolioContainers.forEach(container => {
    const projectLinks = container.querySelector(".project-links");
    const imgContainer = container.querySelector(".img-container");

    // addEventListener passando o mouse e mostrando links do projeto
    container.addEventListener('mouseenter', () => {
        if (window.innerWidth >= 1440) {
            projectLinks.classList.remove('project-links-hide');
            imgContainer.style.opacity = "0.25";
        }
    });

    // addEventListener quando  mouse sair, ocultar links do projeto
    container.addEventListener('mouseleave', () => {
        if (window.innerWidth >= 1440) {
            projectLinks.classList.add('project-links-hide');
            imgContainer.style.opacity = "1";
        }
    });
});