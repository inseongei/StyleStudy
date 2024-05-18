function selectionSort(arr) {
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i; // 가장 작은 원소의 인덱스값
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    // 서로 체인지
    let temp = arr[i];
    arr[i] = arr[minIndex];
    arr[minIndex] = temp;
  }
  return arr; // 1,2,3,4,5
}

console.log(selectionSort([5, 3, 2, 4, 1]));
