import "./globals.css";

export const metadata = {
  title: "Holdano B.V.",
  description:
    "Your strategic partner in producing the highest quality electronics",
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
