{
  /*
    Enum
  */
  // JS에는 X
  const MAX_NUM = 6;
  const MAX_STUDENTS_PER_CLASS = 10;
  const MONDAY = 0;
  const TUESDAY = 1;
  const WEDNESDAY = 2;
  const DAYS_ENUM = Object.freeze({ "MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2 });
  const dayOfToday = DAYS_ENUM.MONDAY;

  // TS (맨 앞만 대문자) - 가능한 한 쓰지 말 것!!
  enum Days {
    Monday = 1, // 기본값 0, 문자는 전부 수동적으로 할당
    Tuesday, // 1
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
  }
  console.log(Days.Monday);
  const day = Days.Friday;
  let day2: Days = Days.Saturday;
  day2 = Days.Thursday;
  // day2 = 10;
  console.log(day);


  type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday' | 'Saturday' | 'Sunday';
  
  let dayOfWeek: DaysOfWeek = 'Monday';
  // dayOfeek = 'E'; // X
}