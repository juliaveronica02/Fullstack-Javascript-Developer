// First answer.
const DATA = {
    "employess" :[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"},
        {"firstName":"Doni", "lastName":"Wong"},
        {"firstName":"Slamet", "lastName":"Jordan"},
        {"firstName":"Carlo", "lastName":"Wee"},
        {"firstName":"Philips", "lastName":"Morris"},
        {"firstName":"Angga", "lastName":"Dwi"},
        {"firstName":"Vicky", "lastName":"Sasongko"},
        {"firstName":"Nadya", "lastName":"Lembayung"}
    ],
    "jobs":[
        {"departmen":"QC","title":"QA"},
        {"departmen":"IT","title":['IT Support','Software Engineer','UI/UX', 'DevOps','Tester']},
        {"departmen":"Human Resource Development", "title":"SPV"},
        {"departmen":"Marketing and Custumer Service","title":"Marketing"},
        {"departmen":"Maintenance and Facility","title":"Maintenance"},
        {"departmen":"QC","title":"QA"},
        {"departmen":"IT","title":['IT Support','Software Engineer','UI/UX', 'DevOps','Tester']},
        {"departmen":"Human Resource Development", "title":"SPV"},
        {"departmen":"Marketing and Custumer Service","title":"Marketing"},
        {"departmen":"Maintenance and Facility","title":"Maintenance"},
    ],
    "details":[
        {"age":['umur: 22 Tahun','umur: 23 Tahun','umur: 24 tahun','umur: 29 Tahun','umur: 30 Tahun','umur: 32 Tahun']},
        {"experience":['experience: 2 Tahun','experience: 3 Tahun', 'experience: 4 Tahun', 'experience: 5 tahun']}
    ],

    // 1. employee.
    employeeBiodata:()=>{
        // get employee from DATA variable it have employees name, jobs and details.
        let fn = DATA.employess[0].firstName
        let ln = DATA.employess[0].lastName
        let job = DATA.jobs[0].departmen
        let jobTitle = DATA.jobs[1].title[0]
        let age = DATA.details[0].age[0]
        let experience = DATA.details[1].experience[0]
        console.log(`1. firstname : ${fn}, lastname : ${ln}, job : ${job}, title : ${jobTitle}, age : ${age}, experience : ${experience}`);
    },
    // 2. employee.
    employeeBiodata2:()=>{
        // get employee from DATA variable it have employees name, jobs and details.
        let fn = DATA.employess[1].firstName
        let ln = DATA.employess[1].lastName
        let job = DATA.jobs[1].departmen
        let jobTitle = DATA.jobs[1].title[1]
        let age = DATA.details[0].age[1]
        let experience = DATA.details[1].experience[0]
        console.log(`2. firstname : ${fn}, lastname : ${ln}, job : ${job}, title : ${jobTitle}, age : ${age}, experience : ${experience}`);
    },
    // 3. employee.
    employeeBiodata3:()=>{
        // get employee from DATA variable it have employees name, jobs and details.
        let fn = DATA.employess[2].firstName
        let ln = DATA.employess[2].lastName
        let job = DATA.jobs[2].departmen
        let jobTitle = DATA.jobs[1].title[2]
        let age = DATA.details[0].age[2]
        let experience = DATA.details[1].experience[2]
        console.log(`3. firstname : ${fn}, lastname : ${ln}, job : ${job}, title : ${jobTitle}, age : ${age}, experience : ${experience}`);
    },
    // 4. employee.
    employeeBiodata4:()=>{
        // get employee from DATA variable it have employees name, jobs and details.
        let fn = DATA.employess[3].firstName
        let ln = DATA.employess[3].lastName
        let job = DATA.jobs[3].departmen
        let jobTitle = DATA.jobs[1].title[3]
        let age = DATA.details[0].age[3]
        let experience = DATA.details[1].experience[3]
        console.log(`4. firstname : ${fn}, lastname : ${ln}, job : ${job}, title : ${jobTitle}, age : ${age}, experience : ${experience}`);
    },
    // 5. employee.
    employeeBiodata5:()=>{
        // get employee from DATA variable it have employees name, jobs and details.
        let fn = DATA.employess[4].firstName
        let ln = DATA.employess[4].lastName
        let job = DATA.jobs[4].departmen
        let jobTitle = DATA.jobs[2].title[4]
        let age = DATA.details[0].age[0]
        let experience = DATA.details[1].experience[0]
        console.log(`5. firstname : ${fn}, lastname : ${ln}, job : ${job}, title : ${jobTitle}, age : ${age}, experience : ${experience}`);
    },
    // print all data.
    showAllData: () =>{
        DATA.employeeBiodata()
        DATA.employeeBiodata2()
        DATA.employeeBiodata3()
        DATA.employeeBiodata4()
        DATA.employeeBiodata5()
    }
}
// run in chrome-console: DATA.showAllData(DATA.employeeBiodata);
// RESULT:
// 1. firstname : John, lastname : Doe, job : QC, title : IT Support, age : umur: 22 Tahun, experience : experience: 2 Tahun.
// 2. firstname : Anna, lastname : Smith, job : IT, title : Software Engineer, age : umur: 23 Tahun, experience : experience: 2 Tahun.
// 3. firstname : Peter, lastname : Jones, job : Human Resource Development, title : UI/UX, age : umur: 24 tahun, experience : experience: 4 Tahun.
// 4. firstname : Doni, lastname : Wong, job : Marketing and Custumer Service, title : DevOps, age : umur: 29 Tahun, experience : experience: 5 tahun.
// 5. firstname : Slamet, lastname : Jordan, job : Maintenance and Facility, title : undefined, age : umur: 22 Tahun, experience : experience: 2 Tahun.