import * as T from '@radix-ui/react-toast';

import { useStore } from '../../store';
import { ToastComponent } from './ToastComponent';

import './Toast.scss';

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
