import { createContext, useState, useContext } from 'react';
import { User } from '../../types';

type ContextType  = {
  authUser: User;
  updateAuthUser: (authState: User) => void;
};

interface Props {
  children: React.ReactNode;
}
const initdata: User = {
  id: 0,
  name: '',
  email: '',
  calorieLog: null,
}

export const AuthContext = createContext<ContextType>({} as ContextType);

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [authUser, setAuthUser] = useState<User>(initdata);

  const updateAuthUser = (authUser: User) => {
    setAuthUser(authUser);
  };

  return (
    <AuthContext.Provider value={{ authUser, updateAuthUser }}>
      {children}
    </AuthContext.Provider>
  );
};