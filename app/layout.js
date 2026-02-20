import "./globals.css";

export const metadata = {
  title: "Portfolio Rafael",
  description: "Rafael front-end developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}
      </body>
    </html>
  );
}
