/* 01:30 / 10:00 */
function solution(numbers) {
    let sum = 0;
    for(let i = 0; i<numbers.length;i++){
        sum += numbers[i]
    }
    
    return sum / numbers.length
}
// 정수 배열 numbers
// numbers의 원소의 평균값을 리턴
// 1. numbers를 반복하면서 요소들의 합을 변수에 저장
// 2. 합을 담은 변수와 해당 배열의 길이로 나눠 평균을 구해준다.