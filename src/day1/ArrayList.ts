export default class ArrayList<T> {
    public length: number;
    public capacity: number;
    public data: T[];

    constructor(capacity: number) {
        this.length = 0;
        this.capacity = capacity;
        this.data = [];
    }

    prepend(item: T): void {
        this.length = this.data.length;
        this.data = [item, ...this.data];
    }
    insertAt(item: T, idx: number): void {
        this.length = this.data.length;
        this.data.splice(idx, 0, item);
    }
    append(item: T): void {
        this.length = this.data.length;
        this.data.push(item);
    }
    remove(item: T): T | undefined {
        let result;

        for (let i = 0; i < this.data.length; i++) {
            if (this.data[i] === item) {
                result = this.data.splice(i, 1) as T[];
                break;
            }
        }
        this.length = this.data.length;

        return result?.[0];
    }
    get(idx: number): T | undefined {
        return this.data?.[idx];
    }
    removeAt(idx: number): T | undefined {
        let result = this.data.splice(idx, 1) as T[];
        this.length = this.data.length;

        return result?.[0];
    }
}
