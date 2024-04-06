eval("const a = 2; console.log(a)");
console.log(isFinite(1)); // 숫자가 유한(true)한지 무한한지(false)
console.log(isFinite(Infinity));

console.log(parseFloat("12.43")); // 실수로 반환
console.log(parseInt("12.43")); // 정수로 반환

// URL (URI 하위 개념)
// 아스키 문자로만 구성되어야 함
// 한글이나 특수문자는 이스케이프 처리 해야 한다
const URL = "https://드림코딩.com";
const endcoded = encodeURI(URL);
console.log(endcoded);

const decoded = decodeURI(endcoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component를 이용 - https 나 http 가 없을 때
const part = "드림코딩.com";
console.log(encodeURIComponent(part));
