import {screen, render} from '@testing-library/react';
import Button from '../components/Button';

test('renders button', () => {
  render(<Button
    text="test"
  />);
  expect(screen.getByText('test')).toBeInTheDocument();
})

test('render empty button', () => {
  render(<Button />);
  expect(screen.getByTestId('PressMeButton')).toBeInTheDocument();
})