/* 15:18 / 20:00 */
function solution(a, d, included) {
    let array = [a]; // 등차 수열 배열
    let sum = 0;
    
    // 1. 등차 수열 배열 만들어줌
    for(let i = 1; i<included.length;i++){
        array.push(a + d  * i)
    }
    
    // 2. included 배열과 비교 후 true인 항을 더해줌
    for(let i = 0; i<array.length;i++){
        if(included[i]){
            sum += array[i]
        }
    }
    return sum
    
}

// 두 정수 a,d 
// boolean 배열 included
// 첫째 항 : a , 공차 : d

// 1. 등차수열의 배열을 만든다
// 2. included의 배열과 비교 후 true인 항을 더해준다.