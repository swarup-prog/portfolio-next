import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Swarup - Portfolio",
  description:
    "Welcome to my Portfolio! Here, you can explore a curated showcase of my work, achievements, and projects. This portfolio reflects my journey, skills, and passions across various domains, including Software Development. Dive into detailed case studies, view a gallery of selected works, and read about the stories behind each project. Whether you're a potential client, collaborator, or just an enthusiast, I invite you to discover the creativity and dedication I bring to every endeavor. Feel free to contact me through the provided links for any inquiries or collaboration opportunities. Thank you for visiting!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
