const listContacts = require("./listContacts");
const updateContacts = require("./updateContacts");

async function removeContact(contactId) {
  try {
    const contacts = await listContacts();
    const idx = contacts.findIndex((contact) => contact.id === contactId);
    if (idx === -1) {
      throw new Error(`Contact with id ${contactId} not found`);
    }
    const newContacts = contacts.filter((contact) => contact.id !== contactId);
    await updateContacts(newContacts);
    return contacts[idx];
  } catch (error) {
    throw error;
  }
}

module.exports = removeContact;
