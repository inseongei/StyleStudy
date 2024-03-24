/** Promise : 무겁고 느린 작업을 효율적으로 처리해준다.
 *      pending   : 이제 막 프로미스가 만들어져서 일이 끝나지 않은 상태
 *      fulfilled : 비동기적인 코드가 성공적으로 실행된 상태
 *      rejected  : 실패한 상태
 */

function runInDelay(seconds) {
  return new Promise((resolve, rejected) => {
    if (!seconds || seconds < 0) rejected(new Error("seconds가 0보다 작음"));
    setTimeout(resolve, seconds * 1000);
  });
}

runInDelay()
  .then(() => console.log("타이머 완료"))
  .catch(console.error)
  .finally(() => console.log("끝났어"));

/** Promise 로직
 * 1. Promise를 만들때는 new 연산자를 이용해서 만들어줘야 한다. (resolve와 rejected를 받음)
 * 2. (실패) reject 할때는 에러 객체를 전달해야 한다.
 * 3. (성공) resolve가 호출될땐 then으로 연결
 * 4. promise에서 에러가 발생했는데 catch가 없다면 " UnhandlePromiseRejectionWarning 에러 발생 "
 */
