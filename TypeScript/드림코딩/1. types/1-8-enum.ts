{
  /**
   * Enum
   */
  // JavaScript는 지원하지 않기에 freeze를 사용해서 수정할 수 없게 한다.
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  // 관련 있는 상태값이 있다면 enum을 사용해서 묶어 관리 할 수 있다.
  // 타입스크립트에서 enum은 가능하면 쓰지 않는 것이 좋다. -> 다른타입으로 수정이 가능하기에 안좋음 (Union을 타입을 사용하면 됌)

  type DaysOfweek = "Mon" | "Tue" | "Wed";

  enum Days {
    Monday, // 0
    Tuesday, // 1
    Wendesday, // 2
    Thursday, // 3
    Friday, // 4
    Saturday, // 5
    Sunday, // 6
  }
  console.log(Days.Monday);
  const day = Days.Saturday;
  console.log(day);

  const dayOfweek: DaysOfweek = "Mon";
}
