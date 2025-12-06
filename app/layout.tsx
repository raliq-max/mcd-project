import type { Metadata } from "next";
import "./styles/globals.css";


export const metadata: Metadata = {
  title: "McDonald's",
  description: "McDonald's - I'm Lovin' It",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
