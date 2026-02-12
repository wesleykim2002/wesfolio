import type { Metadata } from 'next';
import '@mantine/core/styles.css';
import { ColorSchemeScript, createTheme, MantineProvider, mantineHtmlProps } from '@mantine/core';
import { Geist, Geist_Mono } from 'next/font/google';

import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar/index';

import '@/styles/globals.css';

const theme = createTheme({});

export const metadata: Metadata = {
  title: 'Wesley Kim',
  description: "Welcome to Wesley Kim's portfolio website!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <NavBar />
          {children}
          <Footer />
        </MantineProvider>
      </body>
    </html>
  );
}
