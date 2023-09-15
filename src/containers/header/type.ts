export type IHeaderProps = {
  isBarExpanded: boolean;
  toggleSideNavBar?: VoidFunction;
};

export interface IPageDescription {
  path: string;
  pageName: string;
}

export type BreadcrumbState = {
  pages: IPageDescription[];
};
