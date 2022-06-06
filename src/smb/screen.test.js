import { Screen } from './screen';

test('empty screen with rows and columns', () => {
    const screen = new Screen(3, 5);
    const expectedPrint =
        '.....\n' +
        '.....\n' +
        '.....\n';
    expect(screen.print()).toBe(expectedPrint);
});