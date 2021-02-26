const profissionals = [
    ['Luis Tigre','Javascript'],
    ['Bernardo Tigre','Cisco Network'],
    ['Camilo Tigre','Cisco Network'],
    ['Nelson Tigre','Drilling Inspector'],
    ['Mark Zuckerberg','Javascript']
]

// const profission = profissionals.filter((value) => {
//     if(value[1] == 'Cisco Network') return value
// })
// const profission = profissionals.filter((value) => {
//     return value[1] === 'Javascript'
// })
const profission = profissionals.filter(value => value[1] === 'Javascript')


console.log(profission) 