// src/merge.ts

export function merge(collection_1: number[], collection_2: number[], collection_3: number[]): number[] {
    const result: number[] = [];
    let i = 0, j = 0, k = 0;

    // รวมอาร์เรย์แรกสองชุด (collection_1, collection_2)
    while (i < collection_1.length && j < collection_2.length) {
        if (collection_1[i] < collection_2[j]) {
            result.push(collection_1[i]);
            i++;
        } else {
            result.push(collection_2[j]);
            j++;
        }
    }

    // เพิ่มค่าเหลือจาก collection_1
    while (i < collection_1.length) {
        result.push(collection_1[i]);
        i++;
    }

    // เพิ่มค่าเหลือจาก collection_2
    while (j < collection_2.length) {
        result.push(collection_2[j]);
        j++;
    }

    // รวม collection_3 ซึ่งจัดเรียงจากมากไปหาน้อย
    while (k < collection_3.length) {
        let val = collection_3[k];
        let insertIndex = result.findIndex(x => x > val);
        if (insertIndex === -1) {
            result.push(val);
        } else {
            result.splice(insertIndex, 0, val);
        }
        k++;
    }

    return result;
}
