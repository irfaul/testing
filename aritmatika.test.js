const {tambah, kurang } = require('./aritmatika');

test('hasil 1 + 2 adalah 3', () => {
    expect(tambah(1,2)).toBe(3)
})

test('inginnya 5 - 4 adalah 1', () => {
    expect(kurang(5,4)).toBe(1)
})