function Node(data) {
    this.data = data;
    this.next = null;
  }
  
  function getNth(node, index) {
    // Your code goes here.
    if (index < 0) {
      throw new Exception("index below zero");
    } else if (index % 1 != 0) {
      throw new Exception("index not integer enough")
    } else if (!node) {
      throw new Exception("index later than end of list");
    } else if (index == 0) {
      return node;
    } else {
      return getNth(node.next, index - 1);
    }
  }