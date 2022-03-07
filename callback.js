words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];

function callback(element) {
  return element.length > 6;
}
newWords = words.filter(callback);
console.log(newWords);

// 익명 함수
newWords = words.filter(function (element) {
  return element.length > 6;
});
console.log(newWords);

// 위 익명 함수와 같은 실행 결과
function myfilter(origin, callback) {
  const result = [];
  for (let i = 0; i < origin.length; i++) {
    const current = origin[i];
    if (callback(current)) {
      result.push(current);
    }
  }
  return result;
}
newWords = myfilter(words, (element) => element.length > 6);
console.log(newWords);
