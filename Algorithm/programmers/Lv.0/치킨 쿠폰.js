/* 시간초과💢 */
function solution(chicken) {
  let result = 0;
  let coupons = chicken; // 초기 쿠폰 수는 주문한 치킨 수와 동일

  while (coupons >= 10) {
    // 쿠폰이 10장 이상일 때만 반복
    let serviceChicken = Math.floor(coupons / 10); // 서비스 치킨 수
    result += serviceChicken; // 서비스 치킨 누적
    coupons = serviceChicken + (coupons % 10); // 새로운 쿠폰 = 서비스 치킨으로 받은 쿠폰 + 남은 쿠폰
  }

  return result;
}
