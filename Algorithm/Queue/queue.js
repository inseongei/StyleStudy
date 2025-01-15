// 1. Shift() 메소드 사용하기
// shift() 메소드의 시간 복잡도가 O(1)이 아니기 때문에 진짜 큐는 아니다.
const queue = [];

// 큐에 데이터 추가
queue.push(1);
queue.push(2);
queue.push(3);

// 큐의 맨 앞 데이터 제거
let firstItem = queue.shift();
console.log(firstItem); // 1

// 2. 배열을 이용하는 방식
class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[this.front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

// 3. 연결 리스트를 이용하는 방식
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue2 {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data) {
    const newNode = new Node(data);

    if (!this.head) {
      // 큐가 비어 있다면 head와 tail을 모두 새로 생성한 요소로 설정
      this.head = newNode;
      this.tail = newNode;
    } else {
      // 아니면 현재 tail의 next 속성을 새로운 요소로 설정 후 tail이 새로운 요소를 참조하도록 변경
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }

  pop() {
    if (!this.head) {
      return null;
    }
    // 두 번째 요소를 head의 참조로 변경하면
    // 자연스럽게 첫 번째 요소가 사라짐
    const removeNode = this.head;
    this.head = this.head.next;

    // 만약 두 번째 요소가 없었다면
    // 큐가 비어 있다는 뜻이니 tail도 null로 설정
    if (!this.head) {
      this.tail = null;
    }
    this.size--;

    // 삭제된 요소의 값을 반환
    return removeNode.data;
  }

  isEmpty() {
    return this.size === 0;
  }
}
