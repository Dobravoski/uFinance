import { AuthProvider, UserProvider, ToastProvider, ThemeProvider, LanguageProvider } from '@/contexts';
import { TransactionProvider } from '@/domains/transactions/context';
import AppBootstrap from '@/providers/AppBootstrap';

export default function AppProvider() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <UserProvider>
            <ToastProvider>
              <TransactionProvider>
                <AppBootstrap />
              </TransactionProvider>
            </ToastProvider>
          </UserProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}