var name = "최명준";
console.log(name);
console.log(typeof name);

var age = 31;
console.log(age);
console.log(typeof age);

var address;
console.log(address);
console.log(typeof address);/*undefined: 정의되지 않았다*/

address = 10;/*값을 집어 넣었을 때, 들어간 값에 따라서 타입이 정해진다.*/
console.log(address);
console.log(typeof address);

address += "10";
console.log(address);
console.log(typeof address);

address = null; /*null==객체를 표현할 때 사용*/
console.log(address);
console.log(typeof address);

address = {
    si: "부산시",
    gungu: "부산진구",
};
console.log(address);
console.log(typeof address);

/**
 * <type>
 * number(숫자 - 정수, 실수)
 * string(문자열(char는 없음))
 * boolean(논리 - 참, 거짓)
 * object(객체) - null 포함
 * undefined(type이 없다)
 * NaN(Not a Number 숫자가 아님)
 */


/* 
 * const, let
 * console.log();
 * => ===, !==
 * null 병합 연산
 * anything1 ?? anything2
 * 좌항(anything1) === null || 좌항(anything1) === undefined => 우항(anything2)
 * 좌항(anything1) !== null && 좌항(anything1) !== undefined => 좌항(anything1)
 * JSON.stringify
 * .slice
 * .splice
 * .indexOf
 * .lastIndexOf
 * .push
 * .pop
 * return
 * 14, 15장에 다 들어 있는 내용
 */




