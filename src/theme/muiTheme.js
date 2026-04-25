import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    primary: {
      main: '#2563eb',
      light: '#60a5fa',
      dark: '#1e3a8a',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#C5A47E',
      light: '#E8D9C5',
      dark: '#9a7d5c',
      contrastText: '#1a1a2e',
    },
    background: {
      default: '#f8fafc',
      paper: '#ffffff',
    },
    text: {
      primary: '#0f172a',
      secondary: '#475569',
    },
    divider: '#e2e8f0',
    success: { main: '#10b981' },
    warning: { main: '#f59e0b' },
    error: { main: '#ef4444' },
    info: { main: '#3b82f6' },
  },

  typography: {
    fontFamily: '"Plus Jakarta Sans", "DM Sans", system-ui, sans-serif',
    h1: { fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 },
    h2: { fontWeight: 700, letterSpacing: '-0.015em', lineHeight: 1.2 },
    h3: { fontWeight: 700, letterSpacing: '-0.01em', lineHeight: 1.25 },
    h4: { fontWeight: 600, lineHeight: 1.3 },
    h5: { fontWeight: 600, lineHeight: 1.4 },
    h6: { fontWeight: 600, lineHeight: 1.5 },
    body1: { lineHeight: 1.75 },
    body2: { lineHeight: 1.65 },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
    caption: { letterSpacing: '0.04em' },
    overline: { letterSpacing: '0.1em', fontWeight: 600 },
  },

  shape: { borderRadius: 10 },

  shadows: [
    'none',
    '0 2px 8px rgba(15,23,42,0.06)',
    '0 4px 16px rgba(15,23,42,0.08)',
    '0 6px 20px rgba(15,23,42,0.10)',
    '0 8px 28px rgba(15,23,42,0.12)',
    '0 12px 40px rgba(15,23,42,0.14)',
    '0 16px 48px rgba(15,23,42,0.16)',
    '0 20px 56px rgba(15,23,42,0.18)',
    '0 24px 64px rgba(15,23,42,0.20)',
    '0 28px 72px rgba(15,23,42,0.22)',
    '0 32px 80px rgba(15,23,42,0.24)',
    '0 36px 88px rgba(15,23,42,0.26)',
    '0 40px 96px rgba(15,23,42,0.28)',
    '0 44px 104px rgba(15,23,42,0.30)',
    '0 48px 112px rgba(15,23,42,0.32)',
    '0 52px 120px rgba(15,23,42,0.34)',
    '0 56px 128px rgba(15,23,42,0.36)',
    '0 60px 136px rgba(15,23,42,0.38)',
    '0 64px 144px rgba(15,23,42,0.40)',
    '0 68px 152px rgba(15,23,42,0.42)',
    '0 72px 160px rgba(15,23,42,0.44)',
    '0 76px 168px rgba(15,23,42,0.46)',
    '0 80px 176px rgba(15,23,42,0.48)',
    '0 84px 184px rgba(15,23,42,0.50)',
    '0 88px 192px rgba(15,23,42,0.52)',
  ],

  components: {
    MuiAppBar: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.92)',
          backdropFilter: 'blur(20px)',
          color: '#0f172a',
          borderBottom: '1px solid rgba(226,232,240,0.8)',
        },
      },
    },

    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 8,
          padding: '10px 24px',
          fontSize: '0.875rem',
          transition: 'all 0.2s ease',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
          boxShadow: '0 4px 15px rgba(37,99,235,0.3)',
          '&:hover': {
            background: 'linear-gradient(135deg, #1d4ed8 0%, #1e40af 100%)',
            boxShadow: '0 6px 22px rgba(37,99,235,0.42)',
            transform: 'translateY(-1px)',
          },
        },
        outlinedPrimary: {
          borderWidth: 2,
          '&:hover': { borderWidth: 2 },
        },
        sizeLarge: { padding: '12px 32px', fontSize: '1rem' },
        sizeSmall: { padding: '6px 16px', fontSize: '0.8125rem' },
      },
    },

    MuiCard: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: 16,
          border: '1px solid rgba(226,232,240,0.8)',
          boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 12px 40px rgba(15,23,42,0.14)',
            transform: 'translateY(-6px)',
            borderColor: 'transparent',
          },
        },
      },
    },

    MuiPaper: {
      styleOverrides: {
        root: { borderRadius: 12 },
        elevation0: { border: '1px solid rgba(226,232,240,0.8)' },
        elevation1: { boxShadow: '0 2px 12px rgba(15,23,42,0.07)' },
        elevation2: { boxShadow: '0 4px 20px rgba(15,23,42,0.10)' },
        elevation3: { boxShadow: '0 8px 32px rgba(15,23,42,0.13)' },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: { borderRadius: 6, fontWeight: 500, fontSize: '0.8rem' },
        colorPrimary: {
          backgroundColor: 'rgba(37,99,235,0.08)',
          color: '#2563eb',
          '&:hover': { backgroundColor: 'rgba(37,99,235,0.15)' },
        },
      },
    },

    MuiTextField: {
      defaultProps: { variant: 'outlined' },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 10,
            backgroundColor: '#ffffff',
            '&:hover fieldset': { borderColor: '#2563eb' },
            '&.Mui-focused fieldset': { borderWidth: 2, borderColor: '#2563eb' },
          },
        },
      },
    },

    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: 280,
          borderRadius: '0 20px 20px 0',
          boxShadow: '8px 0 40px rgba(15,23,42,0.15)',
        },
      },
    },

    MuiAccordion: {
      defaultProps: { elevation: 0 },
      styleOverrides: {
        root: {
          borderRadius: '12px !important',
          border: '1px solid rgba(226,232,240,0.8)',
          marginBottom: 12,
          '&:before': { display: 'none' },
          '&.Mui-expanded': {
            boxShadow: '0 4px 20px rgba(37,99,235,0.1)',
            borderColor: 'rgba(37,99,235,0.3)',
          },
        },
      },
    },

    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          padding: '0 24px',
          minHeight: 64,
          '&.Mui-expanded': { minHeight: 64 },
        },
        content: {
          margin: '20px 0',
          '&.Mui-expanded': { margin: '20px 0' },
        },
      },
    },

    MuiAccordionDetails: {
      styleOverrides: {
        root: { padding: '0 24px 24px' },
      },
    },

    MuiLinearProgress: {
      styleOverrides: {
        root: { borderRadius: 4, height: 6, backgroundColor: 'rgba(37,99,235,0.1)' },
        barColorPrimary: {
          background: 'linear-gradient(90deg, #2563eb, #60a5fa)',
        },
      },
    },

    MuiDivider: {
      styleOverrides: {
        root: { borderColor: '#e2e8f0' },
      },
    },

    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.9rem',
          minWidth: 0,
          padding: '12px 20px',
        },
      },
    },

    MuiTabs: {
      styleOverrides: {
        indicator: {
          height: 3,
          borderRadius: '3px 3px 0 0',
        },
      },
    },

    MuiTableHead: {
      styleOverrides: {
        root: {
          '& .MuiTableCell-head': {
            backgroundColor: '#f1f5f9',
            fontWeight: 700,
            color: '#0f172a',
            fontSize: '0.8125rem',
            textTransform: 'uppercase',
            letterSpacing: '0.06em',
          },
        },
      },
    },

    MuiTableRow: {
      styleOverrides: {
        root: {
          '&:hover': { backgroundColor: 'rgba(37,99,235,0.03)' },
          '&:last-child td': { borderBottom: 0 },
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: 20,
          boxShadow: '0 32px 80px rgba(15,23,42,0.25)',
        },
      },
    },

    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: '#0f172a',
          fontSize: '0.8rem',
          borderRadius: 6,
          padding: '6px 12px',
        },
      },
    },
  },
});

export default muiTheme;
