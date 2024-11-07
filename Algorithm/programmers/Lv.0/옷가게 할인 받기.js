/* 11:54 / 20:00 */
function solution(price) {
    if(price <= 99999) return price
    
    if(price >= 0 && price <= 299999){
        return Math.floor(price - price * 0.05)
    }else if(price >= 300000 && price <= 499999){
         return Math.floor(price - price * 0.10)
    }else if(price >= 500000){
        return Math.floor(price - price * 0.20)
    }
}

// 10만원 이상 사면 5%  discount
// 30만원 이상 사면 10% discount
// 50만원 이상 사면 20% discount

// 1. 조건문을 사용해서 구현하면 된다.
// 2. 문제에서 소수점 이하를 버린 정수를 리턴하라 했으니 Math.floor를 사용해야 한다.
// 3. 할인 가격에 포함되지 않는다면 기존의 price를 리턴해주면 된다.