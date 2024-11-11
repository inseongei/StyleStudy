/* 00:50 / 10:00 */
function solution(numbers, num1, num2) {
    return numbers.slice(num1,num2+1)
}

// 정수 배열 numbers
// 정수 num1 정수 num2 
// 1. numbers의 num1번째 인덱스부터 num2까지의 인덱스를 자른다. ( slice 사용 )
// +1을 하는 이유는 마지막 인덱스를 포함하지 않기 때문이다.
