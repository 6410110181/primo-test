// src/merge.test.ts

import { merge } from './merge';

describe('merge function', () => {
    it('รวมอาร์เรย์สามชุดที่จัดเรียงแล้วเป็นอาร์เรย์เดียวที่จัดเรียงในลำดับจากน้อยไปหามาก', () => {
        const collection_1 = [1, 3, 5, 7];
        const collection_2 = [2, 4, 6, 8];
        const collection_3 = [10, 9, 8, 7, 6];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 10]);
    });

    it('จัดการกับกรณีที่หนึ่งในอาร์เรย์ว่าง', () => {
        const collection_1 = [1, 3, 5];
        const collection_2: number[] = []; 
        const collection_3 = [7, 6, 5, 4];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 3, 4, 5, 5, 6, 7]);
    });

    it('จัดการกับกรณีที่อาร์เรย์ทั้งหมดว่าง', () => {
        const collection_1: number[] = []; 
        const collection_2: number[] = []; 
        const collection_3: number[] = []; 

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([]);
    });
});
