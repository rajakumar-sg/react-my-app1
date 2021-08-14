import { render, screen } from '@testing-library/react';
import GreenButton from '../GreenButton';

test('render GoButton with default Go text', () => {
  render(<GreenButton/>);
  const linkElement = screen.getByText(/Go/i);
  expect(linkElement).toBeInTheDocument();
});

test('render GoButton with custom text', () => {
  render(<GreenButton text='Run'/>);
  const linkElement = screen.getByText(/run/i);
  expect(linkElement).toBeInTheDocument();
});
