import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nelson Cañete - Full Stack Web Developer | PHP Laravel React.js WordPress",
  description: "Experienced Full Stack Web Developer specializing in PHP Laravel, React.js, WordPress, database development, and web optimization. 10+ years of experience delivering scalable web solutions.",
  keywords: "Full Stack Developer, PHP Laravel, React.js, WordPress, Web Development, Database Development, Web Optimization, Email Integration, Nelson Cañete",
  authors: [{ name: "Nelson Cañete" }],
  creator: "Nelson Cañete",
  publisher: "Nelson Cañete",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nelson-canete.dev",
    title: "Nelson Cañete - Full Stack Web Developer",
    description: "Experienced Full Stack Web Developer specializing in PHP Laravel, React.js, WordPress, and database development.",
    siteName: "Nelson Cañete Portfolio",
    images: [
      {
        url: "/images/avatar.webp",
        width: 1200,
        height: 630,
        alt: "Nelson Cañete - Full Stack Web Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelson Cañete - Full Stack Web Developer",
    description: "Experienced Full Stack Web Developer specializing in PHP Laravel, React.js, WordPress, and database development.",
    images: ["/images/avatar.webp"],
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#0F172A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="https://nelson-canete.dev" />
        <meta name="google-site-verification" content="your-google-verification-code" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nelson Cañete",
              "jobTitle": "Full Stack Web Developer",
              "description": "Experienced Full Stack Web Developer specializing in PHP Laravel, React.js, WordPress, database development, and web optimization.",
              "url": "https://nelson-canete.dev",
              "email": "dfe0990ngc@gmail.com",
              "telephone": "+639978509514",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "Philippines"
              },
              "sameAs": [
                "https://www.linkedin.com/in/nelson6c",
                "https://github.com/dfe0990ngc",
                "https://facebook.com/nelsongabriel.canete"
              ],
              "knowsAbout": [
                "PHP",
                "Laravel",
                "React.js",
                "WordPress",
                "JavaScript",
                "MySQL",
                "Database Development",
                "Web Optimization",
                "Full Stack Development"
              ]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
