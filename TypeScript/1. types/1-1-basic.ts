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

  // unknown 💩 - 어떤 타입이 올지 모르는 상태
  let notSure: unknown = 0;
  notSure = "hello";
  notSure = true;

  // any 💩
  let anything: any = 0;
  anything = "hello";

  // void : 아무것도 리턴하지 않는다. (생략이 가능하다)
  function print(): void {
    console.log("hello");
    return;
  }

  let unusable: void = undefined; // 변수에는 undefined 밖에 올 수 없고 이렇게 사용하진 않음

  // never : 에러를 던지던지 while문을 돌면서 끝나지 않게 해야함.
  function throwError(message: string): never {
    // message -> server (log)
    throw new Error(message);
  }

  // object 💩  : 객체 , 배열 , 함수
  let obj: object = [1, 2];
  function acceptSomeObject(obj: object) {}
  acceptSomeObject({ name: "ellie" });
  acceptSomeObject({ name: "dog" });
}
