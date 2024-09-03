const faturamentoMensal = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

const valorTotal = Object.values(faturamentoMensal).reduce((acc, valor) => acc + valor, 0); // 180759.98

const percentuais = Object.entries(faturamentoMensal).map(([estado, valor]) => {
    const percentual = (valor / valorTotal) * 100;
    return { estado, percentual: percentual.toFixed(2) };
});

percentuais.forEach(item => {
    console.log(`Estado: ${item.estado}, Percentual de Representação: ${item.percentual}%`);
});
