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


// class Coder{
//     secondlang! : string 
//     constructor(
//         public readonly name:string,
//         private age:number,
//         protected lang:string = "Ts"
//     ){
//         this.name = name
//         this.age = age
//         this.lang = lang
//     }
//     public getAge(){
//         return this.age;
//     }
// }
// class WebDev extends Coder{
//     constructor(
//         public comp:string,
//         name:string,
//         age:number,
//         lang:string
//     ){
//         super(name,age,lang)
//         this.comp = comp
//     }
//     public getLang(){
//         return this.lang;
//     }
// }


// const c1 = new Coder('Vidur',20);
// c1.name


// interface Musician{
//     name: string,
//     instrument:string
//     play(action:string):string
// }

// class Guitarist implements Musician{
//     public name: string
//     instrument: string
//     constructor(name:string, instrument:string){
//         this.name = name
//         this.instrument = instrument
//     }
//     play(action: string): string {
//         return `${this.name} ${action} the ${this.instrument}`;
//     }
// }
// const g1 = new Guitarist('Abc','Guitar');
// console.log(g1.play("strums"));

// //static property and methods
// class Person{
//     static count:number = 0;
//     private id:number
//     static getCount():number{
//         return Person.count
//     }
//     public get Id():number{
//         return this.id
//     }
//     public set Id(value: number){
//         this.id = value
//     }
//     constructor(public name: string){
//         this.name = name
//         this.id = ++Person.count;
//     }
// }
// const[p1,p2] = [new Person('p1'),new Person('p2')] ;
// console.log(Person.getCount());
// console.log(p1.Id);
// p1.Id =  8;
// console.log(p1.Id);

// //Index signatures
// interface TransactionObj {
//     readonly [myindex:string]:number,
//     abc : number,
//     xyz : number
// }

// const o1: TransactionObj = {
//     abc:-10,
//     xyz:20,
//     tmp:2
// }

// let p = "abc";
// // o1.p = 2
// console.log(o1[p]);

//key casting
interface TransactionObj2 {
    abc: number,
    xyz: number
}

const o2: TransactionObj2 = {
    abc: -1,
    xyz: 2,
}

let p2 = "abc";
console.log(o2[p2 as keyof TransactionObj2]);
console.log(o2[p2 as keyof typeof o2]);

type Incomes = Record<'salary' | 'bonus', number>;
interface I1<T> {
    value: T,
    is: boolean
}
const ic: Incomes = {
    salary: 200,
    bonus: 300
}
ic["" as keyof Incomes];

const fn1 = <T>(arg: T): void => {
    ic[arg as keyof Incomes];
}
//generics
type p = keyof Incomes
const prnt = <T>(arg: T): T => arg

interface HasId {
    id: number
}
const processUser = <T extends HasId>(user: T): T => {
    return user
}

processUser({ id: 1, name: "Vidur" });
// processUser({name:"Vidur"});

const usrs = [
    {
        id:1,
        "name":"u1",
        "email":"u1@abc.com"
    },
    {
        id:2,
        "name":"u2",
        "email":"u2@abc.com"
    }
];
const getUsersProp = <T extends HasId, K extends keyof T>(users: T[], key: K): T[K][] => {
    return users.map(user => user[key]);
};

const props = getUsersProp(usrs,"email");

class StateObj<T> {
    private data:T
    constructor(val:T){
        this.data = val;
    }
    get state():T{
        return this.data;
    }
    set state(val:T){
        this.data = val;
    }
}

const st = new StateObj('hello');
st.state = "hi"