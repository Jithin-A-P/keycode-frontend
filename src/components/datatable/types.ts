import { FunctionComponent, SVGProps } from 'react';

export type DisplayValueType = string | number | boolean | React.ReactElement;

export type IAction = {
  id: number;
  action: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
};

export interface IColumn<
  TData,
  TType extends DisplayValueType = React.ReactElement | string
> {
  includeInSearch?: boolean;
  onClick?: (row: TData, col: IColumn<TData, TType>) => void;
  selector?: (data: TData) => TType;
  actions?: IAction[];
  title: string;
  width?: number;
  needClipBoard?: boolean;
  isLink?: boolean;
  showIcon?: boolean;
  className?: string;
  type?: 'addOnRow' | 'normal';
  showMoreText?: string;
  showLessText?: string;
}

export interface IDataTableProps<T> {
  columns: IColumn<T, DisplayValueType>[];
  data?: T[];
  emptyRecordsMessage?: string;
  filter?: (data: T, query: string) => boolean;
  isLoading: boolean;
  handleRowActions?: (row: T, action?: string) => void;
  searchQuery?: string;
}

export type DataTableComponent = <T>(
  props: IDataTableProps<T>
) => React.ReactElement;
