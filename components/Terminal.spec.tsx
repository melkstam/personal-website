import React from 'react';
import {
  fireEvent, render, screen,
} from '@testing-library/react';
import Terminal from './Terminal';

describe('input', () => {
  it('should be empty on mount', () => {
    render(<Terminal />);

    const input = screen.getByLabelText('Command input');

    expect(input).toHaveValue('');
  });

  it('should have focus on mount', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');

    expect(input).toHaveFocus();
  });

  it('should update when writing', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');

    fireEvent.change(input, { target: { value: 'hello' } });

    expect(input).toHaveValue('hello');
  });

  it('should be cleared on enter', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');

    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.submit(input);

    expect(input).toHaveValue('');
  });

  it('should be cleared on submit button', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');
    const submitButton = screen.getByLabelText<HTMLButtonElement>('Submit');

    fireEvent.change(input, { target: { value: 'hello' } });
    fireEvent.click(submitButton);

    expect(input).toHaveValue('');
  });

  it('should gain focus on form click', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');
    const form = screen.getByTestId('command-form');

    fireEvent.click(form);

    expect(input).toHaveFocus();
  });

  it('should set the last command on arrow up', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.submit(input);

    fireEvent.change(input, { target: { value: 'other' } });
    fireEvent.keyUp(input, { key: 'ArrowUp' });

    expect(input).toHaveValue('test');
  });

  it('should it do nothing if arrow up is clicked with no history', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');

    fireEvent.change(input, { target: { value: 'test' } });
    fireEvent.keyUp(input, { key: 'ArrowUp' });

    expect(input).toHaveValue('test');
  });
});

describe('commands', () => {
  it('should not execute if no input', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');
    const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

    fireEvent.change(input, { target: { value: '' } });
    fireEvent.submit(input);

    expect(commandResults.children).toHaveLength(0);
  });

  it('should add new commands', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');
    const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

    for (let i = 1; i < 5; i += 1) {
      fireEvent.change(input, { target: { value: i.toString() } });
      fireEvent.submit(input);

      expect(commandResults.children).toHaveLength(i);
    }
  });

  it('should display the command after being ran', () => {
    render(<Terminal />);

    const commands = [
      'test1',
      'test2',
      'test3',
      'test4',
    ];

    const input = screen.getByLabelText<HTMLInputElement>('Command input');
    const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

    commands.forEach((command) => {
      fireEvent.change(input, { target: { value: command } });
      fireEvent.submit(input);

      const children = Array.from(commandResults.children);
      expect(children.at(-1)?.firstChild).toHaveTextContent(`$ ${command}`);
    });
  });

  it('should return no found result if unkown command', () => {
    render(<Terminal />);

    const input = screen.getByLabelText<HTMLInputElement>('Command input');
    const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

    fireEvent.change(input, { target: { value: 'unknown' } });
    fireEvent.submit(input);

    const result = Array.from(commandResults.children)[0];

    expect(result).toHaveTextContent('unknown');
    expect(result).toHaveTextContent('help');
  });

  describe('help', () => {
    const command = 'help';

    it('should print the expected result', () => {
      render(<Terminal />);

      const input = screen.getByLabelText<HTMLInputElement>('Command input');
      const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

      fireEvent.change(input, { target: { value: command } });
      fireEvent.submit(input);

      const result = Array.from(commandResults.children)[0];

      expect(result).toHaveTextContent('help');
      expect(result).toHaveTextContent('about');
      expect(result).toHaveTextContent('contact');
      expect(result).toHaveTextContent('portfolio');
    });
  });

  describe('about', () => {
    const command = 'about';

    it('should print the expected result', () => {
      render(<Terminal />);

      const input = screen.getByLabelText<HTMLInputElement>('Command input');
      const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

      fireEvent.change(input, { target: { value: command } });
      fireEvent.submit(input);

      const result = Array.from(commandResults.children)[0];

      expect(result).toHaveTextContent('Skrym');
    });
  });

  describe('contact', () => {
    const command = 'contact';

    it('should print the expected result', () => {
      render(<Terminal />);

      const input = screen.getByLabelText<HTMLInputElement>('Command input');
      const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

      fireEvent.change(input, { target: { value: command } });
      fireEvent.submit(input);

      const result = Array.from(commandResults.children)[0];

      expect(result).toHaveTextContent('+46 723 63 63 16');
      expect(result).toHaveTextContent('vilhelm.melkstam@gmail.com');
      expect(result).toHaveTextContent('GitHub');
      expect(result).toHaveTextContent('LinkedIn');
    });
  });
});
