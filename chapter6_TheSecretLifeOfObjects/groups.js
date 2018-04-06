class Group {
  constructor() {
    this.member = [];
  }
  
  add(val) {
   	if(!this.has(val)) {
      this.member.push(val);
    }
  }
  
  delete(val) {
    this.member = this.member.filter(memb => memb != val );
  }
  
  has(val) {
    return this.member.includes(val); 
  }
  
  static from(array) {
    let group = new Group;
    for(let elem of array) {
      group.add(elem); 
    }
    return group;
  }
  
}

let group = Group.from([10, 20]);
console.log(group.has(10));
// → true
console.log(group.has(30));
// → false
group.add(10);
group.delete(10);
console.log(group.has(10));
// → false