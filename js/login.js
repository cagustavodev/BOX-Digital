document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('.login-form');
    const cpfInput = document.getElementById('cpf');

    // Formata automaticamente (000.000.000-00)
    cpfInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é número
        if (value.length > 11) value = value.slice(0, 11);
        
        // Aplica os pontos e o hífen dinamicamente
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d)/, '$1.$2');
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2');
        
        e.target.value = value;
    });

    // VALIDAÇÃO DE SUBMIT
    loginForm.addEventListener('submit', (e) => {
        e.target.checkValidity();
        e.preventDefault(); // Impede o envio real, é ficticio

        const cpfClean = cpfInput.value.replace(/\D/g, '');

        if (cpfClean.length !== 11) {
            alert('Por favor, insira um CPF válido com 11 dígitos.');
            return;
        }

        // Simulação de login bem-sucedido
        alert('Login simulado com sucesso! Redirecionando para a área logada fictícia.');
        window.location.href = 'index.html';
    });
});