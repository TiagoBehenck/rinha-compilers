const fs = require('fs');
const interpreter = require('./interpreter');

function executeRinhaCode(filePath, initialEnvironment = {}) {
    try {
        const rawData = fs.readFileSync(filePath);
        const ast = JSON.parse(rawData);
        const environment = { ...initialEnvironment };
        return interpreter(ast.expression, environment);
    } catch (error) {
        console.error('Erro ao executar o código da rinha:', error.message);
        return null;
    }
}

const start = process.hrtime();
executeRinhaCode('./var/rinha/source.rinha.json', {});
const diff = process.hrtime(start);
const timeInSeconds = diff[0] + diff[1] / 1e9;
console.log(`Interpreter Exec. Time: ${timeInSeconds} segundos`);