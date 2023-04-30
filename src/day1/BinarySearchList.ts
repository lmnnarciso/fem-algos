export default function bs_list(haystack: number[], needle: number): boolean {
    let low = 0;
    let high = haystack.length;

    while (low < high) {
        let middle = Math.floor(low + (high - low) / 2);
        let value = haystack[middle];

        if (value === needle) {
            return true;
        } else if (value > needle) {
            high = middle;
        } else {
            low = middle + 1;
        }
    }
    return false;
}
