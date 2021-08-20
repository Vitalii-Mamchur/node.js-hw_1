// const listContacts = require("./contacts.js");
// const getContactById = require("./contacts.js");
const removeContact = require("./contacts.js");

(async () => {
  try {
    // const contacts = await listContacts();
    // console.log(contacts);

    const contactId = 8;

    // const selectContact = await getContactById(contactId);
    // console.log(selectContact);

    // const updateContact = await removeContact(contactId);
    // console.log(updateContact);

    const nawContact = await addContact(name, email, phone);
  } catch (error) {
    console.log(error.message);
  }
})();
