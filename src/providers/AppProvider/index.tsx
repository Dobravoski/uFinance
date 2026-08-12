import { AuthProvider } from '@/contexts/AuthContext';
import { ToastProvider } from '@/contexts/ToastContext';
import { TransactionProvider } from '@/domains/transactions/context';
import AppBootstrap from '@/providers/AppBootstrap';

export default function AppProvider() {
  return (
    <AuthProvider>
      <ToastProvider>
        <TransactionProvider>
          <AppBootstrap />
        </TransactionProvider>
      </ToastProvider>
    </AuthProvider>
  );
}