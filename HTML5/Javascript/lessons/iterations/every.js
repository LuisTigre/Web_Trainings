const familia = [{
    nome:'Gabriel',
    idade:40
},
{
    nome:'Vanessa',
    idade:40
},
{
    nome:'Gabriel',
    idade:11
},
{
    nome:'Felipe',
    idade:4
}
];

 const isAdult = value => value.idade <= 18
 const somenteAldulto = familia.every(isAdult)
 console.log(somenteAldulto);