import {NotificationManager} from 'react-notifications';

export const infoNotification = (message) => {
  NotificationManager.info(message);
};

export const successNotification = (message, title) => {
  NotificationManager.success(message, title);
};

export const warningNotification = (message, title, timeout) => {
  NotificationManager.warning(message, title, timeout);
};

export const errorNotification = (message, title, timeout) => {
  NotificationManager.error(message, title, timeout);
};