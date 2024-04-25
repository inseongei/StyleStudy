{
  const x = 1;
  {
    const y = 2;
    console.log(x); // 1
  }
  console.log(x); // 1
  //  console.log(y); // 출력 안돼
}

// 스코프는 블럭 안에서 유효 범위가 결정된다. ( 참조할 변수가 있는지 상위를 보고 그다음 상위를 보는 식 가까이 있는 변수를 참조 )
const text = "global"; // 전역 변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = "inside block1"; // 지역 변수 (로컬변수), 지역 스코프(로컬스코프)
  {
    console.log(text);
  }
}
