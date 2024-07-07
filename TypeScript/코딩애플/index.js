var 이름 = "kim";
var 이름배열 = ["kim", "jung"];
var 객체 = { name: " inseong" };
// name이라는 속성이 와도 되고 안와도 되고
var 타입옵션 = { name: " inseong" };
// 다양한 타입이 들어올 수 있게 하려면 : Union type
var 유니온 = "kim"; //  문자 혹은 숫자
var 만든타입 = 123;
// 함수를 만들 때도 타입 지정 가능 ( 파라미터의 타입 지정 , 리턴값의 타입 지정 )
function 함수(x) {
    return x * 2;
}
var john = [1, true];
var john2 = { name: "kim" };
// class 문법
var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
    }
    return User;
}());
var project = {
    member: ["kim", "park"],
    days: 30,
    started: true,
};
var 회원들 = [1, "2", 3];
var 학교 = {
    score: [100, 97, 84],
    teacher: "Phil",
    friend: "John",
};
학교.score[4] = false;
학교.friend = ["Lee", 학교.teacher];
/********************************************************************* */
function numfn(x) {
    return x * 2;
}
numfn(2);
