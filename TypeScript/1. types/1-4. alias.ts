{
  /**
   * Type Aliases (우리가 직접적으로 타입을 지정할 수 있다)
   */
  type Text = string;
  const name: Text = "ellie";
  const address: Text = "korea";
  type Num = number;
  type Student = {
    name: string;
    age: number;
  };
  const student: Student = {
    name: "ellie",
    age: 12,
  };

  /**
   * String Literal Types
   */
  type Name = "name";
  let inseongName: Name;
  inseongName = "name";

  type JSON = "json";
  const json: JSON = "json";

  type Boal = true;
}
