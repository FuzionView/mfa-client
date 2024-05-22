import { Toast } from '@types';
import { create } from 'zustand';
import { combine } from 'zustand/middleware';
import { uniqueId } from 'lodash';

interface State {
  toasts: Toast[];
}

const INITIAL_STATE: State = {
  toasts: [],
};

export const useStore = create(
  combine(INITIAL_STATE, (set) => ({
    addToast: (toast: Omit<Toast, 'id'>) =>
      set((state) => {
        const toastWithId = {
          ...toast,
          id: uniqueId(),
        };
        return { toasts: [...state.toasts, toastWithId] };
      }),
  })),
);
