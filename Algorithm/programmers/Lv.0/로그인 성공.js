/* 03:31 / 10:00 */
function solution(id_pw, db) {
  const [id, pw] = id_pw;
  let str = "";
  for (let i = 0; i < db.length; i++) {
    const [dbId, dbPw] = db[i];

    if (dbId === id && pw === dbPw) {
      return "login";
    } else if (dbId === id && pw !== dbPw) {
      str = "wrong pw";
    } else if (dbId !== id && pw !== dbPw) {
      str = "fail";
    }
  }

  return str;
}
