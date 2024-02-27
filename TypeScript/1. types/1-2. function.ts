{
  // JavaScript 😡
  function jsAdd(num1, num2) {
    return num1 + num2;
  }

  // TypeScript 💫
  function add(num1: number, num2: number): number {
    return num1 + num2;
  }

  // JavaScript 😡
  function jsFetchNum(id) {
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  // TypeScript 💫
  function FetchNum(id: string): Promise<number> {
    // code..
    // code..
    return new Promise((resolve, reject) => {
      resolve(100);
    });
  }

  //   JavaScript 💫 => TypeScript
  //   Optional parameter ( ?는 전달을 해도 되고 안해도 되고 )
  function printName(firstName: string, lastName?: string) {
    console.log(firstName);
    console.log(lastName); // undefined
  }
  printName("Steve", "Jobs");
  printName("Steve");
  printName("Steve", undefined);

  // Default parameter
  function printMessage(message: string = "default message") {
    console.log(message);
  }

  printMessage();

  // Rest parameter (개수는 상관없이 동일한 타입의 데이터를 받아온다.)
  function addNumbers(...numbers: number[]): number {
    console.log(numbers);
    return numbers.reduce((a, b) => a + b);
  }
  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4, 5, 0));
}
