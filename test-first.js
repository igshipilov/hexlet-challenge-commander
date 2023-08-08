const { program } = require('commander');

program
  .option('--first')
  .option('-s, --separator <char>');

program.parse();

const options = program.opts();

// если в program.opts() передано значение '--first',
// тогда вернуть 1, иначе вернуть undefined
const limit = options.first ? 1 : undefined;

// метод split разбивает переданный в него паттерн по указанному разделителю
// по логике:   .split(separator, limit)
// и возвращает массив (array)

// separator мы определили через метод .option('-s, --separator <char>');
// limit мы определили в тернарнике выше (const limit),
console.log(program.args[0].split(options.separator, limit));