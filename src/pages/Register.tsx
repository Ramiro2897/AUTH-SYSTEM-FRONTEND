import { useEffect, useState } from "react";
import { registerRequest } from "../api/auth.api";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await registerRequest(email, password);
      setSuccess("Usuario creado correctamente");
      setEmail("");
      setPassword("");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
   
  useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess(null);
    }, 10000); // 10 segundos

    return () => clearTimeout(timer);
  }
}, [success]);

  return (
  <div className="auth-container">
    <form className="auth-card" onSubmit={handleSubmit}>
      <h2>Registro</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {success && (
        <div className="form-success">
          {success}
        </div>
      )}

      {error && <p className="error">{error}</p>}

      <button disabled={loading}>
        {loading ? "Creando..." : "Registrarse"}
      </button>

      <p className="auth-footer">
        ¿Ya tienes cuenta? <a href="/login">Inicia sesión</a>
      </p>
    </form>
  </div>
);

};

export default Register;
