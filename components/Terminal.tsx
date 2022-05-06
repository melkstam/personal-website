/* eslint-disable jsx-a11y/no-autofocus */
import React, { useRef } from 'react';
import useTerminal from '../lib/useTerminal';

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const historyRef = useRef<HTMLDivElement>(null);

  const {
    history, execute, command, setCommand, onArrowUpKey,
  } = useTerminal(inputRef, historyRef);

  const handleFormSubmit: React.FormEventHandler = (event) => {
    event.preventDefault();

    execute();
  };

  return (
    <div className="bg-neutral-900 h-[32rem] rounded-xl flex flex-col shadow-xl border-4 border-neutral-700">

      <div
        className="px-4 py-2 text-xl text-white border-b-2 border-neutral-700 leading-tight"
      >
        terminal.exe
      </div>

      <div
        ref={historyRef}
        className="flex-grow overflow-y-scroll mt-4 pl-4"
        data-testid="command-results"
      >
        {history.map((his) => (
          <div key={his.id} className="pb-4 last:pb-0">
            <p className="text-neutral-500 ">
              $
              {' '}
              {his.command}
            </p>
            <div className="prose prose-invert prose-p:mt-2 prose-p:first:mt-0 prose-p:m-0 prose-p:leading-normal max-w-none text-neutral-200">
              {his.result}
              {/* {his.result.split('\n').map((row, i) => (
                <p
                  // eslint-disable-next-line react/no-array-index-key
                  key={i}
                  className="text-neutral-100"
                >
                  {row.trim()}
                </p>
              ))} */}
            </div>
          </div>
        ))}
      </div>

      {/* eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions */}
      <form
        onSubmit={handleFormSubmit}
        onClick={() => inputRef.current?.focus()}
        onKeyUp={() => inputRef.current?.focus()}
        className="flex w-full text-neutral-50 px-4 py-4"
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
          onKeyUp={onArrowUpKey}
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
