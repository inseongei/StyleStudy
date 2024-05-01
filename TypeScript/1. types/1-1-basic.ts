{
  /**
   * JavaScript
   * Primitive : number, string, boolean, bigint,symbol, null, undefined
   * Object : function, array.....
   */

  // number
  const num2: number = 123;

  // String
  const str: string = "hello";

  // boolean
  const boal: boolean = true;

  // undefined -비었는지 안비었는지 확정되지 않음
  let name: undefined; // 💩 이렇게 사용되지 않음
  let age: number | undefined;
  age = undefined;
  age = 1;

  function find(): number | undefined {
    return 12;
  }

  // null - 확실히 비었다.
  let person: null; // 💩 이렇게 사용되지 않음
  let person2: string | null;
}
