{
  /**
   * Intersection Types : &
   */

  type Student = {
    name: string;
    score: number;
  };

  type Worker = {
    empolyeeId: number;
    work: () => void;
  };

  // | 와 & 의 차이는 person에서 접근할 수 있는 값의 차이 ()
  /**
   * &: 학생과 직장인 에 있는 요소들에 접근이 가능
   * |: 둘다 있는 값에만 접근할 수 있음
   */
  // internWork 함수에서 person이 학생이던지 직장인이던지 두개 타입에 대한 요소들에 접근이 가능하다.
  function internWork(person: Student & Worker) {
    console.log(person.name, person.empolyeeId, person.work());
  }

  internWork({
    name: "ellie",
    score: 1,
    empolyeeId: 123,
    work: () => {},
  });
}
