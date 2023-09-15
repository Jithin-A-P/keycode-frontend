export interface IPopupButton {
  text: string;
  type: 'primary' | 'default';
  disabled?: boolean;
  isLoading?: boolean;
}
export interface IPopupProps {
  isOpen?: boolean;
  onClose: (btn?: IPopupButton) => void;
  children?: React.ReactNode;
  title?: string | React.ReactElement;
  buttons?: IPopupButton[];
  showClose?: boolean;
  width?: number;
  description?: string;
  isLoading?: boolean;
}
