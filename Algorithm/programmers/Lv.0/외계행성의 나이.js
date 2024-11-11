/* 03:14 / 10:00 */
function solution(age) {
    let ageArr = ['a','b','c','d','e','f','g','h','i','j'];
    let str = (age + "");
    let result = "";
    for(let i = 0; i<str.length;i++){
        result += ageArr[str[i]]
    }
    
    return result
}

// a : 0 ~ b : 1 ... j : 9
// 1. 배열의 인덱스를 이용해서 [a,b,c,d,e,f,g,h,i,j] 를 만들고 해당 요소의 인덱스 값을 구해준다.