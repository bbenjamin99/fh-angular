
export class Person {

   
    constructor( public name?: string, public address?: string){
        this.name= name;
        this.address = address;
    }
}

export class Hero extends Person {
    constructor(public alterEgo: string, public age : number, public realName :string) {
        super(realName, 'New York');
    }
}


const ironMan = new Hero('Iron Man', 45, 'Tony Stark');
console.log(ironMan);
