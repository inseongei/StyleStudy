{
  /**
   * Enum
   */
  // JavaScript 는 존재하지 않음
  const MAX_NUM = 6;
  const MAX_STUDENT_PER_CLASS = 10;
  const MONDAT = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ MONDAY: 0, TUESDAY: 1, WEDNESDAY: 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TypeScript
  type DaysOfWeek = "Monday" | "Tuesday" | "Wednesday";
  // enum을 사용하면 가독성과 사용성을 높일 수 있다. 변하지 않는 상수값에 대한.
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday); // 0 : 해당되는 인덱스 값이 나오게 된다.
  let day: Days = Days.Saturday;
  day = Days.Thursday; // 4 : 해당되는 인덱스 값이 나오게 된다.
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
}
