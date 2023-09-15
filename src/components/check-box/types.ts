export type ICheckBoxProps = {
  checkLabel: string;
  id: string;
  isChecked: boolean;
  onClick: (e: React.MouseEvent<HTMLInputElement, MouseEvent>) => void;
};
