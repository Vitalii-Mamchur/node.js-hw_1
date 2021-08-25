const listContacts = require("./listContacts");

async function getContactById(contactId) {
  try {
    const contacts = await listContacts();
    const selectContact = contacts.find((contact) => contact.id === contactId);
    if (!selectContact) {
      throw new Error(`Contact with id ${contactId} not found`);
    }
    return selectContact;
  } catch (error) {
    throw error;
  }
}

module.exports = getContactById;
