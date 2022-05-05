/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef } from 'react';
import useTerminal from '../lib/useTerminal';

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const {
    history, execute, command, setCommand,
  } = useTerminal(inputRef, historyRef);

  const handleFormSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();

    execute();
  };

  return (
    <div className="bg-neutral-900 h-96 rounded-xl flex flex-col shadow-lg">

      <div
        ref={historyRef}
        className="flex-grow overflow-y-scroll mt-2 pl-4"
        data-testid="command-results"
      >
        {history.map((his) => (
          <div key={his.id} className="pb-2 last:pb-0">
            <p className="text-neutral-300 ">
              $
              {' '}
              {his.command}
            </p>
            <div>
              {his.result.split('\n').map((row, i) => (
                <p
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className="text-neutral-100"
                >
                  {row.trim()}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <form
        onSubmit={handleFormSubmit}
        onClick={() => inputRef.current?.focus()}
        onKeyUp={() => inputRef.current?.focus()}
        className="flex w-full text-neutral-100 px-4 py-2"
        data-testid="command-form"
      >
        <span className="pr-2">
          $
        </span>

        <input
          id="commandInput"
          name="commandInput"
          type="text"
          value={command}
          aria-label="Command input"
          className=" outline-none bg-transparent flex-grow"
          ref={inputRef}
          onChange={(event) => setCommand(event.target.value)}
        />

        <button
          id="commandSubmit"
          name="commandSubmit"
          type="submit"
          value="Submit"
          aria-label="Submit"
        />
      </form>
    </div>
  );
};

export default Terminal;
