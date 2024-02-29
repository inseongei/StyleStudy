{
  // Array
  const fruits: string[] = ["사과", "바나나"];
  const scores: Array<number> = [1, 3, 4];
  // readonly 특성을 사용할 경우는 해당 문법을 사용해야 하며, 데이터 타입을 변경할 수 없다.
  function printArray(fruits: readonly string[]) {}

  // 😡Tuple (서로 다른 타입을 함께 가질수 있음) , -> interface , type alias , class
  let student: [string, number];
  student = ["name", 123];
  student[0]; // name
  student[1]; // 123
  const [name, age] = student;
}
