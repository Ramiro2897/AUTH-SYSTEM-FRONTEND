import { useAuth } from "../auth/AuthContext";
import { logoutRequest } from "../api/auth.api";

const Dashboard = () => {
  const { user, setUser } = useAuth();

  const handleLogout = async () => {
    await logoutRequest();
    setUser(null);
  };

  const formatEmailName = (email?: string) => {
  if (!email) return "";

  const name = email.split("@")[0]; // parte antes del @
  return name.length > 10 ? `${name.slice(0, 10)}...` : name;
};


  const year = new Date().getFullYear();

  return (
    <div className="dashboard-container">
      {/* Header */}
      <header className="dashboard-header">
        <h2>{formatEmailName(user?.email)}</h2>
        <button onClick={handleLogout}>Salir</button>
      </header>

      {/* Bloques dinámicos */}
      <section className="dashboard-grid">
        <div className="dashboard-card">
          <span className="card-label">Estado</span>
          <h3>Sesión activa</h3>
          <div className="card-indicator active"></div>
        </div>

        <div className="dashboard-card">
          <span className="card-label">Acceso</span>
          <h3>Autenticado</h3>
          <div className="card-indicator"></div>
        </div>

        <div className="dashboard-card">
          <span className="card-label">Sistema</span>
          <h3>Operativo</h3>
          <div className="card-indicator"></div>
        </div>

        <div className="dashboard-card wide">
          <span className="card-label">Actividad</span>
          <div className="activity-list">
            <div className="activity-item"></div>
            <div className="activity-item"></div>
            <div className="activity-item"></div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="dashboard-footer">
        Creado por <strong>Ramiro González</strong> · © {year}
      </footer>
    </div>
  );
};

export default Dashboard;
