import { AuthProvider, UserProvider, ToastProvider, ThemeProvider } from '@/contexts';
import { TransactionProvider } from '@/domains/transactions/context';
import AppBootstrap from '@/providers/AppBootstrap';

export default function AppProvider() {
  return (
    <ThemeProvider>
      <AuthProvider>
        <UserProvider>
          <ToastProvider>
            <TransactionProvider>
              <AppBootstrap />
            </TransactionProvider>
          </ToastProvider>
        </UserProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}