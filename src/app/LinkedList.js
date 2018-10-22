export function LinkedList(iterable = null) {
  this.head = null;
  this.tail = null;
  this.iterable = iterable;

  if (this.iterable) {
    this[Symbol.iterator] = linkedListIterator;
  }
}

LinkedList.prototype.values = function() {
  if (!this.head) {
    return [];
  }

  const getValues = (acc, el) => {
    return el.next
      ? getValues([...acc, el.value], el.next)
      : [...acc, el.value];
  };

  return getValues([], this.head);
};

LinkedList.prototype.size = function() {
  if (!this.head) {
    return 0;
  }

  const getSize = (el, size = 1) => {
    return el.next ? getSize(el.next, size + 1) : size;
  };

  return getSize(this.head);
};

LinkedList.prototype.reset = function() {
  if (!this.head) {
    return false;
  }

  const clearNode = node => {
    if (node.next) {
      clearNode(node.next);
    }

    node.prev = null;
    node.next = null;
    node.value = null;
  };

  clearNode(this.head);

  this.head = null;
  this.tail = null;
};

LinkedList.prototype.append = function(iterable) {
  iterable.map(value => {
    if (this.tail) {
      this.tail.next = new Node(value, null, this.tail);
      this.tail = this.tail.next;
    } else {
      const newNode = new Node(value);
      this.head = newNode;
      this.tail = newNode;
    }
  });
};

LinkedList.prototype.push = function(value) {
  if (this.head) {
    this.head.prev = new Node(value, this.head, null);
    this.head = this.head.prev;
  } else {
    const newNode = new Node(value);
    this.head = newNode;
    this.tail = newNode;
  }
};

LinkedList.prototype.reverse = function() {
  if (this.size() < 2) {
    return false;
  }

  const values = this.values();
  values.reduce((node, value) => {
    node.value = value;
    return node.prev;
  }, this.tail);
};

LinkedList.prototype.reverseImmutable = function() {
  const values = this.values();
  const reversedLinkedList = new LinkedList(this.iterable);
  reversedLinkedList.append(values.reverse());
  return reversedLinkedList;
};

function* linkedListIterator() {
  if (!this.head) {
    return false;
  }

  this.el = this.head;

  while (this.el) {
    yield this.el.value;
    this.el = this.el.next;
  }
}

function Node(value, next, prev) {
  this.value = value;
  this.next = next;
  this.prev = prev;
}
