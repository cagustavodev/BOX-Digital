// Aguarda o HTML carregar 100% antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    const formulario = document.querySelector('.simulador-form');
    const caixaResultado = document.querySelector('.resultado');

    formulario.addEventListener('submit', function (evento) {

        // Impede a página de atualizar 
        evento.preventDefault();

        const valorSolicitado = parseFloat(document.getElementById('valor').value);
        const quantidadeParcelas = parseInt(document.getElementById('parcelas').value);

        // Validação
        if (isNaN(valorSolicitado) || valorSolicitado <= 0) {
            alert('Por favor, insira um valor válido.');
            return;
        }

        // 4. LÓGICA DA CONTA (Juros Simples de 2% ao mês)

        const taxaJuros = 0.02; 
        const valorJurosTotais = valorSolicitado * taxaJuros * quantidadeParcelas;
        const valorTotalPagar = valorSolicitado + valorJurosTotais;
        const valorDaParcela = valorTotalPagar / quantidadeParcelas;

        // 5. Mostra na tela
        caixaResultado.innerHTML = `
            <h2>Resultado da Simulação</h2>
            <div class="resultado-container">
                <div class="resultado-item">
                    <span>Valor Solicitado:</span>
                    <span>R$ ${valorSolicitado.toFixed(2)}</span>
                </div>
                <div class="resultado-item">
                    <span>Total de Juros (2% a.m.):</span>
                    <span>R$ ${valorJurosTotais.toFixed(2)}</span>
                </div>
                <div class="resultado-item">
                    <span>Total a Pagar:</span>
                    <span>R$ ${valorTotalPagar.toFixed(2)}</span>
                </div>
                <div class="resultado-item parcela-final">
                    <span>Parcelas:</span>
                    <span>${quantidadeParcelas}x de R$ ${valorDaParcela.toFixed(2)}</span>
                </div>
            </div>
        `;

        // Faz a seção inteira aparecer
        caixaResultado.style.display = 'block';
    });
});