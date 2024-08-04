
const skills : string[] = ['Bash','Counter', 'Healing'];

export interface Personaje {
    name : string;
    hp: number;
    skills: string[];
    hometown?: string;
}
const personaje : Personaje = {
    name : 'Strider',
    hp: 100,
    skills: ['Bash', 'Counter'],
    hometown : "Rivendell",
}

const nombrePersonaje : string = personaje.name;
console.log(nombrePersonaje);


console.table(personaje);
