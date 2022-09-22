import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Github actions text', () => {
  render(<App />);
  const textElement = screen.getByText(/Github actions/i);
  expect(textElement).toBeInTheDocument();
});
