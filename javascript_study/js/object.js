/**
 * 객체
 */

const obj = {
    name: "최명준",
    age: 30,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`), 
}

obj.print();

const obj2 = {
    name: "최명준",
    age: 30,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`), 
}

console.log(obj === obj2);
console.log(JSON.stringify(obj) === JSON.stringify(obj2));
console.log(typeof JSON.stringify(obj))

/**
 * objext -> Json   JSON.stringify(object)
 * Json -> object   JSON.parse(json문자열)
 * User 객체 생성
 * username, password, name, eamil
 */

const user = {
    username: "",
    password: "",
    name: "",
    email: "",
    hobby: ["축구", "농구", "배구"],
    address: {
        si: "부산시",
        gungu: "부산진구"
    },
    printUserInfo: () => console.log("사용자 정보 출력"),
}

user.username = "juni1";
user.password = 1234;
user.name = "최명준";
user.email = "xvz1704@naver.com";

const userJson = JSON.stringify(user);
console.log(user);
console.log(userJson);
const convertUser = JSON.parse(userJson);
console.log(convertUser)

// 함수는 JSON으로 못 넘긴다.

const student = {
    name: "김준일",
    age: 31,
    address: "부산 동래구",
}

const key = "age"
const value = 32;

const student2 = {
    ...student,
    [key]: value,
}

console.log(student2)











































