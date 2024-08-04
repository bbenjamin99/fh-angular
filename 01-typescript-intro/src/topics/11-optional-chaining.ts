
interface Passenger {
    
    name: string;
    children?: string[];

}

const passenger1 : Passenger = {
    name: 'Benjamin',
}

const passenger2 : Passenger = {
    name: "Ricadinho",
    children : ['richi', 'roko']
}

// console.log(passenger1);
// console.log(passenger2);

const printChildren = ( passenger : Passenger ) : string => {
    const howManychild = passenger.children?.length || 0;
    const {name, children} = passenger; 
    if(!children ) {
        return `${name} tiene : ${howManychild} hijos, por lo que no tienen nombre xd `;
        
    } else {
        return `${name} tiene : ${howManychild} hijos. y sus nombre son : ${children} `;
    }
    
}


console.log( printChildren(passenger1));
console.log( printChildren(passenger2));

printChildren(passenger2)

