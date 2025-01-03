/* 시간초과💢 */
function solution(common) {
  let count = common[1] - common[0];

  if (common[2] === common[1] + count) {
    return common[common.length - 1] + count;
  } else {
    const ratio = common[1] / common[0];
    return common[common.length - 1] * ratio;
  }
}

// 1. 등차인지 등비인지 확인
