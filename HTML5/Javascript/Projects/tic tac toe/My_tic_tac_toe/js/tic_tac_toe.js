
const tic_tac_toe = {

    // ATRIBUTES
    container: null,

    // FUNCTIONS
    init(container) {
        this.container_element = container;        
    },
    draw() {
        this.container_element.innerHTML = this.board.map((element, index) =>
         `<div onclick="tic_tac_toe.make_play('${index}')"> ${element} </div>`).reduce((content, current) => content + current);
    }
}