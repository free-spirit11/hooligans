import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '@/components/Footer';
import { ShoppingBagProvider } from '@/contexts/ShoppingBagContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MedusaReactProvider from '@/contexts/MedusaProvider';
import ClientProviders from '@/providers/ClientProviders';

export const metadata = {
  title: 'Hooligans',
  description: 'Best eyewear in NYC',
  icons: {
    icon: '/favicon/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <ShoppingBagProvider>
      <html lang='en'>
        <body>
          <ClientProviders>
            <main> {children}</main>
            <ToastContainer position='bottom-center' />
          </ClientProviders>
        </body>
      </html>
    </ShoppingBagProvider>
  );
}
