function LinkedList(val) {
  this.val = val;
  this.next = null;

  this.print = node => {
    if (node === undefined) {
      node = this;
    }

    if (node) {
      console.log(node.val);
      this.print(node.next);
    }
  };

  this.toArray = (node, arr = []) => {
    if (node === undefined) {
      node = this;
    }

    return !node ? arr : this.toArray(node.next, [...arr, node.val]);
  };
}

module.exports = LinkedList;
