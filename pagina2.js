document.getElementById("meuFormulario").addEventListener("submit", function(event) {
    event.preventDefault(); // Impedir o envio padrão do formulário

    // Realizar ações de validação se necessário

    // Redirecionar para a página 3.html
    window.location.href = "pagina3.html";
});
