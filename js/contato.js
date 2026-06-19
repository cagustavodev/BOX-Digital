document.addEventListener('DOMContentLoaded', () => {
    const contatoForm = document.querySelector('.contato-form');

    contatoForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Retém a página ativa para podermos disparar a resposta visual

        const nome = document.getElementById('nome').value;

        // Feedback visual amigável ao usuário
        alert(`Obrigado pelo contato, ${nome}! Sua mensagem fictícia foi enviada com sucesso para fins acadêmicos.`);
        
        contatoForm.reset(); // Limpa todos os campos do formulário após o envio
    });
});