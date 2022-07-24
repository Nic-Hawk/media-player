/*
    TIPADOOOO

console.log('hello typscript');

function add(a: number, b: number): number {
  return a + b;
}

const sum = add(3, 5);
console.log(sum);


// tipos basicos
let muted: boolean = true;
muted = false;

let numerador: number = 42;
let denominador: number = 6;
let resultado = numerador / denominador;

console.log(resultado);

//arays
let people: string[] = [];
people = ['Isabel', 'Nicole', 'Maria']
people.push('Luis');

// array con string y numero
let peopleAndNumbers: Array <string | number> = [];
peopleAndNumbers.push('Luis');
peopleAndNumbers.push(50);

console.log(peopleAndNumbers);

// enum
enum Color {
    Rojo ='Rojo',
    Verde = 'Verde',
    Amarillo = 'Amarillo'
}

let colorFav : Color = Color.Amarillo;
console.log(`mi color fav es ${colorFav}`);

// any
let comodin: any = 'Joker';
comodin = {type: 'Wildcard'};


//object
let someObj : object = {type: 'Wildcard'};

*/

/*
    FUNCIONESSSSSSSSSS
    function add(a: number, b: number): number {
        return a + b;
    }
    const sum = add(3, 5);
    
    // return una funcion
    function createAdder(a: number): (number) => number {
        return function(b: number) {
            return b + a;
        }
    }
    
    const addFour = createAdder(4);
    const addPlus8 = addFour(8);
    
    function fullName(firstName: string, lastName: string = 'Vargas'): string {
        return `${firstName} ${lastName}`;
    }
    const luis = fullName('Luis');
    console.log(luis);

*/ 

/*
    INTERFACESSS
    
    enum Color {
        Rojo ='Rojo',
    }
    
    // permite declarar la forma que tiene un obj
    interface Rectangle {
    ancho: number,
    altura: number,
    color: Color.Rojo,
}

let rect: Rectangle = {
    ancho: 4,
    altura: 6,
    color: Color.Rojo,
}

function area(r: Rectangle): number {
    return r.ancho * r.altura;
}

rect.toString = function() {
    return this.color ? `[Rectangle ${this.color}]` : 'un rectangulo' ;
}
console.log(rect.toString());

*/