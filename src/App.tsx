import { AuthProvider } from "./auth/AuthContext";
import AppRouter from "./router";

function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}

export default App;

