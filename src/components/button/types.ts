export type IButtonProps = {
  btnClass?: string;
  children?: string | JSX.Element;
  className?: string;
  disabled?: boolean;
  disabledStyle?: string;
  handleButtonClick?: (event?: React.MouseEvent<HTMLElement>) => void;
  headIcon?: JSX.Element;
  isLoading?: boolean;
  label?: string;
  tailIcon?: JSX.Element;
};
