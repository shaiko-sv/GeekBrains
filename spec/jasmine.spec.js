describe('Соответствие значения', () => {
    it('Проверка а на значение 10', () => {
        let a = 10; // то что мы проверяем
        expect(a).toBe(10);

        expect(a).not.toBe(1);
    //
    //     expect(a).toBeNull();
    //     expect(a).toBeUndefined();
    //     expect(a).toBeFalsy();
    //     expect(a).toBeTrythy();
    //     expect(a).toBeGreaterThanOrEqual();
    //     expect(a).toBeGreaterThen();
    //     expect(a).toBeLessThan();
    });
    it('Сравнение объектов', () => {
        let user1 = {
            name: 'Ann',
            age: 21,
        };
        let user2 = {
            name: 'Ann',
            age: 20,
        };
        expect(user1).toEqual(user2); // то что мы проверяем

    });
    it('Regexp', () => {
        let str = 'Test AbcD jasmine';
        expect(str).toMatch(/abcd/i); // то что мы проверяем
        expect(str).not.toMatch(/abcd/); // то что мы проверяем
        //expect(str).toMatch(/abc/i); // то что мы проверяем

    });
    it('Array', () => {
        let arr = ['white', 'black'];
        expect(arr).toContain('black'); // то что мы проверяем
        expect(arr).not.toContain('red'); // то что мы проверяем
        //expect(str).toMatch(/abc/i); // то что мы проверяем

    });
})