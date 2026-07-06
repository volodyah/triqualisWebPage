import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Manrope } from "next/font/google";
import Script from "next/script";
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

// Clean geometric face used only for the brand wordmark.
const logoFace = Manrope({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-logo-face",
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
      className={`${inter.variable} ${jetbrainsMono.variable} ${logoFace.variable}`}
    >
      <body className="bg-white font-sans text-slate-900">
        {children}
        {/* matelso Web Mediation Platform — communication bubbles */}
        <Script id="matelso-wmp" strategy="afterInteractive">
          {`(function (w, d, s, l, o) {
            w[l] = w[l] || [];
            w[l].push({ cmd: 'start', o: o });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s);
            j.async = true;
            j.src = 'https://cdn.platform.matelso.com/wmp.js?b=' + Date.now();
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'wmpDl', {
            ownerId: '169cfafb-13aa-49a8-9dcd-c342eda03358',
            pluginId: 'bfe571ce-e326-4af5-8c4b-0e6d43864959',
            technical: false,
            marketing: false
          });`}
        </Script>
      </body>
    </html>
  );
}
