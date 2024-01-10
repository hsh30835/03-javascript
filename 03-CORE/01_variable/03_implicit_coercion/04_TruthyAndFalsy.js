// 자바스크립트 엔진은 불리언 타입이 아닌 값을 Truthy 값
// 또는 Faisy 값으로 구분한다.
// Truthy -> true, Falsy - >false로 암묵적 타입 변환 된다.

let test1;
console.log(!!test1);

// test1 = Falsy, !test1 = true, !!test1 = false

let test = {
    a : null,
    b : 1
};

// test라는 객체의 프로퍼티에 b의 값이 존재해?
if(test?.b){
    console.log("ture");
}else{
    console.log("false");
}

// test라는 객체의 프로퍼티 b에 값이 존재하는 경우
console.log(test.b && "a");
console.log("========================")
test.b ? console.log("true"): console.log(false);