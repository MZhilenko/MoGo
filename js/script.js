class FormatError extends SyntaxError{
    constructor(message){
        super(message);
        this.name = "FormatError";
        this.stack = stack;
    }
}

let err = new FormatError("Ошибка форматированния");

alert(err.message);
alert(err.name);
alert(err.stack);

alert(err instanceof FormatError);
alert(err instanceof SyntaxError);