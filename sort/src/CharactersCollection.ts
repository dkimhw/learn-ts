import { Sortable } from "./Sorter";

export class CharactersCollection implements Sortable {
  data: string
  private dataArr: string[]

  constructor(data: string) {
    this.data = data
    this.dataArr = data.split('')
  }

  get length() {
    return this.data?.length;
  }

  compare(leftIndex: number, rightIndex: number): boolean {
    return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
  }

  swap(leftIndex: number, rightIndex: number): void {
    let leftHand = this.dataArr[leftIndex];
    this.dataArr[leftIndex] = this.dataArr[rightIndex];
    this.dataArr[rightIndex] = leftHand;

    this.data = this.dataArr.join('');
  }
}
