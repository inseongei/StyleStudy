interface Stack<T> {
  readonly size: number;
  push(value: T): void;
  pop(): T;
}

type StackNode<T> = {
  readonly value: T;
  readonly next?: StackNode<T>;
};

class StackImple<T> implements Stack<T> {
  private _size: number = 0;
  private head?: StackNode<T>;
  get size() {
    return this._size;
  }
  push(value: T) {
    const node: StackNode<T> = { value, next: this.head };
    this.head = node;
    this._size++;
  }
  pop(): T {
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

const stack = new StackImple<string>();
stack.push("inseong1");
stack.push("inseong2");
stack.push("inseong3");
while (stack.size !== 0) {
  console.log(stack.pop());
}

const stack2 = new StackImple<number>();
stack2.push(123);
stack2.push(456);
stack2.push(678);
while (stack2.size !== 0) {
  console.log(stack2.pop());
}
