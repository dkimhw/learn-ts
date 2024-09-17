import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const nums = new NumbersCollection([10, 3, -5, 0])

console.log("Before sort: ", nums)
nums.sort();
console.log("After sort: ", nums);


const chars = new CharactersCollection('Xaaaa');

console.log("Before sort: ", chars)
chars.sort();
console.log("After sort: ", chars);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

linkedList.sort();
linkedList.print();
