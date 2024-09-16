import { Sorter } from "./Sorter";
import { NumbersCollection } from "./NumbersCollection";
import { CharactersCollection } from "./CharactersCollection";
import { LinkedList } from "./LinkedList";

const nums = new NumbersCollection([10, 3, -5, 0])
const sorter = new Sorter(nums);


console.log("Before sort: ", nums)
sorter.sort();
console.log("After sort: ", nums);


const chars = new CharactersCollection('Xaaaa');
const sorterChars = new Sorter(chars);

console.log("Before sort: ", chars)
sorterChars.sort();
console.log("After sort: ", chars);


const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const sorterLL = new Sorter(linkedList);
sorterLL.sort();
linkedList.print();
