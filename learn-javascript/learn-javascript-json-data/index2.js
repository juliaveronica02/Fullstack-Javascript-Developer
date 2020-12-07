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
}
console.log(DATA.employess[0], DATA.jobs[0].departmen, DATA.jobs[0].title, DATA.details[0].age[0], DATA.details[1].experience[0] )
console.log(DATA.employess[1], DATA.jobs[1].departmen, DATA.jobs[1].title, DATA.details[0].age[0], DATA.details[1].experience[0] )

// run: go live.