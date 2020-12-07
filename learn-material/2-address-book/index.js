console.log("Level 4");

console.log("Array = [name, email, address, phoneNumber]")

console.log("Level 5");

const names = ["julia", "veronica", "gracia", "clarissa", "joyce"];
console.log(names);

console.log("Level 6");

let allUsers = [];
const users = {
    julia: {
        name: "julia",
        email: "julia@gmail.com",
        address: "Batam Centre",
        phoneNumber: "12345"
    },
    veronica: {
        name: "veronica",
        email: "veronica@gmail.com",
        address: "Batu Ampar",
        phoneNumber: "34567"
    },
    gracia: {
        name: "gracia",
        email: "gracia@gmail.com",
        address: "Sekupang",
        phoneNumber: "23456"
    },
    clarissa: {
        name: "clarissa",
        email: "clarissa@gmail.com",
        address: "Nongsa",
        phoneNumber: "43564"
    },
    joyce: {
        name: "joyce",
        email: "joyce@gmail.com",
        address: "Tiban",
        phoneNumber: "76584"
    }
}

for (let key in users) {
    allUsers.push(users[key]);
}

console.log(allUsers);