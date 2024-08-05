'use client';
import { CustomCartProvider } from '@/contexts/CartContext';
import MedusaReactProvider from '@/contexts/MedusaProvider';
import { CartProvider } from 'medusa-react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ClientProviders = ({ children }) => {
  return (
    <MedusaReactProvider>
      <CartProvider>
        <CustomCartProvider>
          {children}
          <ToastContainer position='bottom-center' />
        </CustomCartProvider>
      </CartProvider>
    </MedusaReactProvider>
  );
};

export default ClientProviders;
