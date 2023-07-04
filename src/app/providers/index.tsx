'use client';
import React from 'react';
import { createTheme, NextUIProvider } from '@nextui-org/react';
import { ThemeProvider as NextThemesProvider } from 'next-themes';

function Index({ children }: { children: React.ReactNode }) {
  const lightTheme = createTheme({
    type: 'light',
  });

  const darkTheme = createTheme({
    type: 'dark',
  });

  return (
    <NextThemesProvider
      defaultTheme="system"
      attribute="class"
      value={{ light: lightTheme.className, dark: darkTheme.className }}
    >
      <NextUIProvider>{children}</NextUIProvider>
    </NextThemesProvider>
  );
}

export default Index;
