import { Terminal } from '@xterm/xterm';

export class TerminalInputHandler {
  private terminal: Terminal;
  private input: string = '';
  private cursor: number = 0;
  private history: string[] = [];
  private historyIndex: number = -1;
  private prompt: string = '';
  private resolveInput?: (value: string) => void;

  constructor(terminal: Terminal) {
    this.terminal = terminal;
    this.setupListeners();
  }

  private setupListeners() {
    this.terminal.onData((data) => {
      if (!this.resolveInput) return;

      const code = data.charCodeAt(0);

      // Handle special keys
      if (data === '\r') {
        // Enter key
        this.terminal.write('\r\n');
        const input = this.input;

        // Add to history if not empty
        if (input.trim()) {
          this.history.push(input);
          this.historyIndex = this.history.length;
        }

        // Reset state
        this.input = '';
        this.cursor = 0;

        // Resolve the promise
        const resolve = this.resolveInput;
        this.resolveInput = undefined;
        resolve(input);
      } else if (data === '\x7F') {
        // Backspace
        if (this.cursor > 0) {
          this.input = this.input.slice(0, this.cursor - 1) + this.input.slice(this.cursor);
          this.cursor--;
          this.redrawInput();
        }
      } else if (data === '\x1b[A') {
        // Up arrow - previous history
        if (this.historyIndex > 0) {
          this.historyIndex--;
          this.input = this.history[this.historyIndex] || '';
          this.cursor = this.input.length;
          this.redrawInput();
        }
      } else if (data === '\x1b[B') {
        // Down arrow - next history
        if (this.historyIndex < this.history.length - 1) {
          this.historyIndex++;
          this.input = this.history[this.historyIndex] || '';
          this.cursor = this.input.length;
          this.redrawInput();
        } else if (this.historyIndex === this.history.length - 1) {
          this.historyIndex = this.history.length;
          this.input = '';
          this.cursor = 0;
          this.redrawInput();
        }
      } else if (data === '\x1b[C') {
        // Right arrow
        if (this.cursor < this.input.length) {
          this.cursor++;
          this.terminal.write('\x1b[C');
        }
      } else if (data === '\x1b[D') {
        // Left arrow
        if (this.cursor > 0) {
          this.cursor--;
          this.terminal.write('\x1b[D');
        }
      } else if (data === '\x03') {
        // Ctrl+C
        this.terminal.write('^C\r\n');
        this.input = '';
        this.cursor = 0;
        this.terminal.write(this.prompt);
      } else if (code >= 32 && code <= 126) {
        // Printable characters
        this.input = this.input.slice(0, this.cursor) + data + this.input.slice(this.cursor);
        this.cursor++;
        this.terminal.write(data);

        // If there are characters after cursor, redraw
        if (this.cursor < this.input.length) {
          const remaining = this.input.slice(this.cursor);
          this.terminal.write(remaining);
          // Move cursor back
          for (let i = 0; i < remaining.length; i++) {
            this.terminal.write('\x1b[D');
          }
        }
      }
    });
  }

  private redrawInput() {
    // Clear current line
    this.terminal.write('\r\x1b[K');
    // Write prompt and input
    this.terminal.write(this.prompt + this.input);
    // Move cursor to correct position
    const diff = this.input.length - this.cursor;
    for (let i = 0; i < diff; i++) {
      this.terminal.write('\x1b[D');
    }
  }

  public read(prompt: string): Promise<string> {
    return new Promise((resolve) => {
      this.prompt = prompt;
      this.terminal.write(prompt);
      this.resolveInput = resolve;
    });
  }

  public println(message: string) {
    this.terminal.writeln(message);
  }

  public print(message: string) {
    this.terminal.write(message);
  }

  public dispose() {
    this.resolveInput = undefined;
  }
}
