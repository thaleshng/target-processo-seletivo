const fs = require('fs');

function processFaturamento() {
    let data = JSON.parse(fs.readFileSync('faturamento.json', 'utf-8'));

    let faturamentos = data.filter(dia => dia.valor > 0).map(dia => dia.valor);

    let menorFaturamento = Math.min(...faturamentos);
    let maiorFaturamento = Math.max(...faturamentos);

    let somaFaturamento = faturamentos.reduce((acc, valor) => acc + valor, 0); // 2200
    let mediaFaturamento = somaFaturamento / faturamentos.length; // 314.28    

    let diasAcimaDaMedia = faturamentos.filter(valor => valor > mediaFaturamento).length;

    console.log(`Menor faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento}`);
    console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
}

processFaturamento();
