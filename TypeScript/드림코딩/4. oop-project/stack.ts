interface Stack {
  readonly size: number;
  push(value: string): void;
  pop(): void;
}

type StackNode = {
  readonly value: string;
  readonly next?: StackNode;
};

class StackImple implements Stack {
  private _size: number = 0;
  private head?: StackNode;
  get size() {
    return this._size;
  }
  push(value: string) {
    const node: StackNode = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): string {
    // null == undefined
    if (this.head == null) {
      throw Error("stack is empty");
    }
    const node = this.head;
    this.head = node.next;
    this._size--;
    return node.value;
  }
}

const stack = new StackImple();
stack.push("inseong1");
stack.push("inseong2");
stack.push("inseong3");
while (stack.size !== 0) {
  console.log(stack.pop());
}
