{
  /**
   *  Type aliases
   */
  type Text = string;
  const name: string = "ellie";
  const name2: Text = "ellie"; // Text 는 문자열
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };

  // Student 타입에 정해진 것들만 사용가능 (아무거나 참조 할 수 없음)
  const student: Student = {
    name: "dog",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let ellieName: Name;
  // ellieName = "gdgd"; // Name이라는 타입은 Name이라는 문자열만 올 수 있다.

  type JSON = "json";
  const json: JSON = "json";
  // const json2: JSON = "jso2"; // json만 올 수 있음
}
