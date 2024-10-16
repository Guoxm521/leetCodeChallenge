class ListNode {
  constructor(val) {
    this.val = val; // 节点的值
    this.next = null;   // 指向下一个节点的引用，初始时为空
  }
}

class LinkedList {
  constructor() {
    this.head = null; // 链表的头节点
    this.size = 0;    // 链表的大小
  }

  // 在链表末尾添加节点
  append(val) {
    const newNode = new ListNode(val);
    if (this.head === null) {
      this.head = newNode; // 如果链表为空，头节点指向新节点
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next; // 遍历到最后一个节点
      }
      current.next = newNode; // 将新节点添加到链表末尾
    }
    this.size++; // 增加链表大小
  }

  // 打印链表
  printList() {
    let current = this.head;
    let result = '';
    while (current !== null) {
      result += current.val + ' -> '; // 打印节点值
      current = current.next; // 移动到下一个节点
    }
    result += 'null'; // 表示链表的结束
    console.log(result);
  }

  // 删除指定值的节点
  remove(val) {
    if (this.head === null) return; // 链表为空，直接返回

    // 如果要删除的是头节点
    if (this.head.val === val) {
      this.head = this.head.next; // 移动头节点
      this.size--;
      return;
    }

    let current = this.head;
    let previous = null;

    // 遍历查找要删除的节点
    while (current !== null && current.val !== val) {
      previous = current; // 记录前一个节点
      current = current.next; // 移动到下一个节点
    }

    // 如果找到了要删除的节点
    if (current !== null) {
      previous.next = current.next; // 跳过当前节点
      this.size--; // 减少链表大小
    }
  }

  // 获取链表大小
  getSize() {
    return this.size;
  }
}

module.exports = { LinkedList }