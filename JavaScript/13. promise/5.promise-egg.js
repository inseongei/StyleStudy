function fetchEgg(chicken) {
  return Promise.resolve(`${chicken} => 계란`);
}

fetchEgg("닭") //
  .then((egg) => console.log(egg));

function fryEgg(egg) {
  return Promise.resolve(`${egg} => 후라이`);
}

function getChicken() {
  return Promise.reject(new Error("치킨을 가지고 올 수 없어"));
  //   return Promise.resolve(`꽃 => 치킨`);
}

getChicken() //
  .catch(() => "닭")
  .then(fryEgg)
  .then(console.log)
  .catch(console.log);

/**
 * Promise.resolve
 * Promise.reject
 */
