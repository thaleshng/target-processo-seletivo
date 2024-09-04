const fs = require('fs');

function processFaturamento() {
    let data = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

    let faturamentos = data.filter(dia => dia.valor > 0).map(dia => dia.valor);

    let menorFaturamento = Math.min(...faturamentos);
    let maiorFaturamento = Math.max(...faturamentos);

    let somaFaturamento = faturamentos.reduce((acc, valor) => acc + valor, 0);
    
    let mediaFaturamento = somaFaturamento / faturamentos.length; 
    
    let diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaFaturamento).length;

    console.log(`Menor faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
    console.log(`Média de faturamento: R$ ${mediaFaturamento.toFixed(2)}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

processFaturamento();
