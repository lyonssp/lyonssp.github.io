import { Terminal } from '@xterm/xterm';

export interface Command {
  name: string;
  description: string;
  usage?: string;
  execute: CommandHandler;
}

export type CommandHandler = (
  args: string[],
  terminal: Terminal,
  context: TerminalContext
) => void | Promise<void>;

export interface TerminalContext {
  // Empty for now, but keeping structure for future extensions
}

export interface CommandRegistry {
  [key: string]: Command;
}
