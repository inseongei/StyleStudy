/* 06:44 / 10:00 */
function solution(slice, n) {
    return n % slice === 0 ? n / slice : Math.ceil(n / slice) 
}

// 피자를 2 ~ 10 조각까지 원하는 조각 수로 잘라줌
// 피자 조각수 : slice 
// 피자를 먹는 사람의 수 : n
// 1. n을 slice로 나눴을 때 나머지가 slice보다 작다면 한판 더 시켜야 함 → Math.ceil로 올림 처리 해주면 된다.