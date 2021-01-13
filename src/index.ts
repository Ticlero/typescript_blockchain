/**
 *  interface 키워드는 함수에서 parameter로 object를 받고싶을 때 사용 된다.
 */
interface Human{
    name:string,
    age:number,
    gender:string
}

const person = {
    name : "Jang SeongHyun",
    age:20,
    gender: "male"
}

const sayHi = (person : Human):string => {
    return `Hello ${person.name}, you are ${person.age} you are a ${person.gender}`;
}

console.log(sayHi(person));

export {}