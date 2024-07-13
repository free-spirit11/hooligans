import './globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from '@/components/Footer';
import { ShoppingBagProvider } from '@/contexts/ShoppingBagContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MedusaReactProvider from '@/contexts/MedusaProvider';

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
      <MedusaReactProvider>
        <html lang='en'>
          <body>
            <main> {children}</main>
            <Footer />
            <ToastContainer position='bottom-center' />
          </body>
        </html>
      </MedusaReactProvider>
    </ShoppingBagProvider>
  );
}
