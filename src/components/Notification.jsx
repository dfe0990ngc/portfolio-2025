// components/Notification.jsx
import React, { useEffect } from 'react';
import { useNotification } from '../hooks/useNotification';

const NotificationItem = ({ notification, onRemove }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(notification.id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [notification.id, onRemove]);

  const getNotificationClass = () => {
    switch (notification.type) {
      case 'success':
        return 'notification-success';
      case 'error':
        return 'notification-error';
      case 'warning':
        return 'notification-warning';
      default:
        return 'notification-info';
    }
  };

  return (
    <div
      className={`notification ${getNotificationClass()}`}
      onClick={() => onRemove(notification.id)}
      style={{
        animation: 'slideInRight 0.3s ease',
        cursor: 'pointer'
      }}
    >
      <div className="notification-content">
        {notification.type === 'success' && <i className="fas fa-check-circle"></i>}
        {notification.type === 'error' && <i className="fas fa-exclamation-circle"></i>}
        {notification.type === 'warning' && <i className="fas fa-exclamation-triangle"></i>}
        {notification.type === 'info' && <i className="fas fa-info-circle"></i>}
        <span>{notification.message}</span>
      </div>
    </div>
  );
};

const Notification = () => {
  const { notifications, removeNotification } = useNotification();

  if (notifications.length === 0) return null;

  return (
    <div className="notification-container">
      {notifications.map(notification => (
        <NotificationItem
          key={notification.id}
          notification={notification}
          onRemove={removeNotification}
        />
      ))}
    </div>
  );
};

export default Notification;