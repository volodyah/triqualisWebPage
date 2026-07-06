import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Shadows_Into_Light } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

// Handwritten face used only for the brand wordmark, matching the triqualis logo.
const logoScript = Shadows_Into_Light({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-logo-script",
  display: "swap",
});

export const metadata: Metadata = {
  title: "triqualis — Engineering Your Success Story",
  description:
    "triqualis is an elite software engineering firm in Yerevan, Armenia — bridging high-performance C/C++ and embedded systems with modern cloud, web, and SaaS platforms for global enterprises.",
  keywords: [
    "IT outsourcing",
    "C++ development",
    "embedded systems",
    "QT QML",
    "SaaS engineering",
    "team augmentation",
    "Armenia software development",
  ],
  openGraph: {
    title: "triqualis — Engineering Your Success Story",
    description:
      "Elite engineering hub bridging low-level C/C++ systems with modern cloud and SaaS architectures.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} ${logoScript.variable}`}
    >
      <body className="bg-white font-sans text-slate-900">{children}</body>
    </html>
  );
}
