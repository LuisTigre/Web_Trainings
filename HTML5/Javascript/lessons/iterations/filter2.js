const profissionals = [
    ['Luis Tigre','Javascript'],
    ['Bernardo Tigre','Cisco Network'],
    ['Camilo Tigre','Cisco Network'],
    ['Nelson Tigre','Drilling Inspector'],
    ['Mark Zuckerberg','Javascript']
]

const profission = profissionals.filter((value) => {
    if(value[1] == 'Cisco Network') return value
})

console.log(profission)