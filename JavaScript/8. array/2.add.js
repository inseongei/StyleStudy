const fruits = ["🍉", "🍊", "🍌", "🍍", "🍎"];

// 배열 아이템을 참조하는 방법
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]);
console.log(fruits.length);

// 추가, 삭제 - 좋지 않은 방식 🩻
fruits[3] = "🌰"; // 인덱스로 추가하면 예상치 못한 일이 일어남 (덮어씌워지거나, 텅텅비어있음)
console.log(fruits);

delete fruits[1];
console.log(fruits); // 삭제되고 중간에 empty item으로 남겨짐
