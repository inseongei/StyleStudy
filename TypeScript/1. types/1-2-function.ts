{
  //   // JavaScript 💩
  //   function jsAdd(num1, num2) {
  //     return num1 + num2;
  //   }

  //   // TypeScript 🔆
  //   function tsAdd(num1: number, num2: number): number {
  //     return num1 + num2;
  //   }

  //   // JavaScript 💩
  //   function isFetchNum(id) {
  //     // code ..
  //     // code ..
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  //   // TypeScript 🔆
  //   function isTSFetchNum(id: string): Promise<number> {
  //     // code ..
  //     // code ..
  //     return new Promise((resolve, reject) => {
  //       resolve(100);
  //     });
  //   }

  // JavaScript => TypeScript 🔆
  // Optional parameter : ? 의 옵션을 줬을 경우 인자를 전달 받을 수 도 있고 안받을 수도 있다는 것
  function printName(firstName: string, lastName?: string) {
    // lastName : string | undefined로 하게 되면 정확하게 printName("inseong",undefined); 로 전달해야함
    console.log(firstName);
    console.log(lastName);
  }

  printName("inseong", "jung");
  printName("inseong"); // 두가지의 인자를 예상했지만 하나만 줬을 경우

  // Default parameter
  function printMessage(message: string = "기본 값") {
    console.log(message);
  }
  printMessage();

  // Rest parameter
  function addNumbers(...nums: number[]): number {
    return nums.reduce((a, b) => a + b);
  }

  console.log(addNumbers(1, 2));
  console.log(addNumbers(1, 2, 3, 4));
}
