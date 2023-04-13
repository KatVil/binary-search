const binarySearch = require('../index')

test('Функция должна возвращать индекс элемента', () => {
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)).toBe(2);
    expect(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 'C')).toBe(2);
})

test('Функция должна быть определена', () => {
    expect(binarySearch).toBeDefined();
})

test('Функция должна возвращать -1, если элемента не существует в данном массиве', () => {
    expect(binarySearch([1,  2,  3], 4)).toBe(-1);
    expect(binarySearch([1,  2, 3, 5, 7], 8)).toBe(-1);
    expect(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 20)).toBe(-1);
    expect(binarySearch(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'], 'R')).toBe(-1);
})