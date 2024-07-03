import { render, screen } from '@testing-library/react';
import App from '../App';

it('Displays all elements', async () => {
    render(<App />);

    expect(screen.getByText('Chat Bot')).toBeInTheDocument();
});
