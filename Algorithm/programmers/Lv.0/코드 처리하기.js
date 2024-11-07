/* 18:36 / 20:00 */
function solution(code) {
    let mode = false;
    let result = ""
  for(let i = 0; i<code.length;i++){
      if(code[i] === "1") {
          mode = !mode;
          continue; // 현재 i번째의 반복문을 넘어가
      }
    if(mode){ // mode : 1
       if(i % 2 !== 0) result += code[i] 
    }else{ // mode : 0
        if(i % 2 === 0) result += code[i] 
    }

  }
    return result === "" ? "EMPTY" : result
    
}

/*
 mode : 0
 idx가 짝수일 때만 result 라는 문자열에 code의 i번째를 넣어준다.
 
 mode : 1
 idx가 홀수일 때만 result 라는 문자열에 code의 i번째를 넣어준다.
 
 - code에서 1이 있으면 mode를 변경
*/

// 1. 반복문을 돌면서 code를 체크하고
// 2. code의 문자열이 뭔지를 확인
// 3. mode가 0일때 반복문의 i가 홀수인지 확인하고 문자열에 넣어준다.
// 4. mode가 1일때 반복문의 i가 짝수인지 확인하고 문자열에 넣어준다.