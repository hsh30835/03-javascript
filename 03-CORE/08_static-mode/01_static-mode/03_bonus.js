// 암시적인 글로벌 변수 선언금지
function test(){
    id="test";
    console.log(id);
}
test();
console.log(id);

//--------------------------
// 2. 변수, 함수, 매개변수 삭제 금지;
var strictVar = 5;
delete strictVar;

// -------------------------
// 3. 중복된 매개변수 이름 금지
function strictparamExample(paraml,parmal1){
    // V.E(global),
    // L.e(V.C(param1), R.C(global))
    // console.log(paraml1) 마지막 배개변수로 초기화됨
    // console.log(arguments);
}

// strictparamExample(1,2);

// ------------------------------
// 4. 엄격 모드에서는 this 사용이 금지
function strictThisExample(){
    'use strict';
    console.log(this);
}

strictThisExample(this);

// -----------------------
// eval의 안전성 확장
// "user strict";
// eval("var stricEvalVar = 5;");
// console.log(stricEvalVar);
// eval은 강제로 만들수 있음 권장되진 않음

// arguments 객체 변경 제한
function strictArgumentExample(){
    arguments[0] = 10;
    console.log(arguments);
}
strictArgumentExample();