{
  /**
   * Type Assertions 💩
   * 100% 장담할때만 사용
   */

  function jsStrFunc(): any {
    return "hello";
  }
  const result = jsStrFunc();

  console.log((result as string).length);
  console.log((<string>result).length);

  const wrong: any = 5;
  console.log((wrong as Array<number>).push(1)); // ❌

  function findNumbers(): number[] | undefined {
    return undefined;
  }

  const numbers = findNumbers();
  // numbers.push(2); // 숫자 배열일수도 있지만 undefined 일수도 있기에 경고가 뜸 💩

  numbers!.push(2); // ! : 이건 진짜로 숫자배열이야

  // assertion 은 정말 100퍼센트 장담하면서 있을 때
  const button = document.querySelector("class");
  // button.nodeValue
  button!.nodeValue;
  const button2 = document.querySelector("class")!;
}
