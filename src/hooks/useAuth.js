import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [user, setUser] = useState(getUserFromLocalStorage());
  const navigate = useNavigate();

  function getUserFromLocalStorage() {
    const name = localStorage.getItem('name');
    const age = localStorage.getItem('age');
    return name && age ? { name, age } : null;
  }

  const login = (name, age) => {
    if (name && age) {
      localStorage.setItem('name', name);
      localStorage.setItem('age', age);
      setUser({ name, age });
      return { success: true, message: 'Login successful' };
    } else {
      return { success: false, message: 'Invalid input' };
    }
  };

  const logout = () => {
    localStorage.removeItem('name');
    localStorage.removeItem('age');
    setUser(null);
    navigate('/login');
  };

  return { user, login, logout };
};

export default useAuth;