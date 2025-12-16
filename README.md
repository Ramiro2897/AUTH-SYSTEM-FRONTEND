
# 🔐 Auth System – Frontend

Frontend de un sistema de autenticación moderno y seguro, construido con **React + TypeScript + Vite**, que consume una API backend propia y maneja sesiones mediante **cookies HTTP-only con refresh automático**, similar al flujo de autenticación de Google o Facebook.

---

## 🚀 Tecnologías usadas

- **React 18**
- **TypeScript**
- **Vite**
- **React Router DOM**
- **Context API**
- **Fetch API**
- **CSS puro (custom UI)**

---

## 📂 Estructura del proyecto

```bash
src/
├── api/
│   └── auth.api.ts          # Llamadas HTTP al backend (login, register, me, refresh, logout)
├── auth/
│   ├── AuthContext.tsx      # Contexto global de autenticación
│   ├── ProtectedRoute.tsx  # Protege rutas privadas
│   ├── PublicRoute.tsx     # Evita acceso a login/register si hay sesión
│   └── useAuth.ts           # Hook personalizado
├── components/
│   └── LoginForm.tsx
├── pages/
│   ├── Login.tsx
│   ├── Register.tsx
│   └── Dashboard.tsx
├── router/
│   └── index.tsx            # Definición de rutas
├── types/
│   └── auth.ts              # Tipos compartidos
├── App.tsx
├── main.tsx
└── index.css
🔐 Flujo de autenticación

Este frontend implementa un sistema de sesión seguro basado en cookies:

El usuario inicia sesión o se registra

El backend devuelve una cookie HTTP-only

El frontend:

Valida la sesión con /auth/me

Si es necesario, renueva la sesión con /auth/refresh

El estado del usuario se guarda en AuthContext

Las rutas se protegen usando:

ProtectedRoute

PublicRoute

✅ El usuario no se desloguea al recargar la página
✅ Funciona correctamente en múltiples pestañas
✅ No usa localStorage para tokens (más seguro)

🧠 AuthContext

El contexto de autenticación maneja:

Usuario autenticado

Estado de carga (loading)

Verificación automática de sesión al cargar la app

const { user, loading, setUser } = useAuth();


Mientras loading === true, la app espera antes de redirigir, evitando falsos logout al recargar.

🔁 Refresh automático de sesión

Si la cookie está por expirar:

Se llama automáticamente a /auth/refresh

La sesión se renueva sin que el usuario note nada

Si la sesión expiró completamente:

Se redirige al login

🛣️ Rutas
Ruta	Tipo	Descripción
/login	Pública	Login de usuario
/register	Pública	Registro de usuario
/dashboard	Protegida	Vista privada del usuario logueado
⚙️ Variables de entorno

Crear un archivo .env en la raíz del frontend:

VITE_API_URL=http://localhost:3000


⚠️ No subir este archivo al repositorio

▶️ Ejecutar el proyecto
npm install
npm run dev


La aplicación estará disponible en:

http://localhost:5173

🔒 Seguridad

Cookies HTTP-only

Refresh automático

Rutas protegidas

Rate limit aplicado en backend

No exposición de tokens en el cliente

📌 Notas

Este frontend depende del backend para funcionar correctamente

El backend debe estar corriendo y aceptar cookies (credentials: "include")

📄 Licencia

Proyecto de uso educativo y personal.
