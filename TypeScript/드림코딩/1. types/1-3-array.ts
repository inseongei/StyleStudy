{
  // Array
  const fruits: string[] = ["🍉", "🍌", "🍆", "🌰"];
  const scores: number[] = [1, 3, 2];
  const scores2: Array<number> = [1, 3, 2];

  // 과일들의 배열을 변경할 수 없음 - readonly를 작성할땐 type[]로만 작성해야 함 Array<number>은 지원하지 않음
  function printArray(fruits: readonly string[]) {}

  // Tuple : 서로 다른 타입을 함께 가질 수 있다 (권장하지 않는다.) → 인덱스처럼 접근하는건 가독성 저하
  // 튜플을 대체할수 있는 곳에는 interface , type alias , class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
  console.log(name);
  console.log(age);
}
