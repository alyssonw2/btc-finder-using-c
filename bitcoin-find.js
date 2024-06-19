import CoinKey from 'coinkey';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

// Helper to get __dirname in ES module
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Use createRequire to require the .node file
const require = createRequire(import.meta.url);
const bitcoinKeys = require(path.resolve(__dirname, './build/Release/bitcoin_keys.node'));
import walletsArray from './wallets.js';
import chalk from 'chalk'
import fs from 'fs';
import { exec } from 'child_process';

import { fork } from 'child_process';

// Função para criar um novo processo para a função encontrarBitcoins
function criarProcesso(key, min, max) {
    const processo = fork(__filename);



    // Manipule mensagens do processo filho
    processo.on('message', (mensagem) => {
        console.log('Mensagem do processo filho:', mensagem);
    });

    // Manipule eventos de fechamento do processo filho
    processo.on('close', (code) => {
        console.log(`Processo filho encerrado com código ${code}`);
    });
}

const walletsSet = new Set(walletsArray);
let startTime;
let chavesgeradas = 0

async function getRandomInt() {
    const min = BigInt('0x10000000000000000');
    const max = BigInt('0x2e0a8b039282faf6fe0fd769cfbc4b6b4cf8758ba68220eac420e32b91ddfa673');
    const randomBigInt = max
    return randomBigInt;
}

async function inicializar() {
    startTime = Date.now();
    chavesgeradas = 0;
    console.log('Iniciando busca de Bitcoins...');
}

async function incrementarChave(key) {
    key++;
    chavesgeradas++;
    return key;
}

async function formatarChave(key, zeroes) {
    let pkey = key.toString(16);
    pkey = `${zeroes[pkey.length]}${pkey}`;
    return pkey;
}


async function verificarTempoELog(min, key, segundos) {
    segundos += 1000;

    if (segundos % 10000 === 0) {
        const tempo = (Date.now() - startTime) / 1000;
        console.clear();
        console.log('Resumo: chaves geradas :' + chavesgeradas);
        console.log('Velocidade:', (Number(key) - Number(min)) / tempo, ' chaves por segundo');
        console.log('Chaves buscadas: ', (key - min).toLocaleString('pt-BR'));
        console.log('Ultima chave tentada: ', key.toString(16));
    }
    return segundos;
}

// Nova função encontrarBitcoins usando as funções separadas
async function encontrarBitcoins(min, max) {

    await inicializar();
    let segundos = 0;
    const zeroes = new Array(65).fill('').map((_, i) => '0'.repeat(64 - i));
    let key = await getRandomInt();
    while (true) {

        chavesgeradas++
        const pkey = await formatarChave(key, zeroes);
        segundos = await verificarTempoELog(min, key, segundos);
        const publicKey = await bitcoinKeys.getBitcoinAddress(pkey);
        await verificarChave(publicKey, key, min, pkey);
        key--
    }
}


async function verificarChave(publicKey, key, min, pkey) {
    // console.log(walletsSet.has(publicKey))
    if (walletsSet.has(publicKey)) {
        const tempo = (Date.now() - startTime) / 1000
        let chave_gerada = await generateWIF(pkey)
        console.log('Velocidade:', (Number(key) - Number(min)) / tempo, ' chaves por segundo')
        console.log('Tempo:', tempo, ' segundos');
        console.log('Private key:', chalk.green(pkey))
        console.log('WIF:', chalk.green(chave_gerada))

        const filePath = 'keys.txt';
        const lineToAppend = `Private key: ${pkey}, WIF: ${chave_gerada} tempo: ${tempo} \n`;

        try {
            fs.appendFileSync(filePath, lineToAppend);
            console.log('Chave escrita no arquivo com sucesso.');

            exec('pkill node')

            throw 'ACHEI!!!! 🎉🎉🎉🎉🎉'
        } catch (err) {
            console.error('Erro ao escrever chave em arquivo:', err);
        }
    }

    return false
}
async function generateWIF(privateKey) {
    let _key = new CoinKey(new Buffer(privateKey, 'hex'))
    return _key.privateWif
}



// Manipulador para mensagens recebidas do processo pai
process.on('message', async (intervalo) => {
    await encontrarBitcoins(key, min, max);
    process.exit(); // Encerre o processo após a conclusão
});

// Executar a função encontrarBitcoins na inicialização, caso estejamos no processo pai
if (!process.send) {
    const min = BigInt('0x40000000000000');
    const max = BigInt('0x2e0a8b039282faf6fe0fd769cfbc4b6b4cf8758ba68220eac420e32b91ddfa673');
    const key = await getRandomInt()
    encontrarBitcoins(key, min, max);
}


export default criarProcesso;   