class User{
    private constructor(){

    }
    protected static board:User;
    static createBoard (){
        if (this.board){
            return this.board
        } else {
            this.board = new User()
            return this.board
        }
    }
}
let test = User.createBoard()