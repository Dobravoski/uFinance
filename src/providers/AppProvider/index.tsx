import { AuthProvider } from "@/contexts/AuthContext";
import AppBootstrap from "@/providers/AppBootstrap";

export default function AppProvider() {
  return (
    <AuthProvider>
      <AppBootstrap/>
    </AuthProvider>
  );
}