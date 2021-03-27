import React from 'react';
import { useAuth } from '../context/auth';
import AuthRoutes from './auth.routes';
import MainRoutes from './main.routes';

export default function Routes() {
	const { isAuthenticated, loading } = useAuth();

	return isAuthenticated ? <MainRoutes /> : <AuthRoutes />;
}
