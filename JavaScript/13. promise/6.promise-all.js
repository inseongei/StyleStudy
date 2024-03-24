function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("바나나");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("사과");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no Orange"));
}

// 바나나와 사과를 가져와
getBanana() //
  .then((banana) =>
    getApple() //
      .then((apple) => [banana, apple])
  )
  .then(console.log);

// 프로미스 병렬적 실행 - Promise.all
Promise.all([getBanana(), getApple()]) //
  .then((fruits) => console.log("All : ", fruits));

// Promise.race 주어진 Promise중에 제일 빨리 수행된 것이 이김!
Promise.race([getBanana(), getApple()]).then((fruit) =>
  console.log("race : ", fruit)
);

Promise.all([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("All-error : ", fruits))
  .catch(console.log);

// Promise.allSettled - 실패하든 성공하든 그 결과를 배열형태로 출력
Promise.allSettled([getBanana(), getApple(), getOrange()]) //
  .then((fruits) => console.log("All-settle : ", fruits))
  .catch(console.log);
