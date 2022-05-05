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

    const expected = [
      'Cannot find command `unknown`, please run `help` to get the available commands',
    ];

    const result = Array.from(commandResults.children)[0];
    const response = Array.from(result.children)[1];

    expect(Array.from(response.children)).toHaveLength(expected.length);

    for (let i = 0; i < expected.length; i += 1) {
      expect(response.children.item(i)?.textContent).toBe(expected[i]);
    }
  });

  describe('help', () => {
    it('should return the result', () => {
      render(<Terminal />);

      const input = screen.getByLabelText<HTMLInputElement>('Command input');
      const commandResults = screen.getByTestId<HTMLDivElement>('command-results');

      fireEvent.change(input, { target: { value: 'help' } });
      fireEvent.submit(input);

      const expected = [
        'The avilable commands are:',
        'help',
        'about',
        'links',
        'portfolio',
      ];

      const result = Array.from(commandResults.children)[0];
      const response = Array.from(result.children)[1];

      expect(Array.from(response.children)).toHaveLength(expected.length);

      for (let i = 0; i < expected.length; i += 1) {
        expect(response.children.item(i)?.textContent).toBe(expected[i]);
      }
    });
  });
});
