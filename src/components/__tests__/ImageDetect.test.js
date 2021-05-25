import ImageDetect from '../ImageDetect';
import {render, screen, cleanup} from '@testing-library/react';

afterEach(cleanup);

test('should return truck', () => {
    render(<ImageDetect/>);
    const idElement = screen.getByTestId('resultHeader');
    expect(idElement).toHaveTextContent('truck');
})
