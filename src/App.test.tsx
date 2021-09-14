import { render, screen } from '@testing-library/react';
import { App } from './App';

test('renders Pizza', () => {
  render(<App />);
  const linkElement = screen.getByText(/Quero Pizza/i);
  expect(linkElement).toBeInTheDocument();
});
