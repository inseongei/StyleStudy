/* 04:33 / 10:00 */
function solution(ineq, eq, n, m) {
    if(eq === "="){
        let isTrue = ineq === "<" ? n <= m : n >= m
        return isTrue ? 1 : 0 
    }else{
        let isTrue =  ineq === "<" ? n< m : n > m
        return isTrue ? 1 : 0
    }
}

// 1. 두 수 n과 m
// 2. "<" or ">" : ineq
// 3. "=" or "!" : eq
// 4. 조건에 맞으면 1 아니면 0 