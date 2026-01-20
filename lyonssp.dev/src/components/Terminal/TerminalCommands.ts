import { Terminal } from '@xterm/xterm';
import { CommandRegistry, TerminalContext } from '../../types/terminal';
import { personalInfo, links, techRadar, RadarItem } from '../../data/portfolio';

const writeOutput = (terminal: Terminal, text: string, color?: string) => {
  if (color) {
    terminal.writeln(`\x1b[${color}m${text}\x1b[0m`);
  } else {
    terminal.writeln(text);
  }
};

const writeSuccess = (terminal: Terminal, text: string) => {
  writeOutput(terminal, text, '32'); // Green
};

const writeError = (terminal: Terminal, text: string) => {
  writeOutput(terminal, text, '31'); // Red
};

const writeInfo = (terminal: Terminal, text: string) => {
  writeOutput(terminal, text, '36'); // Cyan
};

export const commands: CommandRegistry = {
  help: {
    name: 'help',
    description: 'Display available commands',
    execute: (args, terminal) => {
      terminal.writeln('');
      writeInfo(terminal, 'Available Commands:');
      terminal.writeln('');
      writeSuccess(terminal, '  Navigation & System:');
      terminal.writeln('    help              - Display this help message');
      terminal.writeln('    clear             - Clear terminal output');
      terminal.writeln('');
      writeSuccess(terminal, '  Information:');
      terminal.writeln('    whoami            - Display contact information');
      terminal.writeln('    skills            - Show technology radar');
      terminal.writeln('');
      writeSuccess(terminal, '  Navigation:');
      terminal.writeln('    goto?             - Show available links');
      terminal.writeln('    goto <dest>       - Open link (github, linkedin, resume)');
      terminal.writeln('');
    },
  },

  clear: {
    name: 'clear',
    description: 'Clear terminal output',
    execute: (args, terminal) => {
      terminal.clear();
    },
  },

  whoami: {
    name: 'whoami',
    description: 'Display contact information',
    execute: (args, terminal) => {
      terminal.writeln('');
      writeSuccess(terminal, personalInfo.name);
      terminal.writeln(`  ${personalInfo.title}`);
      terminal.writeln('  Austin, TX');
      terminal.writeln('');
      writeInfo(terminal, 'About:');
      terminal.writeln('  Tech Lead at Mercury, designing next-gen authorization systems and');
      terminal.writeln('  contributing to React and Haskell codebases for business banking.');
      terminal.writeln('');
      terminal.writeln('  Previously led engineering teams at Favor (food delivery) and built');
      terminal.writeln('  distributed systems at AWS for Managed Prometheus. Experienced in');
      terminal.writeln('  Golang, Kubernetes, service-oriented architecture, and leading');
      terminal.writeln('  cross-functional product engineering initiatives.');
      terminal.writeln('');
      writeInfo(terminal, 'Education:');
      terminal.writeln('  Currently pursuing M.S. in AI & Machine Learning at UT Austin');
      terminal.writeln('  B.S. in Computer Science & Mathematics from Clarkson University');
      terminal.writeln('');
      writeInfo(terminal, 'Contact:');
      terminal.writeln('  Email:  lyonssp777@gmail.com');
      terminal.writeln('  Phone:  (540) 290-6284');
      terminal.writeln('');
    },
  },

  skills: {
    name: 'skills',
    description: 'Show technology radar',
    execute: (args, terminal) => {
      // Group items by quadrant and ring
      const quadrants = {
        techniques: techRadar.filter(item => item.quadrant === 'techniques'),
        languages: techRadar.filter(item => item.quadrant === 'languages'),
        tools: techRadar.filter(item => item.quadrant === 'tools'),
        platforms: techRadar.filter(item => item.quadrant === 'platforms'),
      };

      const getRingSymbol = (ring: string) => {
        switch(ring) {
          case 'adopt': return '●';
          case 'trial': return '◐';
          case 'assess': return '○';
          case 'hold': return '✕';
          default: return '•';
        }
      };

      const renderQuadrant = (title: string, items: RadarItem[]) => {
        const adopt = items.filter(i => i.ring === 'adopt');
        const trial = items.filter(i => i.ring === 'trial');
        const assess = items.filter(i => i.ring === 'assess');
        const hold = items.filter(i => i.ring === 'hold');

        writeSuccess(terminal, `  ${title.toUpperCase()}`);

        if (adopt.length > 0) {
          const adoptStr = adopt.map(i => `${getRingSymbol('adopt')} ${i.name}`).join('  ');
          terminal.writeln(`    ${adoptStr}`);
        }
        if (trial.length > 0) {
          const trialStr = trial.map(i => `${getRingSymbol('trial')} ${i.name}`).join('  ');
          terminal.writeln(`    ${trialStr}`);
        }
        if (assess.length > 0) {
          const assessStr = assess.map(i => `${getRingSymbol('assess')} ${i.name}`).join('  ');
          terminal.writeln(`    ${assessStr}`);
        }
        if (hold.length > 0) {
          const holdStr = hold.map(i => `${getRingSymbol('hold')} ${i.name}`).join('  ');
          terminal.writeln(`    ${holdStr}`);
        }
      };

      terminal.writeln('');
      writeInfo(terminal, 'TECHNOLOGY RADAR');
      terminal.writeln('');
      terminal.writeln('  Legend: ● Adopt  ◐ Trial  ○ Assess  ✕ Hold');
      terminal.writeln('');
      terminal.writeln('  ┌────────────────────────────────────────────────────────────────┐');

      renderQuadrant('techniques', quadrants.techniques);
      terminal.writeln('  ├────────────────────────────────────────────────────────────────┤');

      renderQuadrant('languages & frameworks', quadrants.languages);
      terminal.writeln('  ├────────────────────────────────────────────────────────────────┤');

      renderQuadrant('tools', quadrants.tools);
      terminal.writeln('  ├────────────────────────────────────────────────────────────────┤');

      renderQuadrant('platforms', quadrants.platforms);
      terminal.writeln('  └────────────────────────────────────────────────────────────────┘');
      terminal.writeln('');
    },
  },

  'goto?': {
    name: 'goto?',
    description: 'Show available links',
    execute: (args, terminal) => {
      terminal.writeln('');
      writeInfo(terminal, 'Available Links:');
      terminal.writeln('');
      terminal.writeln('  Use: goto <destination>');
      terminal.writeln('');
      writeSuccess(terminal, '  Destinations:');
      terminal.writeln('    github    - GitHub profile');
      terminal.writeln('    linkedin  - LinkedIn profile');
      terminal.writeln('    resume    - Resume PDF');
      terminal.writeln('');
    },
  },

  goto: {
    name: 'goto',
    description: 'Open a link in a new tab',
    usage: 'goto <github|linkedin|resume>',
    execute: (args, terminal) => {
      const destination = args[0]?.toLowerCase();

      if (!destination) {
        terminal.writeln('');
        writeError(terminal, 'Please specify a destination');
        terminal.writeln('Usage: goto <github|linkedin|resume>');
        terminal.writeln('Type "goto?" to see available destinations');
        terminal.writeln('');
        return;
      }

      const linkMap: { [key: string]: { url: string; label: string } } = {
        github: links.github,
        linkedin: links.linkedin,
        resume: links.resume,
      };

      const link = linkMap[destination];

      if (link) {
        terminal.writeln('');
        writeSuccess(terminal, `Opening ${link.label}...`);
        terminal.writeln('');
        window.open(link.url, '_blank');
      } else {
        terminal.writeln('');
        writeError(terminal, `Unknown destination: ${destination}`);
        terminal.writeln('Available: github, linkedin, resume');
        terminal.writeln('');
      }
    },
  },

};

export const parseCommand = (input: string): { command: string; args: string[] } => {
  const trimmed = input.trim();
  const parts = trimmed.split(/\s+/);
  const command = parts[0] || '';
  const args = parts.slice(1);
  return { command, args };
};

export const executeCommand = (
  input: string,
  terminal: Terminal,
  context: TerminalContext
): void => {
  const { command, args } = parseCommand(input);

  if (!command) {
    return;
  }

  const cmd = commands[command.toLowerCase()];

  if (cmd) {
    cmd.execute(args, terminal, context);
  } else {
    terminal.writeln('');
    writeError(terminal, `Command not found: ${command}`);
    terminal.writeln('Type "help" for available commands');
    terminal.writeln('');
  }
};
