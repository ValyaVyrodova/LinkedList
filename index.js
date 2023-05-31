class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SingleLinkedList {

    constructor(value) {
        const newNode = new Node(value)
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value)
            temp = temp.next
        }
    }

    // 1. getHead() return the value of the first node
    getHead() {
        if (this.head === null) {
            console.log('Head: null')
            return undefined
        }
        else {
            console.log(`Head: ${this.head.value}`)
            return this.head.value
        }
    }

    // 2. getTail() - return the value of the last node
    getTail() {
        if (this.tail === null) {
            console.log('Tail: null')
        } else {
            console.log(`Tail: ${this.tail.value}`)
        }
    }

    // 3. getLength(): number - returns length of the list
    getLength() {
        console.log(`Length: ${this.length}`)
    }

    // 4. makeEmpty():void - remove all nodes in the list
    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0
    }

    // 5. push(value) - add an element to the end of the list
    push(value) {
        const newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.length++;
        return this;
    }

    // 6. pop() - remove the last node from the list and return the list
    pop() {
        if (!this.head) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }

    // 7. unshift() - add first node to the list
    unshift(value) {
        let newNode = new Node(value)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;

        }
        this.length++;
        return this;
    }

    // 8. shift() - remove the first node from the list
    shift() {
        if (!this.head) return undefined;
        let temp = this.head;
        this.head = this.head.next;
        this.length--;
        if (this.length === 0) {
            this.tail = null;
        }
        return temp;
    }

    // 9. get(index: number):number - returns the value of the node at specific index.
    get(index) {
        if (index < 0 || index >= this.length) {
            console.log('Index is incorrect');
            return undefined;
        }
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next
        }
        return temp
    }

    // 10. set() - change value by index
    set(index, value) {
        if (index < 0 || index >= this.length) return undefined
        let temp = this.head;
        for (let i = 0; i < index; i++) {
            temp = temp.next;
        }
        if (temp) {
            temp.value = value;
            return true;
        }
        return false;
    }

    // 11. remove(index: number) - removes the node at specific index
    remove(index) {
        if (index < 0 || index >= this.length) return this.undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        const before = this.get(index - 1);
        const temp = before.next;
        before.next = temp.next;
        temp.next = null;
        this.length--;
        return temp;
    }

    // 12. insert() - insets the value at specific index

    insert(index, value) {
        if (index === 0) return this.unshift(value)
        if (index === this.length) return this.push(value)
        if (index < 0 || index >= this.length) return undefined;
        const newNode = new Node(value);
        const temp = this.get(index - 1);
        newNode.next = temp.next;
        temp.next = newNode
        this.length++;
        return true
    }

    exists(value) {
        if (!this.head) return false;
        let temp = this.head
        for (let i = 0; i < this.length; i++) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.next;
        }
        return false
    }

    reverse() {
        let temp = this.head; // 2
        this.head = this.tail; // 9
        this.tail = temp; // tail = 2
        let next = temp.next; // 3
        let prev = null // 0

        for (let i = 0; i < this.length; i++) {
            next = temp.next; //3
            temp.next = prev; // 0
            prev = temp; // 2
            temp = next; // 3
        }
        return this
    }

    swap(index1, index2) {
        if (!this.head ||
            this.length < 2 ||
            index1 < 0 ||
            index2 < 0 ||
            index1 >= this.length ||
            index2 >= this.length) {
            return undefined;
        }

        const minInd = Math.min(index1, index2);
        const maxInd = Math.max(index1, index2);
        const node1 = this.get(minInd);
        const node2 = this.get(maxInd);

        let temp = node2.value
        node2.value = node1.value
        node1.value = temp


        return this
    }




}

const list = new SingleLinkedList(1);
list.makeEmpty();
list.push(1);
list.push(2);
list.push(3);
list.push(4);
list.push(5);
list.push(6);
list.push(7);
list.push(8);
list.push(9);
list.push(10); // [1,2,3,4,5,6,7,8,9,10]
list.pop(); // delete 10
list.shift(); // delete 1
list.unshift(10); // add 10 in the begin
list.set(3, 40); // change 4 to 40
list.remove(0); // remove 10 
list.insert(3, 444) // insert 444 after 40


list.getHead();
list.getTail();
list.getLength();
console.log('\nLinked List: ');
list.printList();

console.log(list.get(3));
console.log(list.get(15));
console.log(list.exists(10)); // false
console.log(list.exists(444)); // true
console.log(list.exists(8)); // true

list.reverse()
console.log('\nReverse linked List: ');
list.printList();

list.reverse()
console.log('\nSwap linked List: ');
list.swap(2, 5);
list.printList();

