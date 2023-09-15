type ITab = {
  id: number;
  label: string;
};

export type ITabProps = {
  tabs: ITab[];
  activeTab: number;
  onSelectTab?: (index: number) => void;
};
