const coronaCases =[
    {id: 1, country: 'Angola', active:36},
    {id: 2, country: 'South Africa', active:1000},
    {id: 3, country: 'Mozambique', active:77},
    {id: 4, country: 'Cape Verde', active:62},

]

const totalCases = coronaCases.reduce((sum, cases) => {
    return sum + cases.active
},0)

console.log(totalCases);