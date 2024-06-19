function originalIterativeRandom() {
    const startTime = Date.now();
    let count = 999999999;
    while (count > 0) {
        Math.random();  // Calcula um número aleatório
        count--;
    }
    const totalTime = Date.now() - startTime;
    console.log(`Tempo total gasto (iterativo - original): ${totalTime} ms`);
}

function optimizedIterativeRandom() {
    const startTime = Date.now();
    for (let count = 999999999; count > 0; count--) {
        Math.random();  // Calcula um número aleatório
    }
    const totalTime = Date.now() - startTime;
    console.log(`Tempo total gasto (iterativo - otimizado): ${totalTime} ms`);
}

originalIterativeRandom();
optimizedIterativeRandom();
