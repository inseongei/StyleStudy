// 동결❄️ Object.freeze - 추가,삭제,쓰기,속성 재정의 ❌❌❌
// (단, 얕은 꽁꽁 얼림! - 최상위 레벨만 얼리며 중첩 객체까진 얼리지 못함)
const ellie = { name: "엘리" };
const dog = { name: "와우", emoji: "😁", owner: ellie };
Object.freeze(dog);

// 변화 테스트
dog.name = "멍멍";
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);

console.clear();

// 밀봉! Object.seal - 값의 수정✅, 추가❌, 삭제❌, 속성 재정의 ❌
const cat = { ...dog };
// Object.assign(cat, dog);
Object.seal(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.emoji; // 삭제는 안됨
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

// 확장 금지 preventExtensions - 추가만 ❌
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = "어흐응";
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
