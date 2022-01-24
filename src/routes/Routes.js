import React from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { LoginScreen } from '../components/login/LoginScreen';

import { DashboardRoutes } from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/login" element={
                    <PublicRoute>
                        <LoginScreen />
                    </PublicRoute>
                } />
                <Route path="/*" element={
                    <PrivateRoutes>
                        <DashboardRoutes />
                    </PrivateRoutes>

                } />
                {/* <Route path="/*" element={<DashboardRoutes />} /> */}

            </Routes>
        </BrowserRouter>

    )
}