import { Screen } from './screen';

describe('Screen should print screen with rows and columns', () => {
    test('Empty screen', () => {
        const expectedPrint =
            '.....\n' +
            '.....\n' +
            '.....\n';
        const screen = new Screen(3, 5);
        expect(screen.print()).toBe(expectedPrint);
    });

    test('Screen with 1 element in the center', () => {
        const expectedPrint =
            '.....\n' +
            '..A..\n' +
            '.....\n';
        const screen = new Screen(3, 5);
        screen.set(1, 2, 'A');
        expect(screen.print()).toBe(expectedPrint);
    });

    test('Screen with 1 element in the bottom left corner', () => {
        const expectedPrint =
            '.....\n' +
            '.....\n' +
            'A....\n';
        const screen = new Screen(3, 5);
        screen.set(0, 0, 'A');
        expect(screen.print()).toBe(expectedPrint);
    });

    test('Screen with 1 element in the top right corner', () => {
        const expectedPrint =
            '....A\n' +
            '.....\n' +
            '.....\n';
        const screen = new Screen(3, 5);
        screen.set(2, 4, 'A');
        expect(screen.print()).toBe(expectedPrint);
    });

    test('Screen with 1 element in the top left corner', () => {
        const expectedPrint =
            'A....\n' +
            '.....\n' +
            '.....\n';
        const screen = new Screen(3, 5);
        screen.set(2, 0, 'A');
        expect(screen.print()).toBe(expectedPrint);
    });

    test('Screen with 1 element in the bottom right corner', () => {
        const expectedPrint =
            '.....\n' +
            '.....\n' +
            '....A\n';
        const screen = new Screen(3, 5);
        screen.set(0, 4, 'A');
        expect(screen.print()).toBe(expectedPrint);
    });
});