import "../globals.css";
import {NextIntlClientProvider} from 'next-intl';

export const metadata = {
  title: "Portfolio Rafael",
  description: "Rafael front-end developer",
};

export default async function RootLayout({children}) {

  return (
    <html>
      <body>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>   
      </body>
    </html>
  );
}
