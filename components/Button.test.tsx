import { render, screen } from '@testing-library/react';
import { Button } from './Button';

test('renders correctly', () => {
  render(<Button>foo</Button>);
  expect(screen.getByText('foo')).toBeInTheDocument();
});
