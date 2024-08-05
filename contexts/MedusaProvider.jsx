'use client';
import { QueryClient } from '@tanstack/react-query';
import { MedusaProvider } from 'medusa-react';

const queryClient = new QueryClient();

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
