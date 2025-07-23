import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Nelson Cañete - Full Stack Web Developer | PHP Laravel React.js WordPress Expert",
  description: "Experienced Full Stack Web Developer with 10+ years specializing in PHP Laravel, React.js, WordPress, database development, and web optimization. Available for full-time positions and freelance projects.",
  keywords: [
    "Full Stack Developer",
    "PHP Laravel Developer", 
    "React.js Developer",
    "WordPress Developer",
    "Web Development",
    "Database Development",
    "Web Optimization",
    "Email Integration",
    "Nelson Cañete",
    "Philippines Developer",
    "Remote Developer",
    "Freelance Developer"
  ].join(", "),
  authors: [{ name: "Nelson Cañete", url: "https://nelson-canete.dev" }],
  creator: "Nelson Cañete",
  publisher: "Nelson Cañete",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nelson-canete.dev",
    title: "Nelson Cañete - Full Stack Web Developer | PHP Laravel React.js Expert",
    description: "Experienced Full Stack Web Developer with 10+ years specializing in PHP Laravel, React.js, WordPress, and database development. Available for projects worldwide.",
    siteName: "Nelson Cañete Portfolio",
    images: [
      {
        url: "/images/avatar.webp",
        width: 1200,
        height: 630,
        alt: "Nelson Cañete - Full Stack Web Developer",
        type: "image/webp",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nelson Cañete - Full Stack Web Developer",
    description: "Experienced Full Stack Web Developer specializing in PHP Laravel, React.js, WordPress, and database development.",
    images: ["/images/avatar.webp"],
    creator: "@nelson_canete",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0F172A" },
    { media: "(prefers-color-scheme: dark)", color: "#0F172A" },
  ],
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  alternates: {
    canonical: "https://nelson-canete.dev",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Nelson Cañete",
              "jobTitle": "Full Stack Web Developer",
              "description": "Experienced Full Stack Web Developer with 10+ years specializing in PHP Laravel, React.js, WordPress, database development, and web optimization.",
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
                "https://facebook.com/nelsongabriel.canete",
                "https://www.youtube.com/@rosstarr-ngc"
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
                "Full Stack Development",
                "Python",
                "Node.js",
                "Git",
                "DevOps"
              ],
              "hasOccupation": {
                "@type": "Occupation",
                "name": "Full Stack Web Developer",
                "occupationLocation": {
                  "@type": "Country",
                  "name": "Philippines"
                },
                "skills": [
                  "PHP Laravel",
                  "React.js",
                  "WordPress",
                  "Database Development",
                  "Web Optimization",
                  "Email Integration",
                  "Python",
                  "JavaScript"
                ]
              },
              "alumniOf": [
                {
                  "@type": "EducationalOrganization",
                  "name": "University of Mindanao",
                  "description": "BS in Electrical Engineering"
                },
                {
                  "@type": "EducationalOrganization", 
                  "name": "Systems Technology Institute",
                  "description": "Diploma in Information Technology"
                }
              ],
              "worksFor": [
                {
                  "@type": "Organization",
                  "name": "Blockchain Management Corporation Pty Ltd",
                  "description": "Full Stack Developer"
                }
              ]
            })
          }}
        />

        {/* Additional SEO Meta Tags */}
        <meta name="google-site-verification" content="your-google-verification-code" />
        <meta name="msvalidate.01" content="your-bing-verification-code" />
        <meta name="yandex-verification" content="your-yandex-verification-code" />
        
        {/* Performance and Security */}
        <link rel="preload" href="/images/avatar.webp" as="image" type="image/webp" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main role="main">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}