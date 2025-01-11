const stack = [];

// 스택에 데이터 추가
stack.push(1);
stack.push(2);
stack.push(3);

// 스택에서 데이터 꺼냄
const topElement = stack.pop();
const nextElement = stack.pop();

// 스택의 크기를 구함
const stackSize = stack.length;

// topElement : 3
// nextElement : 2
