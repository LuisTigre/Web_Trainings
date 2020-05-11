const bolsaVanessa = [
    'cartao de credito',
    'chaves',
    'dinheiro',
    'escova de cabelo',
    'lenco de papel',
    'perfume',
    'alcool em gel'
];
    // Nao eh aconselhado usar o foreach em arrays muito grandes por causa da performance...
    bolsaVanessa.forEach((value, index, array) => {
        console.log(`${index+1}. ${value}`)
    });
    
