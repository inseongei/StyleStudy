/* 시간초과💢 */
function solution(emergency) {
    let copy = [...emergency];
    let result = new Array(emergency.length);
    let num = 1;
    
    for(let i = 0; i<emergency.length;i++){
        let max = Math.max(...copy);
        let idx = copy.indexOf(max);
        let index = emergency.indexOf(max)
        copy.splice(idx,1);
        result[index] = i+1;
    }
    
    return result
}

// 1. emergency의 복사본을 만든다. ( 최대값을 찾는 배열 → 배열 수정 )
// 2. emergency 배열에서 해당 최대값이 몇번째에 있는지 확인한다.
// 3. 확인했으면 result 배열에 몇번째 인덱스에 있는지 확인해서 넣는다.