const { sort, SORT_TYPE } = require(".");

it('should return array', () => {
    const arr = [2, 3, 1];
    const sortedArr = sort(arr);

    expect(Array.isArray(sortedArr)).toEqual(true);
});

it('should return ascending "1, 2, 3"', () => {
    const arr = [2, 3, 1];
    const sortedArr = sort(arr);

    expect(sortedArr).toEqual([1, 2, 3]);
});

it('should return descending "3, 2, 1"', () => {
    const arr = [2, 3, 1];
    const sortedArr = sort(arr, SORT_TYPE.DESC);

    expect(sortedArr).toEqual([3, 2, 1]);
});

it('should return ascending with filtered number "1, 2, 3"', () => {
    const arr = [2, 'a', 3, 1, '@'];
    const sortedArr = sort(arr);

    expect(sortedArr).toEqual([1, 2, 3]);
});

it('should return descending with filtered number "3, 2, 1, 0"', () => {
    const arr = ['$', 2, 3, 1, 0];
    const sortedArr = sort(arr, SORT_TYPE.DESC);

    expect(sortedArr).toEqual([3, 2, 1, 0]);
});

it('should return ascending with filtered number "1, 2, 2, 3, 3, 11, 99, 123, 123"', () => {
    const arr = [2, 'a', 3, 99, 123, 123, 3, 2, 11, 1, '@'];
    const sortedArr = sort(arr);

    expect(sortedArr).toEqual([1, 2, 2, 3, 3, 11, 99, 123, 123]);
});

it('should return descending with filtered number "123, 123, 11, 99, 3, 3, 2, 2, 1, 0, -15, -99, -120"', () => {
    const arr = ['$', 'a', 3, 99, 123, 123, 3, 2, 11, 1, '@', -120, 0, -99, -15];
    const sortedArr = sort(arr, SORT_TYPE.DESC);

    expect(sortedArr).toEqual([123, 123, 99, 11, 3, 3, 2, 1, 0, -15, -99, -120]);
});

it('should return ascending with multiple function call "1, 2, 3, 4, 5, 6"', () => {
    const arr = [2, 3, 1, 5, 6, 4];
    const sortedArr = sort(sort(sort(arr, SORT_TYPE.DESC)));

    expect(sortedArr).toEqual([1, 2, 3, 4, 5, 6]);
});

it('should return null', () => {
    expect(sort(31412)).toEqual(null);
    expect(sort('dsfafaad')).toEqual(null);
});