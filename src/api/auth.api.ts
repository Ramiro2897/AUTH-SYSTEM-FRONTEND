const API_URL = import.meta.env.VITE_API_URL;

// envia los datos para el login
export const loginRequest = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include", // 🔐 cookies
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    const data = await res.json();
    console.log(data, 'el errorrr')
    throw new Error(data?.errors.general || "Error al iniciar sesión");
  }

  return res.json();
};

// registra un usuario
export const registerRequest = async (email: string, password: string) => {
  const res = await fetch(`${API_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.errors.general || "Error en registro");
  }

  return data;
};

// validar sesion
export const meRequest = async () => {
  const res = await fetch(`${API_URL}/auth/me`, {
    credentials: "include",
  });

  if (!res.ok) return null;
  return res.json();
};

// cerrar la sesion
export const logoutRequest = async () => {
  await fetch(`${API_URL}/auth/logout`, {
    method: "POST",
    credentials: "include",
  });
};

// refrescar la sesion
export const refreshRequest = async () => {
  const res = await fetch(`${API_URL}/auth/refresh`, {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) return null;
  return res.json();
};


