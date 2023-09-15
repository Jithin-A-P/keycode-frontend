export type ISearchInput = {
  handleClear: () => void;
  onChange: (val: string) => void;
  onKeyPress?: (key: string) => void;
  placeHolderText: string;
  showCloseBtn: boolean;
  testId?: string;
  value: string;
};
