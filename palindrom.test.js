const { isPalindrom } = require(".");

it('should return boolean', () => {
    expect(typeof isPalindrom('monom')).toEqual('boolean');
    expect(typeof isPalindrom('monomi')).toEqual('boolean');
});

it('should return true (case insensitive)', () => {
    expect(isPalindrom('monom')).toEqual(true);
    expect(isPalindrom('kakak')).toEqual(true);
    expect(isPalindrom('ABbA')).toEqual(true);
    expect(isPalindrom('')).toEqual(true);
    expect(isPalindrom('a')).toEqual(true);
    expect(isPalindrom('A')).toEqual(true);
    expect(isPalindrom('asA')).toEqual(true);
    expect(isPalindrom('sssssssss')).toEqual(true);
    expect(isPalindrom('deliled')).toEqual(true);
    expect(isPalindrom('ABCDEFGHIJIHGFEDCBA')).toEqual(true);
});

it('should return false (case insensitive)', () => {
    expect(isPalindrom('monomg')).toEqual(false);
    expect(isPalindrom('kakakd')).toEqual(false);
    expect(isPalindrom('ABbAf')).toEqual(false);
    expect(isPalindrom('a1')).toEqual(false);
    expect(isPalindrom('A32')).toEqual(false);
    expect(isPalindrom('asAfda')).toEqual(false);
    expect(isPalindrom('sssss3ssss')).toEqual(false);
    expect(isPalindrom('delileed')).toEqual(false);
    expect(isPalindrom('ABCEEAA')).toEqual(false);
});

it('should return 8 true - 2 false (case sensitive)', () => {
    expect(isPalindrom('monom', true)).toEqual(true);
    expect(isPalindrom('kakak', true)).toEqual(true);
    expect(isPalindrom('ABbA', true)).toEqual(false);
    expect(isPalindrom('', true)).toEqual(true);
    expect(isPalindrom('a', true)).toEqual(true);
    expect(isPalindrom('A', true)).toEqual(true);
    expect(isPalindrom('asA', true)).toEqual(false);
    expect(isPalindrom('sssssssss', true)).toEqual(true);
    expect(isPalindrom('deliled', true)).toEqual(true);
    expect(isPalindrom('ABCDEFGHIJIHGFEDCBA', true)).toEqual(true);
});

it('should return null', () => {
    expect(isPalindrom(['safljafjah'], true)).toEqual(null);
});