import { createContext } from 'react';

// Separate context to keep fast-refresh happy (file only exports a value, not a component)
export const AuthContext = createContext(null);
