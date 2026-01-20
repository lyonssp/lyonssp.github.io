import React, { useEffect, useRef } from 'react';
import { Terminal as XTerm } from '@xterm/xterm';
import { FitAddon } from '@xterm/addon-fit';
import '@xterm/xterm/css/xterm.css';
import {
  TerminalContainer,
  TerminalBody,
} from './TerminalStyles';
import { useTerminalTheme } from './useTerminalTheme';
import { executeCommand } from './TerminalCommands';
import { TerminalContext } from '../../types/terminal';
import { TerminalInputHandler } from './TerminalInputHandler';

const Terminal: React.FC = () => {
  const terminalRef = useRef<HTMLDivElement>(null);
  const xtermRef = useRef<XTerm | null>(null);
  const fitAddonRef = useRef<FitAddon | null>(null);
  const inputHandlerRef = useRef<TerminalInputHandler | null>(null);
  const terminalTheme = useTerminalTheme();

  // Empty context for commands
  const contextRef = useRef<TerminalContext>({});

  // Initialize terminal when component mounts
  useEffect(() => {
    if (!terminalRef.current || xtermRef.current) return;

    // Initialize xterm
    const xterm = new XTerm({
      cursorBlink: true,
      fontSize: 14,
      fontFamily: 'Menlo, Monaco, "Courier New", monospace',
      theme: terminalTheme,
      convertEol: true,
      scrollback: 1000,
      allowProposedApi: true,
    });

    xtermRef.current = xterm;

    // Initialize FitAddon
    const fitAddon = new FitAddon();
    fitAddonRef.current = fitAddon;
    xterm.loadAddon(fitAddon);

    // Open terminal in container
    xterm.open(terminalRef.current);

    // Initialize input handler
    const inputHandler = new TerminalInputHandler(xterm);
    inputHandlerRef.current = inputHandler;

    // Welcome message
    xterm.writeln('');
    xterm.writeln('\x1b[36mWelcome to Sean Lyons Portfolio Terminal\x1b[0m');
    xterm.writeln('');
    xterm.writeln('Type \x1b[32mhelp\x1b[0m to see available commands');
    xterm.writeln('');

    // Give the terminal time to mount, then fit and start command loop
    setTimeout(() => {
      fitAddon.fit();
      xterm.focus();

      // Start reading commands
      const readCommand = async () => {
        while (xtermRef.current) {
          try {
            const input = await inputHandler.read('$ ');
            if (input.trim()) {
              executeCommand(input, xterm, contextRef.current);
              // Scroll to bottom after command execution
              xterm.scrollToBottom();
            }
          } catch (error) {
            console.error('Terminal read error:', error);
            break;
          }
        }
      };

      readCommand();
    }, 100);

    // Handle window resize
    const handleResize = () => {
      fitAddon.fit();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Update theme when it changes
  useEffect(() => {
    if (xtermRef.current) {
      xtermRef.current.options.theme = terminalTheme;
    }
  }, [terminalTheme]);

  return (
    <TerminalContainer>
      <TerminalBody ref={terminalRef} />
    </TerminalContainer>
  );
};

export default Terminal;
