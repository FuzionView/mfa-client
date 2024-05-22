import * as T from '@radix-ui/react-toast';

import './Toast.scss';
import { useStore } from '../../store';
import { ToastComponent } from './ToastComponent';

export const ToastContainer = () => {
  const messages = useStore((state) => state.toasts);

  return (
    <T.Provider swipeDirection="right">
      {messages.map((message) => (
        <ToastComponent {...message} key={message.id} />
      ))}
      <T.Viewport className={`toast viewport`} />
    </T.Provider>
  );
};
