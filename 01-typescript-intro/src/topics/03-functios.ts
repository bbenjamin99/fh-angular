// import { Personaje } from "./02-object-interface";
function addNumbers(a : number, b : number) : number {

    return a + b;
}

const addNumbersAF = (a : number, b : number ) : number  => {
    return a + b;
}

function multiply(firstNumber : number, secondNumber?: number, base : number =2){
 return firstNumber * base;
}

// const result : number = addNumbers(5,2);
// const multiplyResult : number = multiply(2,3);

interface Character {
    name : string;
    hp : number;
    showHp: () => number;
}

const healCharacter = (character : Character , amount : number) => {

    character.hp += amount;
}

const strider : Character = {
    name: "Strider",
    hp: 50,
    showHp() {
        console.log(`Puntos de vida: ${this.hp}`);
        return this.hp;
    }

}

healCharacter(strider, 30);
console.log(
`Puntos de vida luego de utilizar la habilidad "Heal Character" : ${strider.showHp()}`
);
