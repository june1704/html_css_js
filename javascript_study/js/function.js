fx1();

function fx1() {
    console.log("fx1 호출");
}

function fx2(num1, num2) {
    console.log(num1 + num2);
}
// 오버로딩이 없음
// 매개변수에 0값을 집어넣음
function fx2(num1, num2, num3=0) {
    console.log(num1 + (num2 ?? 0) + num3);
}

fx2(10);

const num1 = 20;
function fx3() {
    return num1;
}

console.log(fx3());

// 함수 안에 함수 정의
function fx4() {
    console.log("fx4 호출");

    function fx5() {
        console.log("fx5 호출")
    }

    fx5();
}
// 함수에 변수가 들어갈 수 있다.
const fx6 = fx4; 
fx6();

function fx11() {
    console.log("fx11 호출")
}
function fx12() {
    console.log("fx12 호출")
}
function fx13() {
    console.log("fx13 호출")
}
const fxArray = [fx11, fx12, fx13];
console.log(fxArray);

for(let fx of fxArray) {
    fx();
}

// callback 함수
function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function run(fx) {
    const result = fx(10, 20);
    console.log(result);
}

run(add);
run(sub);

