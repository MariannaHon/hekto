import type { Metadata } from 'next';
import '../css/index.css';
import { Lato, Josefin_Sans } from 'next/font/google';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Media from './components/Media/Media';

import { Toaster } from 'react-hot-toast';

import { Providers } from './provider';

const lato = Lato({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

const josefinSans = Josefin_Sans({
    weight: ['400', '700'],
    subsets: ['latin'],
    display: 'swap',
});

export const metadata: Metadata = {
    title: 'Hekto',
    description: 'Electronic products store',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="icon"
                    type="image/png"
                    href="/favicon/favicon-96x96.png"
                    sizes="96x96"
                />
                <link
                    rel="icon"
                    type="image/svg+xml"
                    href="/favicon/favicon.svg"
                />
                <link rel="shortcut icon" href="/favicon/favicon.ico" />
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
                <link rel="preload" href="/img/preload.png" as="image"></link>
            </head>
            <body className={`${lato.className} ${josefinSans.className}`}>
                <Providers>
                    <Header />
                    <Navigation />
                    <Toaster position="top-center" />
                    {children}
                    <Footer />
                    <Media />
                </Providers>
            </body>
        </html>
    );
}
