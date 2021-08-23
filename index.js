const { Command } = require("commander");

const contactsOperations = require("./contacts.js");

const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();
console.log(argv);

function invokeAction({ action, id, name, email, phone }) {
  console.log();
  switch (action) {
    case "list":
      (async () => {
        try {
          const contacts = await contactsOperations.listContacts();
          console.table(contacts);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    case "get":
      (async () => {
        try {
          const contactId = +id;
          const result = await contactsOperations.getContactById(contactId);
          console.table(result);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    case "add":
      (async () => {
        try {
          const data = {
            name,
            email,
            phone,
          };
          const contacts = await contactsOperations.addContact(data);
          console.log(contacts);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    case "remove":
      (async () => {
        try {
          const contactId = +id;
          const contacts = await contactsOperations.removeContact(contactId);
          console.log(contacts);
        } catch (error) {
          console.log(error.message);
        }
      })();
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
