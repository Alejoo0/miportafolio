/** 
 *  @copyright 2023 Damian Cortes
 * license: Apache License 2.0
 */

/** 
 *  NOde modules  
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/** 
 * Components
 */
import App from './App.jsx';
import 'lenis/dist/lenis.css';

/**
 * CSS link
*/
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
