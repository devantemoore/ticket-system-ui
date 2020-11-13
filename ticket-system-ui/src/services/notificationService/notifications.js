import {NotificationManager} from 'react-notifications';

const createNotification = (type) => {
    return () => {
      switch (type) {
        case 'info':
          NotificationManager.info('Info message');
          break;
        case 'success':
          NotificationManager.success('Your ticket submitted successfully!', 'Ticket Submitted');
          console.log('made it to noti');
          break;
        case 'warning':
          NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
          break;
        case 'error':
          NotificationManager.error('Error message', 'Click me!', 5000, () => {
            alert('callback');
          });
          break;
      }
      console.log('did not make it to noti');
    };
  };

export default { createNotification };