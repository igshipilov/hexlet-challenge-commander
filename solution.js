// command: join
// arguments <first>, <second>
// connector <>

/*

program – префикс для запуск методов пакета commander (как '_' в lodash)

.argument('<myArgument>') – обычный аргумент / параметр.
Кстати, их можно передать ещё сразу с командой: .command(cmdName <arg1> <arg2> <argN>)

.args() –

.option('--option', 'description', 'default') – задаём опции

.action((<arg1>, <arg2>, <argN>, options) => {arg1, options.OptionNameOne, arg2, options.OptionNameTwo argN}) – 
options всегда идёт после перечисления аргументов

.parse() –

.opts() – вызов спарсенных (?) опций

argv – argument vector (array)

*/

const { program } = require('commander');

program.command('join <first> <second>')
    // .argument('<first>')
    // .argument('<second>')
    .option('-c, --connector <char>')
    .action((first, second, options) => {
        console.log(`${first}${options.connector}${second}`);
    });

program.parse();