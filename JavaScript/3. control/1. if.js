/** 조건문 Conditional Statement
 * if(조건){ }
 * if(조건){ } else { }
 * if(조건){ } else if(조건2) { } else { }
 * */

let fruit = "orange";
if (fruit === "apple") {
  console.log("🍎");
} else if (fruit === "orange") {
  console.log("🍊");
} else {
  console.log("🥲");
}

// false 여야 함
if (2 < 1) {
  console.log("출력되면 안됨!");
}
