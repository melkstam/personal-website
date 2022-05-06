import React, { useState, useEffect, ReactNode } from 'react';
import { usePlausible } from 'next-plausible';

export function getResult(command: string): ReactNode {
  switch (command) {
    case 'help':
      return (
        <>
          <p>The avilable commands are:</p>
          <p>
            help about contact portfolio
          </p>
        </>
      );

    case 'contact':
      return (
        <>
          <p><a href="tel:+46723636316">+46 723 63 63 16</a></p>
          <p><a href="mailto:vilhelm.melkstam@gmail.com">vilhelm.melkstam@gmail.com</a></p>
          <p><a href="https://www.linkedin.com/in/vilhelm-melkstam/">LinkedIn</a></p>
          <p><a href="https://github.com/vilhelmmelkstam">GitHub</a></p>
        </>
      );

    case 'about':
      return (
        <>
          <p>
            Hi, I&apos;m Vilhelm Melkstam! I&apos;m fullstack developer and general nerd interseted
            in all things tech and the problems that it can solve. And that&apos;s exactly what I do
            best.
          </p>
          <p>
            Right now I&apos;m doing my masters in Information Technology at Linköping univeristy.
            During evenings, weekends and summers, I also work at
            {' '}
            <a href="https://www.skrym.se/">Skrym</a>
            {' '}
            where I help optimizing logistics and removing air from packages sent home to you.
          </p>
        </>
      );

    case 'beer':
      window.location.href = 'https://untappd.com/user/vilhelmmelkstam';
      return (
        <p>Loading…</p>
      );

    default:
      return `Could not find command \`${command}\`, please run \`help\` to get the available commands`;
  }
}

interface CommandHistory {
  id: string
  command: string
  result: ReactNode
}

function useTerminal(
  inputRef: React.RefObject<HTMLInputElement>,
  historyRef: React.RefObject<HTMLElement>,
) {
  const [history, setHistory] = useState<CommandHistory[]>([]);
  const [command, setCommand] = useState<string>('');
  const plausible = usePlausible();

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

  const onArrowUpKey = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'ArrowUp') {
      return;
    }

    if (history.length === 0) {
      return;
    }

    setCommand(history[history.length - 1].command);
  };

  const execute = () => {
    if (command === '') {
      return;
    }

    plausible('command', {
      props: {
        command,
      },
    });

    const id = Math.random().toString(36).slice(2);

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
    onArrowUpKey,
  };
}

export default useTerminal;
