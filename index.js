const { program } = require("commander");

program
  .option("-a, --action <type>", "action type")
  .option("-i, --id <type>", "contact id");

program.parse(process.argv);

const options = program.options();
