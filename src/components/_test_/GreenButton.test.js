import { render, screen, fireEvent } from '@testing-library/react';
import GreenButton from '../GreenButton';

describe("Green button tests", () => {
  it('should render GoButton with default Go text', () => {
    render(<GreenButton/>);
    const linkElement = screen.getByText(/Go/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('should render GoButton with custom text', () => {
    render(<GreenButton text='Run'/>);
    const linkElement = screen.getByText(/run/i);
    expect(linkElement).toBeInTheDocument();
  });

  it('callback invoked onclick', () => {
    const callBack = jest.fn()

    render(<GreenButton text="test" onClick={callBack}/>)
    fireEvent(
      screen.getByText("test"),
      new MouseEvent('click', {bubbles: true})
    )
    expect(callBack).toBeCalled();
  });
});