"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CharactersCollection = void 0;
const Sorter_1 = require("./Sorter");
class CharactersCollection extends Sorter_1.Sorter {
    constructor(data) {
        super();
        this.data = data;
        this.dataArr = data.split('');
    }
    get length() {
        var _a;
        return (_a = this.data) === null || _a === void 0 ? void 0 : _a.length;
    }
    compare(leftIndex, rightIndex) {
        return this.data[leftIndex].toLowerCase() > this.data[rightIndex].toLowerCase();
    }
    swap(leftIndex, rightIndex) {
        let leftHand = this.dataArr[leftIndex];
        this.dataArr[leftIndex] = this.dataArr[rightIndex];
        this.dataArr[rightIndex] = leftHand;
        this.data = this.dataArr.join('');
    }
}
exports.CharactersCollection = CharactersCollection;
