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
