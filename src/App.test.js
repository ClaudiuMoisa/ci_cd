import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Github actions updated text', () => {
  render(<App />);
  const textElement = screen.getByText(/Github actions updated/i);
  expect(textElement).toBeInTheDocument();
});
