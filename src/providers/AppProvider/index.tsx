import { AuthProvider } from "@/contexts/AuthContext";
import { TransactionProvider } from "@/domains/transactions/context";
import AppBootstrap from "@/providers/AppBootstrap";

export default function AppProvider() {
  return (
    <AuthProvider>
      <TransactionProvider>
          <AppBootstrap />
      </TransactionProvider>
    </AuthProvider>
  );
}