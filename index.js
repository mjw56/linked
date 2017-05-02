// boring fun with linked lists on
// a plane with no wi-fi

// a node instance
function Node(data) {
  this.data = data;
  this.next = null;
}

// helper fn to create a list
function makeList() {
  var head = new Node(0);

  for (let i = 1; i < 10; i++) {
  	let node = new Node(i);
	  head = insert(node, head);
  }

  return head;
}

// insert a new node into list
function insert(node, head) {
  // empty list just insert at the beginning
  if (head === null) {
  	head = node;
	  return head;
  }

  let curr = head;
  while (curr && curr.next !== null) {
  	curr = curr.next;
  }

  curr.next = node;
  return head;
}

function remove(value, head) {
  // here we are looking for a specific value
  // we need to keep track of the curr and the prev
  let curr = head;
  let prev;

  while (curr && curr.next !== null) {

	if (curr.data === value) {
	  prev.next = curr.next;
	  return head;
	}

    // set the prev to where we are right now
    prev = curr;

    // set the curr to the next one
    curr = curr.next;
  }
}

// reverse a linked list
function reverse(head) {
  let curr = head;
  let reversed;

  while (curr && curr.next !== null) {
    let temp = Object.assign({}, curr);
 	  temp.next = reversed;
	  reversed = temp;
	  curr = curr.next;
  }

  return reversed;
}

function printList(head) {
  let curr = head;

  while (curr !== null) {
    console.log(curr.data);
    curr = curr.next;
  }
}

// convert an array to a linked list
function arrayToList(array) {
  if (array === null || array.length === 0) {
    return null;
  }

  let head = new Node(array[0]);

  if (array[1] === null) {
    return head;
  }

  let curr = head;

  for (var i = 1; i < array.length; i++) {
    let node = new Node(array[i]);
    curr.next = node;
    curr = node;
  }

  return head;
}

module.exports = {
	makeList: makeList,
  arrayToList: arrayToList,
	insert: insert,
	remove: remove,
	reverse: reverse
}
