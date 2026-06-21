document.addEventListener('DOMContentLoaded', () => {
    const contatoForm = document.querySelector('.contato-form');

    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Retém a página ativa 
        const nome = document.getElementById('nome').value;

        // alerta de sucesso 
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem fictícia foi enviada com sucesso para fins acadêmicos.`);
        
        contatoForm.reset(); // Limpa o formulário após o envio
    });
});