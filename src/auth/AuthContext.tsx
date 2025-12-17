import { createContext, useContext, useEffect, useState } from "react";
import { meRequest, refreshRequest as apiRefreshRequest } from "../api/auth.api";



type User = {
  id: string;
  email: string;
};

type AuthContextType = {
  user: User | null;
  loading: boolean;
  setUser: (user: User | null) => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const checkSession = async () => {
    try {
      let data = await meRequest(); // primer intento
      if (!data) {
        // intenta refresh si no hay sesión activa
        data = await apiRefreshRequest();
      }
      if (data) setUser(data);
    } catch (err) {
      setUser(null);
    } finally {
      setLoading(false); // solo setea loading en false cuando termina todo
    }
  };

  checkSession();
}, []);

  return (
    <AuthContext.Provider value={{ user, loading, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside AuthProvider");
  }
  return ctx;
};


