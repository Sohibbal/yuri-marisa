import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Yuri Marisa | Portofolio Riset & Pembangunan Daerah",
  description: "Portofolio akademik, riset ekonometri, pengalaman kebijakan publik di BAPPEDA Bengkalis, dan organisasi Yuri Marisa, Mahasiswa Ekonomi Pembangunan Universitas Riau.",
  keywords: ["Yuri Marisa", "Ekonomi Pembangunan", "Universitas Riau", "BAPPEDA Bengkalis", "Riset Ekonometri", "EViews"],
  authors: [{ name: "Yuri Marisa" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('yuri_theme');
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                } else {
                  document.documentElement.classList.remove('dark');
                }
              } catch (_) {}
            `,
          }}
        />
      </head>
      <body className={`${plusJakartaSans.variable} font-sans antialiased selection:bg-accent-soft selection:text-text-primary`}>
        {children}
      </body>
    </html>
  );
}
