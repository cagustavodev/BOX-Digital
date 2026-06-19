// Aguarda o HTML carregar 100% antes de executar o script
document.addEventListener('DOMContentLoaded', function () {

    // 1. Pega os elementos do HTML que vamos usar
    const formulario = document.querySelector('.simulador-form');
    const caixaResultado = document.querySelector('.resultado');

    // 2. Escuta quando o usuário clica no botão "Simular" (Submit)
    formulario.addEventListener('submit', function (evento) {

        // Impede a página de atualizar e apagar os dados digitados
        evento.preventDefault();

        // 3. Pega os valores que o usuário digitou nos inputs
        const valorSolicitado = parseFloat(document.getElementById('valor').value);
        const quantidadeParcelas = parseInt(document.getElementById('parcelas').value);

        // Se o usuário digitou bobeira ou deixou vazio, para o código aqui
        if (isNaN(valorSolicitado) || valorSolicitado <= 0) {
            alert('Por favor, insira um valor válido.');
            return;
        }

        // 4. LÓGICA DA CONTA (Juros Simples de 2% ao mês)
        const taxaJuros = 0.02; // Significa 2%
        const valorJurosTotais = valorSolicitado * taxaJuros * quantidadeParcelas;
        const valorTotalPagar = valorSolicitado + valorJurosTotais;
        const valorDaParcela = valorTotalPagar / quantidadeParcelas;

        // 5. COLOCAR OS VALORES NA TELA (Injetando a nova estrutura de layout)
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

        // 6. MOSTRAR O QUADRO (Faz a seção inteira aparecer)
        caixaResultado.style.display = 'block';
    });
});