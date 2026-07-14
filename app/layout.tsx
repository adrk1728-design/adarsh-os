import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AdarshOS — Interactive AI Portfolio",
  description: "Talk to Adarsh Shukla's AI representative and explore his work, skills, projects, and engineering approach."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
