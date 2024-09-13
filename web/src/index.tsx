import React, { StrictMode } from 'react';
import Landing from './pages/Landing';
import './globals/reset.scss';
import { createRoot } from 'react-dom/client';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Landing />
  </StrictMode>,
);
