/**
 * 연산자
 * 
 * 산술 연산자
 * +, -, *, /, %, **(제곱)
 */
console.log(5 ** 2);

/**
 * 증감 연산자
 * ++, --
 * 
 * 비교 연산자
 * <, <=, >, >=, ==, !=, ===, !==
 * javascript의 특징은 기본적으로 변수의 타입이 정해지지 않음
 */
console.log(1 == 1);
console.log(1 == "1");  // js에서는 타입 검사 x
console.log(1 === "1"); // 타입 검사 O
console.log(1 != "1");  // 타입 검사 x 
console.log(1 !== "1"); // 타입 검사 O

/**
 * 논리 연산자
 * &&, ||
 * 
 * 단축 평가
 * 논리 자료 값 || anything
 * 논리 자료 값 === true      =>  true
 * 논리 자료 값 === false     =>  anything
 * 
 * 논리 자료 값 && anything
 * 논리 자료 값 === true      =>  anything
 * 논리 자료 값 === false     =>  false
 */

console.log(1 === 1 || "최명준");
console.log(1 !== 1 || "최명준");
console.log(1 === 1 && "최명준");
console.log(1 !== 1 && "최명준");

 /* 
 * null 병합 연산
 * anything1 ?? anything2
 * 좌항(anything1) === null || 좌항(anything1) === undefined => 우항(anything2)
 * 좌항(anything1) !== null && 좌항(anything1) !== undefined => 좌항(anything1)
 * 
 */

console.log(null ?? "김준이");
console.log("김준일" ?? "김준이");

/**
 * Not 연산
 * !, !!
 */

console.log("--------Not 연산--------");
console.log(!"");   // 값이 비어 있거나 비어있는 문자열은 false
console.log(!0);
console.log(!null);
console.log(!undefined);
console.log(![]);   // 배열은 내부에 값이 없더라도 배열의 주소는 존재하기 때문에 true
console.log(typeof []);
console.log(![].length);


var name = "최명준";
if(!name) {
    console.log("이름이 비었습니다.");
}
if(!!name) {
    console.log("이름이 비어있지 않습니다.");
}





