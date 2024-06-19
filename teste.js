//const  = require('worker_threads');
import { parentPort, workerData } from 'worker_threads'

// Função para calcular a soma de 1 a n
function sumToN(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// Recebe o valor de 'n' do thread principal
const n = workerData;
const result = sumToN(n);

// Envia o resultado de volta para o thread principal
parentPort.postMessage(result);
