const myContacts = [{
    id: 1,
    name: 'Alpha Avalon',
    phone: '+1 111 101010',
    email: 'alpha@avalone.org',
    favorite: true,
    rating: 9,
    tags: ['popular', 'cool']
},
{
    id: 2,
    name: 'Betty Brave',
    phone: '+62 812 242424',
    email: 'betty@braverian.com',
},
{
    id: 3,
    name: 'Gamma Gacurio',
    phone: '+63 813 363636',
    email: 'gamma@gacurio.dev',
}
]
// create contact console with method add+ show contact, filter contact and delete.
//show 1.
console.log(myContacts)
//filter 1.
const ditemukan = myContacts.filter((item, index, array) => {
    if(item.id == "1")
        return true;
        return false;
});
console.log(ditemukan);
//add contact 1.
myContacts.push({id: 4,name: 'Test', phone: '+62 855 555555'})
console.log(myContacts)
myContacts.pop();
console.log(myContacts);

//for in.
// for (let index in myContacts){
//     console.log(myContacts[index].name)
// }

//forEach 1.
// let contact = myContacts.forEach((data) => {
//     console.log(data);
// });

//forEach 2 show nama 2.
let contact = myContacts.forEach((data) => {
    console.log(data.name);
});

//add contact 2.
const newData = {
    id: 4,
    name: 'test',
    phone: '+62 855 555555'
}
myContacts.push(newData)
console.log(myContacts)

//filter 2.
let filterCont = myContacts.filter(function(listContact) {
    return listContact.name == 'Betty Brave'
})
console.log(filterCont);

//delete 2.
let newData2 = {
    id: 5,
    name: 'test123',
    phone: '123 134678'
}
myContacts.push(newData2)
console.log(myContacts)
myContacts.pop()
console.log(myContacts)

//input manual id, name, number and email.
function test(npm, name, nomor, email) {
    let test1 = {
        id: npm,
        nama : name,
        phone : nomor,
        email: email
    }
    console.log(test1);
    myContacts.push(test1);
    console.log(myContacts);
}