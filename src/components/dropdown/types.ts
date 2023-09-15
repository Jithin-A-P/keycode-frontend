export type OptionType = {
  label: string;
  value: string;
  subLabel?: string;
  element?: JSX.Element;
};

export type IMultiSelectProps = {
  fetchNextList: () => void;
  needInfiniteScroll: boolean;
  needSearch?: boolean;
  onSelectItems: (items: OptionType[]) => void;
  options: OptionType[];
  placeholder: string;
  selectedItems: OptionType[];
  setSuggestionValue: (val: string) => void;
  suggestionValue: string;
};

export type ISelectProps = {
  fetchNextList?: () => void;
  isDisabled?: boolean;
  isLoading?: boolean;
  needInfiniteScroll: boolean;
  needSearch?: boolean;
  onSelectItems: (items: OptionType) => void;
  options: OptionType[];
  placeholder: string;
  selectedItem: OptionType;
  setSearchTerm?: (val: string) => void;
  searchTerm?: string;
  dropdownClass?: string;
};
