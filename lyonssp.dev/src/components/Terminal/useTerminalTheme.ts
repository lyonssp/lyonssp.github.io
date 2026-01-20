import { useMemo } from 'react';
import { ITheme } from '@xterm/xterm';
import { useThemeContext } from '../../contexts/ThemeContext';
import { teal, indigo, grey } from '@mui/material/colors';

export const useTerminalTheme = (): ITheme => {
  const { mode } = useThemeContext();

  return useMemo(() => {
    if (mode === 'dark') {
      return {
        background: '#0E0B16',
        foreground: '#ffffff',
        cursor: teal[500],
        cursorAccent: '#0E0B16',
        selectionBackground: teal[700],
        selectionForeground: '#ffffff',
        black: '#000000',
        red: '#ff5555',
        green: teal[400],
        yellow: '#f1fa8c',
        blue: teal[300],
        magenta: '#ff79c6',
        cyan: teal[200],
        white: '#ffffff',
        brightBlack: grey[700],
        brightRed: '#ff6e6e',
        brightGreen: teal[300],
        brightYellow: '#ffffa5',
        brightBlue: teal[200],
        brightMagenta: '#ff92df',
        brightCyan: teal[100],
        brightWhite: '#ffffff',
      };
    } else {
      // Light mode
      return {
        background: '#fafafa',
        foreground: '#212121',
        cursor: indigo[500],
        cursorAccent: '#fafafa',
        selectionBackground: indigo[200],
        selectionForeground: '#212121',
        black: '#212121',
        red: '#d32f2f',
        green: indigo[400],
        yellow: '#f57c00',
        blue: indigo[500],
        magenta: '#c2185b',
        cyan: indigo[300],
        white: grey[100],
        brightBlack: grey[600],
        brightRed: '#f44336',
        brightGreen: indigo[300],
        brightYellow: '#ff9800',
        brightBlue: indigo[400],
        brightMagenta: '#e91e63',
        brightCyan: indigo[200],
        brightWhite: grey[50],
      };
    }
  }, [mode]);
};
