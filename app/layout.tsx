import "./globals.css";
import Footer from "@/components/Footer/footer";
import Header from "@/components/Header/header";

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
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
