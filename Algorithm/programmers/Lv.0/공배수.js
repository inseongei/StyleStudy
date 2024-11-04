/* 01:37 / 10:00 */
function solution(number, n, m) {
    if(number % n === 0 && number % m === 0){
        return 1
    }else{
        return 0
    }
}

// 1. number가 n의 배수이면서 m의 배수라면 n으로 나눠도 나머지가 0이고 m으로 나눠도 0