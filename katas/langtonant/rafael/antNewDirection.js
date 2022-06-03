//this functions set up the new direction of the ant
export function setupNewDirection(OldDir, color) {
    if (color == 'black') {
        switch (OldDir) {
        case 'up':
            return 'left';

        case 'right':
            return 'up';

        case 'down':
            return 'right';

        case 'left':
            return 'down';
        }
    } else {
        if (color == 'white') {
            switch (OldDir) {
            case 'up':
                return 'right';

            case 'right':
                return 'down';

            case 'down':
                return 'left';

            case 'left':
                return 'up';
            }
        }
    }
}