

export function whatsMyType<T>( T : T) {

    return  T;
}

const amIString = whatsMyType<string>('Hello world');
const amINumber = whatsMyType<number>(10);
const amIArray = whatsMyType<number[]>([1,2,3,4,5]);
const amIBoolean = whatsMyType<boolean>(true);

console.log(amIString);
console.log(amINumber);
console.log(amIArray);
console.log(amIBoolean);
