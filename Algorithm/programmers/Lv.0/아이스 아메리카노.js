/* 02:31 / 20:00 */
function solution(money) {
    let coffee = Math.floor(money / 5500)
    
    return [coffee , money - 5500 * coffee ] 
}

// 아이스 아메리카노 한잔 : 5,500원
// 머쓱이가 가지고 있는 돈 : money 
// [ 최대로 마실 수 있는 아메리카노의 잔수 , 남은 돈 ]
