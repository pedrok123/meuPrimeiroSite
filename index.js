document.addEventListener("DOMContentLoaded", function() {
    // Selecionar o botão de login
    var loginButton = document.getElementById("loginButton");
    
    // Adicionar um ouvinte de evento para o botão de login
    loginButton.addEventListener("click", function() {
        var username = document.getElementById("username").value;
        var password = document.getElementById("password").value;

        // Aqui, você pode adicionar uma lógica para verificar as credenciais, se desejar.

        // Redirecionar para outra página após a verificação
        window.location.href = "pagina2.html"; // Substitua "outra_pagina.html" pela URL desejada
    });
});
