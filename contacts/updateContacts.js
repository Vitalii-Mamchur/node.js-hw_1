const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function updateContacts(contacts) {
  const contactsString = JSON.stringify(contacts);
  await fs.writeFile(contactsPath, contactsString);
}

module.exports = updateContacts;
