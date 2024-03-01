{
  /**
   * Type Assertions 😡
   */
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😡

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers()!; // 함수를 호출한 다음에 ! ( 배열만 받을꺼야 undefined 가 될 수 없어 )
  numbers!.push(2); // 😡 ( ! : 이건 절대적으로 배열인걸 장담해 라는 뜻 겁나 확실해 )

  const button = document.querySelector("class")!; // 100%에만 쓰는 !표
}
