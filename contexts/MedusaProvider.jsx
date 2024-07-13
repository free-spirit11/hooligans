'use client';
import { QueryClient } from '@tanstack/react-query';
import { MedusaProvider } from 'medusa-react';
// import Medusa from '@medusajs/medusa-js';

const queryClient = new QueryClient();

// const medusaClient = new Medusa({
//   baseUrl: process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL, // Replace with your Medusa backend URL
//   maxRetries: 3,
// });

const MedusaReactProvider = ({ children }) => {
  return (
    <MedusaProvider
      queryClientProviderProps={{ client: queryClient }}
      baseUrl={process.env.NEXT_PUBLIC_MEDUSA_BACKEND_URL}
      publishableApiKey={process.env.MEDUSA_PUBLISHABLE_API_KEY}
      maxRetries={2}
    >
      {children}
    </MedusaProvider>
  );
};

export default MedusaReactProvider;
