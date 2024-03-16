// 문자열 타입
let string = "안녕하세요";
string = `안녕!`;
console.log(string);

// 특수 문자 출력하는 법
string = "''";
console.log(string);

/** 이스케이프 표현
 * 줄바꿈 : \n
 * \t : 탭
 * \ \ : 백 슬래쉬는 두번 써야 한다.
 */

string = "안녕!\n인성\t\t 내 이름은";
console.log(string);

// 템플릿 리터럴 (Template Literal)
// 안좋은 예 ❌
let id = "인성";
let greetings = "'안녕'," + id + "😁 \n 줄 한번 바꿔주면서";
console.log(greetings);

// 좋은 예 ✅
greetings = `안녕, ${id} ,
줄 한번 바꿔주면서
`;
console.log(greetings);
