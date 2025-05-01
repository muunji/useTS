// 매개변수와 반환값 같은 함수
function add (a:number, b:number):number{
  return a+b
}

//매개변수와 반환값 다른 함수
function isAdult(age:number):boolean{
  return age >=20
}

//string 타입
function greet(name:string):string{
  return `Hello, ${name}`
}

//타입 에러
add("1",2)
greet(true)

//매개변수 생략 가능 - optional
function log(message?:string):void{
  //?? - null, undefined일때 '기본메시지'출력
  console.log(message ?? '기본메시지')
}