/**
 *  interface 키워드는 함수에서 parameter로 object를 받고싶을 때 사용 된다.
 *  interface는 컴파일 되지 않는다.
 *  코드의 보안성 증가
 *  단, node, react, express 등에서는 class를 사용해야 함
 */
// interface Human{
//     name:string,
//     age:number,
//     gender:string
// }

// ts에서 Class는 properies가 어떤 type을 가져야 하는지 선언해 줘야 함
// public 같은 권한도 물론
class Human{
    public name:string;
    public age:number;
    public gender:string;
    constructor(name: string, age: number, gender?: string){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}

// const person = {
//     name : "Jang SeongHyun",
//     age:20,
//     gender: "male"
// }

const shjang = new Human("Jang", 18, "male");

const sayHi = (shjang : Human):string => {
    return `Hello ${shjang.name}, you are ${shjang.age} you are a ${shjang.gender}`;
}

console.log(sayHi(shjang));

export {}