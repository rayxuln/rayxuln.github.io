import { Scanner } from "./Scanner.js"
import { Parser } from "./Parser.js"
import { Vector } from "./Vector.js"
import { RaiixTest } from "./RaiixTest.js"



export class Interpreter {
    constructor(canvas_context) {
        var that = this
        this.context = {
            symbol_table: {
                'T': 0,
                'ORIGIN': new Vector(0, 0),
                'SCALE': new Vector(1, 1),
                'ROT': 0,
                'GET_CENTER_X': function(){
                    return canvas_context.canvas.width / 2
                },
                'GET_CENTER_Y': function() {
                    return canvas_context.canvas.height / 2
                },
                'COLOR': "#ee1111",
                'SET_COLOR': function(color) {
                    that.context.symbol_table['COLOR'] = color
                },
                'RGBA' : function(r, g, b, a) {
                    return "rgba("+r+","+g+","+b+","+a+")"
                },
                'RGB' : function(r, g, b) {
                    return "rgb("+r+","+g+","+b+")"
                },
                'RED' : 'red',
                'BLUE' : 'blue',
                'GREEN' : 'green',
                'BLACK' : 'black',
                'WHITE' : 'white'
            },
            canvas_context
        }
    }

    eval(input) {
        let s = new Scanner(input)
        let p = new Parser(s)
        let root = p.parse()
        if(root != null)
        {
            root.eval(this.context)
            console.log(this.context.symbol_table)
        }
    }
}

export class InterpreterTest extends RaiixTest {
    constructor(){
        super("ParserTest")
        var that = this
        this.enable = true
        this.cases = {
            async test_valid(){
                let input = await that.fetch_file_text("/test/parser_test/valid.txt")
                let interpreter = new Interpreter(null)
                interpreter.eval(input)
            }
        }
    }
}