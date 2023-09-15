import { SVGComponent } from '../../types/common';

export type ISideNavBarProps = {
  isBarExpanded: boolean;
};

export type ISideNavLinkProps = {
  url: string;
  icon?: SVGComponent;
  name: string;
  isActive: boolean;
  showExpandedView?: boolean;
  isNestedLink?: boolean;
  hasNestedLinks?: boolean;
};
