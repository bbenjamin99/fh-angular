
export class Person {

    private name? : string;
    private address?: string;
   
    constructor(){
    }

    public setName(name:string){
        this.name = name;
    }
    public getName(){
        return this.name;
    }

    public setAddress(address: string){
        this.address = address;
    }
    public getAddress(){
        return this.address;
    }
}

const ironMan = new Person();
    ironMan.setName("Benito");
    ironMan.setAddress("Camelas")
console.log(ironMan.getName());
console.log(ironMan.getAddress());
