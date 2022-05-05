import { nanoid } from 'nanoid';
import React, { useState, useEffect } from 'react';

function getResult(command: string): string {
  switch (command) {
    case 'help':
      return `The avilable commands are:\n
      help\n
      about\n
      links\n
      portfolio`;

    case '':
    default:
      return `Cannot find command \`${command}\`, please run \`help\` to get the available commands`;
  }
}

interface CommandHistory {
  id: string
  command: string
  result: string
}

function useTerminal(
  inputRef: React.RefObject<HTMLElement>,
  historyRef: React.RefObject<HTMLElement>,
) {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [command, setCommand] = useState<string>('');

  useEffect(() => {
    if (!historyRef.current) {
      return;
    }

    // eslint-disable-next-line no-param-reassign
    historyRef.current.scrollTop = historyRef.current.scrollHeight;
  }, [history, historyRef]);

  useEffect(() => {
    if (!inputRef.current) {
      return;
    }

    inputRef.current.focus();
  }, [inputRef]);

  const execute = () => {
    const id = nanoid(8);

    const result = getResult(command);
    const newResult: CommandHistory = {
      id,
      command,
      result,
    };

    setCommand('');
    setHistory([...history, newResult]);
  };

  return {
    history,
    execute,
    command,
    setCommand,
  };
}

export default useTerminal;
