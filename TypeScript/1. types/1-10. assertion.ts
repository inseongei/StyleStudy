{
  /**
   * Type Assertions (타입 표명) 😡  : 나의 타입 주장에 대해 의심하지마 ! 이건 정확한거니깐
   */

  // any : 숫자든 문자든 불리언이든 상관이 없어
  function jsStrFunc(): any {
    return 2;
  }
  const result = jsStrFunc();
  console.log((result as string).length); // 숫자지만 해당 result는 문자라고 주장을 했어 ➡️ 숫자에는 사용할 수 없는 length가 추천됌
  console.log((<string>result).length);

  // 만약 숫자인 wrong 을 숫자타입을 가지고 있는 배열이라고 잘못된 주장을 하게 될 경우
  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // 😡 push를 사용할 수 있게 추천해주고 해당 코드는 오류가 나겠지 ?

  // 숫자타입의 배열 또는 아무것도 존재하지 않는 undefined 가 나올 수 있어.
  function findNumbers(): number[] | undefined {
    return undefined;
  }

  // ! : 주장에 대한 단축버전 앞에 !를 붙이게 되면 === 해당 numbers는 무조건 배열이야
  const numbers = findNumbers()!; // 함수를 호출한 다음에 ! ( 배열만 받을꺼야 undefined 가 될 수 없어 )
  numbers!.push(2); // 😡 ( ! : 이건 절대적으로 배열인걸 장담해 라는 뜻 겁나 확실해 )

  const button = document.querySelector("class")!; // ❗100% ❗에만 쓰는 !표
}
