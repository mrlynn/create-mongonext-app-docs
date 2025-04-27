---
id: material-ui
title: Material UI Integration
sidebar_label: 📓 Material UI Integration
---

# Material UI Integration

MongoNext uses [Material UI](https://mui.com/) for all UI components, providing a modern, responsive, and accessible design system out of the box.

## 1. Using Material UI Components
- All UI elements (buttons, forms, dialogs, etc.) are built with Material UI.
- You can use any [MUI component](https://mui.com/material-ui/react-button/) in your pages and custom components.

**Example:**
```js
import Button from '@mui/material/Button';

export default function MyButton() {
  return <Button variant="contained" color="primary">Click Me</Button>;
}
```

## 2. Customizing the Theme
- The Material UI theme is defined in your project (typically in `src/app/theme.js` or similar).
- You can customize colors, typography, spacing, and more.

**Example:**
```js
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: { main: '#111' },
    secondary: { main: '#888' },
  },
  typography: {
    fontFamily: 'Inter, Arial, sans-serif',
  },
});

export default function App({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}
```

## 3. Styling Components
- Use the `sx` prop for quick, inline styling.
- Use `makeStyles` or `styled` for more complex custom styles.

**Example:**
```js
<Button sx={{ mt: 2, borderRadius: 8 }}>Styled Button</Button>
```

## 4. Best Practices
- Keep custom components in the `components/` directory.
- Use the theme for consistent colors, spacing, and typography.
- Prefer Material UI's built-in accessibility features.

---

Continue to [Layout System](layout-system.md) for details on page structure and navigation. 