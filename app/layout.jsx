import "../src/index.css";

export const metadata = {
  title: "Periodic Table",
  description:
    "A futuristic interactive periodic table of the chemical elements.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
