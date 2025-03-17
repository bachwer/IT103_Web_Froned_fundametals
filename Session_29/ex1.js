const readline = require('readline');

function input(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question(question + " ", (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

let contacts = [];

async function addContact(n) {
    for (let i = 0; i < n; i++) {
        let contact = {
            id: contacts.length + 1,
            name: await input("Enter Name: "),
            email: await input("Enter Email: "),
            phone: await input("Enter Phone: ")
        };
        contacts.push(contact);
    }
    console.log("Add successfully");
}

function showContact() {
    console.table(contacts);
}

async function findContacts() {
    let search = await input("Enter Search: ");
    let results = contacts.filter(contact => contact.phone.includes(search));
    console.table(results);
}

async function updateContact() {
    let id = +await input("Enter id contact want to update: ");
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts[index].name = await input("Enter Name: ");
        contacts[index].email = await input("Enter Email: ");
        contacts[index].phone = await input("Enter Phone: ");
        console.log("Updated successfully");
    } else {
        console.log("Contact not found");
    }
}

async function deleteContact() {
    let id = +await input("Enter id contact want to delete: ");
    let index = contacts.findIndex(contact => contact.id === id);
    if (index !== -1) {
        contacts.splice(index, 1);
        console.log("Deleted successfully");
    } else {
        console.log("Contact not found");
    }
}

async function main() {
    while (true) {
        console.log("1. Add Contact");
        console.log("2. Show Contacts");
        console.log("3. Find Contact by Phone");
        console.log("4. Update Contact by ID");
        console.log("5. Delete Contact by ID");
        console.log("6. Exit");

        let menu = await input("Enter your choice:");
        switch (menu) {
            case "1":
                let n = +await input("Enter number of contacts to add: ");
                await addContact(n);
                break;
            case "2":
                showContact();
                break;
            case "3":
                await findContacts();
                break;
            case "4":
                await updateContact();
                break;
            case "5":
                await deleteContact();
                break;
            case "6":
                console.log("Exited");
                return;
            default:
                console.log("Invalid choice");
        }
    }
}

main();
