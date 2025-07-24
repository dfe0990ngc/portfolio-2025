import React, { useEffect } from 'react';
import Home from './pages/Home';
import { ScrollProvider } from './hooks/useScroll';
import { ThemeProvider } from './hooks/useTheme';
import { NotificationProvider } from './hooks/useNotification';

function App() {
  useEffect(() => {
    // Add loaded class to body when app mounts
    document.body.classList.add('loaded');
    
    // Initialize any global styles or effects
    const initializeApp = () => {
      // Add custom cursor for desktop
      if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.className = 'custom-cursor';
        cursor.style.cssText = `
          position: fixed;
          width: 20px;
          height: 20px;
          background: var(--accent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: transform 0.1s ease;
          opacity: 0;
        `;
        document.body.appendChild(cursor);
        
        const handleMouseMove = (e) => {
          cursor.style.left = e.clientX - 10 + 'px';
          cursor.style.top = e.clientY - 10 + 'px';
          cursor.style.opacity = '0.5';
        };
        
        const handleMouseEnter = () => cursor.style.opacity = '0.5';
        const handleMouseLeave = () => cursor.style.opacity = '0';
        
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseenter', handleMouseEnter);
        document.addEventListener('mouseleave', handleMouseLeave);
        
        // Scale cursor on hover
        const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-item');
        hoverElements.forEach(el => {
          el.addEventListener('mouseenter', () => cursor.style.transform = 'scale(1.5)');
          el.addEventListener('mouseleave', () => cursor.style.transform = 'scale(1)');
        });
        
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseenter', handleMouseEnter);
          document.removeEventListener('mouseleave', handleMouseLeave);
          if (cursor.parentNode) {
            cursor.parentNode.removeChild(cursor);
          }
        };
      }
    };
    
    const cleanup = initializeApp();
    
    return () => {
      if (cleanup) cleanup();
    };
  }, []);

  return (
    <ThemeProvider>
      <NotificationProvider>
        <ScrollProvider>
          <Home />
        </ScrollProvider>
      </NotificationProvider>
    </ThemeProvider>
  );
}

export default App;