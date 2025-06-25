'use client';

import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20, overflow: "hidden" }}
      animate={{ opacity: 1, y: 0, overflow: "hidden" }}
      // exit={{ opacity: 0, y: -20, overflow: "inherit" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div className="justify-items-center items-center gap-16 grid grid-rows-[20px_1fr_20px] p-8 sm:p-20 pb-20 min-h-screen font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col items-center sm:items-start gap-[32px] row-start-2">
          <h1 className="font-bold text-3xl">About Us</h1>
          <p className="text-lg">
            Welcome to our application! We are dedicated to providing the best user experience.
          </p>
        </main>
        <footer className="flex flex-wrap justify-center items-center gap-[24px] row-start-3">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn more about us
          </a>
        </footer>
      </div>
    </motion.div>
  );
}