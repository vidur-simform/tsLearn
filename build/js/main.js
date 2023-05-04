"use strict";
// let username = 'Vidur';
// console.log(username);
// let a: number = 12;
// let b: any = 2;
// b = "5"
// let r = /\w+/;
// let arr: (string | number)[] = ['a', 4];
// let tpl: [string, number] = ['abc', 9];
// // arr.push(5);
// console.log(a / b);
// let o: object = [];
// interface Obj {
//     name?: string,
//     age: number
// };
// let x: Obj = {
//     name: "",
//     age: 20
// };
// console.log(typeof o);
// if (x.name)
//     x.name.toUpperCase();
// enum Grade {
//     U = 1,
//     D,
//     C
// };
// console.log(Grade)
// type i = (string | number)[];
// let nm: "Vidur" | "Harsh";
// nm = "Vidur";
// const add = (a: number, b: number): any => a + b;
// add(2, 3);
// const logMsg = (msg: any) => {
//     console.log(msg);
// }
// interface fn {
//     (a: number, b: number): number;
// }
// type fun = (a: number, b: number) => number;
// const f: fun = (a , b=2) => a - b;
// console.log(f(5,2));
// const inf = ():never=>{
//     let i: number =1;
//     while(true){
//         i++;
//         if(i>2)throw new Error();
//     }
// }
// const numOrStr = (val:number|string):string=>{
//     throw new Error() ;
// }
// const isNum = (val:any):boolean=>{
//     return typeof val==='number'; 
// };
// type One = string
// type Two = string | number
// type Three = 'hello'
// //casting
// let a: One = "Hi"
// let b =  a as Two
// let c = a as Three
// console.log(c); //Hi
// let d = <One>'world';
// let e = <string|number>'world';
// //narrowing
// const addOrConcat = (a:number,b:number,c:"add"|"concat"):number|string=>{
//     if(c==='add')
//         return a+b;
//     return ''+a+b;
// }
// let myVal:string =  addOrConcat(2,2,'concat') as string
// //force or double casting
// // 10 as string //err
// (10 as unknown) as string
// let ele = document.querySelector('#i2')!;
// let img = document.getElementById('i1') as HTMLImageElement;
// img.src
// // ele.src
class Coder {
    constructor(name, age, lang = "Ts") {
        this.name = name;
        this.age = age;
        this.lang = lang;
        this.name = name;
        this.age = age;
        this.lang = lang;
    }
    getAge() {
        return this.age;
    }
}
class WebDev extends Coder {
    constructor(comp, name, age, lang) {
        super(name, age, lang);
        this.comp = comp;
        this.comp = comp;
    }
    getLang() {
        return this.lang;
    }
}
const c1 = new Coder('Vidur', 20);
c1.name;
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const g1 = new Guitarist('Abc', 'Guitar');
console.log(g1.play("strums"));
//static property and methods
class Person {
    static getCount() {
        return Person.count;
    }
    get Id() {
        return this.id;
    }
    set Id(value) {
        this.id = value;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Person.count;
    }
}
Person.count = 0;
const [p1, p2] = [new Person('p1'), new Person('p2')];
console.log(Person.getCount());
console.log(p1.Id);
p1.Id = 8;
console.log(p1.Id);
