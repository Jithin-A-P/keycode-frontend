export type NotificationType = {
  id: string | number;
  message: string;
  type: 'error' | 'success';
  position?: number;
};
