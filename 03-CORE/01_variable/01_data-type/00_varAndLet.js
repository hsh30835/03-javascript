function test(){
    for(var i = 0; i<=3; i++){

    }
    console.log(i);
    //var의 문제 scope의 범위가 없음 변수충돌이 일어날 수 있음
}

test();

// let을 사용하는 경우
function test(){
    for(let i = 0; i<=3; i++){
        //let의 scope는 for안의 함수까지
    }
    console.log(i);

}

test();