/* 03:55 / 10:00 */
function solution(n) {
    let result = 0;
    let num = 1;
    for(let i = 1; i<=n;i++){
        n % i === 0 && result++
    }
    return result;
}

// (a,b)로 표기하는데 자연수 n이 매개변수로 주어진다.
// 두 숫자의 곱이 n인 순서쌍의 개수

// 1. 중첩 반복문을 사용해서 i와j의 곱이 20인 횟수를 전부 구해준다. ( 시간초과 알고리즘 → 중첩 반복문 : n**2 의 시간 복잡도 )
// 2. 두 수의 곱이 n이라는 뜻은 n % i 가 0이라는 뜻이기 때문에 result에 +1을 해준다.