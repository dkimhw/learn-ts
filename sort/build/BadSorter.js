"use strict";
// Bad solution using type guards because your code gets big trying to account
// for all types of collections
class BadSorter {
    constructor(collection) {
        this.collection = collection;
        this.collection = collection;
    }
    sort() {
        const { length } = this.collection;
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // type guard
                if (this.collection instanceof Array) {
                    if (this.collection[j] > this.collection[j + 1]) {
                        let tmp = this.collection[j];
                        this.collection[j] = this.collection[j + 1];
                        this.collection[j + 1] = tmp;
                    }
                }
                if (typeof this.collection === 'string') {
                }
            }
        }
    }
}
