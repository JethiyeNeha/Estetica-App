import "./App.css";
import Appointments from "./pages/Appointments";
import Header from "./components/layouts/Header";
import Sidebar from "./components/layouts/Sidebar";
import Login from "./pages/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { AuthProvider, useAuth } from "./context/useAuth";
import { ProtectedRoute } from "./context/protectedRoute";
import type { ReactNode } from "react";

type LayoutProps = {
  children: ReactNode;
};
function Layout({ children }: LayoutProps) {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header userName="Vendor" userRole="Admin" />
        <div className="flex-1 overflow-auto bg-gray-50">{children}</div>
      </div>
    </div>
  );
}

export function LoginRedirect({ children }: LayoutProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/appointments" />;
  }

  return children;
}
function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <LoginRedirect>
                <Login />
              </LoginRedirect>
            }
          />

          <Route
            path="/appointments"
            element={
              <ProtectedRoute>
                <Layout>
                  <Appointments />
                </Layout>
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
