import { useState, useEffect } from 'react';
import { clearCSRFToken } from '@/lib/queryClient';

export interface User {
  id: string;
  username?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  role: string;
  tenantId: string;
  isActive: boolean;
}

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for existing auth token
    const token = localStorage.getItem("auth_token");
    const userData = localStorage.getItem("auth_user");
    
    if (token && userData) {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (error) {
        localStorage.removeItem("auth_token");
        localStorage.removeItem("auth_user");
      }
    }
    
    setIsLoading(false);
  }, []);

  const logout = () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_user");
    clearCSRFToken(); // Clear CSRF token on logout
    setUser(null);
    console.log('User logged out from useAuth hook');
    // Force a page reload to ensure clean state after logout
    window.location.replace("/");
  };

  return {
    user,
    isLoading,
    isAuthenticated: !!user,
    logout
  };
}