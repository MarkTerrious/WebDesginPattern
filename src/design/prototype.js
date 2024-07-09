class BoardSquare
{
    #name;
    
    constructor(name){
        this.#name = name;
    }

    setName(name) {
        this.#name = name
    }

    getName() {
        return this.#name
    }

    print() {
        console.log("name >> ", this.#name)
    }

}

class BoardSquarePrototype
{
    #boardsquareProto
    constructor(boardsquare)
    {
        this.#boardsquareProto = boardsquare
    }

    copy()
    {
        const newBoardSquare = new BoardSquare()
        newBoardSquare.setName(this.#boardsquareProto.getName())
        return newBoardSquare
    }
}

export default function Prototype()
{
    const boardsquare = new BoardSquare("White");
    boardsquare.print();

    const boardSquareProto = new BoardSquarePrototype(boardsquare);
    const boardsquare2 = boardSquareProto.copy();
    boardsquare2.print();

    const boardsquare3 = new BoardSquare("Black");
    boardsquare3.print();

    console.log(boardsquare === boardsquare2);  

}
