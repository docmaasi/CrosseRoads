import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { Toaster } from 'sonner';
import './index.css';

const CareerPathfinder = lazy(() => import('./pages/CareerPathfinder'));
const CollegePlanner = lazy(() => import('./pages/CollegePlanner'));
const ParentRoadmap = lazy(() => import('./pages/ParentRoadmap'));
const Wellness = lazy(() => import('./pages/Wellness'));
const Guides = lazy(() => import('./pages/Guides'));

function Fallback() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#faf3e8] text-stone-500">
      Loading…
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/CareerPathfinder" replace />} />
          <Route path="/CareerPathfinder" element={<CareerPathfinder />} />
          <Route path="/CollegePlanner" element={<CollegePlanner />} />
          <Route path="/ParentRoadmap" element={<ParentRoadmap />} />
          <Route path="/Wellness" element={<Wellness />} />
          <Route path="/Guides" element={<Guides />} />
          <Route path="/Guides/:slug" element={<Guides />} />
          <Route path="*" element={<Navigate to="/CareerPathfinder" replace />} />
        </Routes>
      </Suspense>
      <Toaster position="top-center" />
    </BrowserRouter>
  </React.StrictMode>,
);
