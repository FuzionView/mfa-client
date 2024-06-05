export * from 'mfa-server/src/types';

export interface Toast {
  id: string;
  title: string;
  message?: string;
  intent?: string;
}

export enum InputType {
  Text = 'text',
  Number = 'number',
  Date = 'date',
}
