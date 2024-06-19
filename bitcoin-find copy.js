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
const walletsSet = new Set(walletsArray);
let startTime;
let chavesgeradas = 0
async function encontrarBitcoins(key, min, max) {
    console.log(key);
    let segundos = 0;
    let pkey = 0;
    const um = BigInt(1);
    startTime = Date.now()

    let zeroes = new Array(65).fill('');
    for (let i = 1; i < 64; i++) {
        zeroes[i] = '0'.repeat(64 - i);
    }
    console.log('Iniciando busca de Bitcoins...')
    while (true) {
        key++;
        chavesgeradas++
        pkey = key.toString(16)
        pkey = `${zeroes[pkey.length]}${pkey}`;
        if (Date.now() - startTime > segundos) {
            segundos += 1000
            console.log(segundos / 1000);
            if (segundos % 10000 == 0) {
                const tempo = (Date.now() - startTime) / 1000;
                console.clear();
                console.log('Resumo: chaves geradas :' + chavesgeradas)
                console.log('Velocidade:', (Number(key) - Number(min)) / tempo, ' chaves por segundo')
                console.log('Chaves buscadas: ', (key - min).toLocaleString('pt-BR'));
                console.log('Ultima chave tentada: ', pkey)
            }
        }

        let publicKey = bitcoinKeys.getBitcoinAddress(pkey)
        //console.log(publicKey)
        await verificarChave(publicKey, key, min, pkey)
    }


}
async function verificarChave(publicKey, key, min, pkey) {
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



export default encontrarBitcoins;   