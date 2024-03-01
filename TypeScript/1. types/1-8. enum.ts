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
  enum Days {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  }
  console.log(Days.Monday);
  let day: Days = Days.Saturday;
  day = Days.Thursday;
  console.log(day);

  let dayOfweek: DaysOfWeek = "Monday";
}
