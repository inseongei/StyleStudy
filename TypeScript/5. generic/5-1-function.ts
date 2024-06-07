{
  function checkNotNull(arg: number | null): number {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const result = checkNotNull(123);
  console.log(result);
  checkNotNull(null);

  function checkNotNullBad(arg: any | null): any {
    if (arg == null) {
      throw new Error("not valid any!");
    }
    return arg;
  }
  const result2 = checkNotNullBad(123);

  // 제네릭 이용 - null이 아닐때만 똑같은 타입으로 리턴
  function checkNotNullGeneric<T>(arg: T | null): T {
    if (arg == null) {
      throw new Error("not valid number!");
    }
    return arg;
  }
  const number = checkNotNullGeneric(123);
  const boal: boolean = checkNotNullGeneric(true);
}
