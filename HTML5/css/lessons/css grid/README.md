#CSS GRID 

## CONTAINER

- display: grid;
- grid-template-columns;
- grid-template-rows;
- grid-gap
    - grid-row-gap
    - grid-column-gap
- grid-template-areas;

... e mais 4 propriedades e **alinhamento**

# ITEM(S)

- grid-column
    - grid-column-start
    - grid-column-end
- grid-row
    - grid-row-start
    - grid-row-end
    
... e mais 4 propriedades e **alinhamento**

# GRID: ALINHAMENTO

Exitem 6 propriedades para alinhamento:
1. `justify-content`
2. `align-content`
3. `justify-items`
4. `align-items`
5. `justify-self`
6. `align-self`

- align, justify-conted
- vamos separa-los em 2 grupos
1. `justify` e `align`
2. `content`, `items` e `self`

`justify-content` e `align-content` nos permite alinhar o proprio grid, relativo ao espaco fora do grid

o uso dessas propriedades sao raras, pois so e aplicao caso o grid seja menor que a area definida, (por exemplo, quando usamos em px o tamanho do grid, poderemos terminar com um grid pequeno ,para ao tamanho da area do grid)

Podemos usar **7 valores**:
1. start
2. end
3. center
4. stretch
5. space-between 
6. space-around
7. space-evenly

`justify-items` e `align-items` nos permite alinhar os items do nosso grid, em qualquer espaco disponivel, na coluna que ele habilitar.

Podemos usar **4 valores**:
1. start
2. end
3. center
4. stretch


** VIDEOS NUMERO 2**

