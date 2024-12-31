const obj = {
    data1: "d1",
    data2: 10,
    data3: [1, 2, 3, 4],
};

const obj2 = {
    ...obj,
    data2: 20,
};
/**
 * 비구조 할당(구조분해)
const data1 = obj.data1;
const data2 = obj.data2;
const {data1, data2} = obj;
 */
const { data1:d1, data2:d2 } = obj; // 키값 맞춰줘야 함
console.log(d1, d2);

const nums = [ 1, 2, 3, 4, 5 ];
const [ n1, n2, n3 ] = nums; // 변수명 틀려도 됨
console.log(n1, n2, n3);

const { data1: dd1, ...obj3 } = obj; // ...obj3: 남아있는 놈들
console.log(obj3);

const [ n4, n5, ...newNums ] = nums;
console.log(newNums);

























