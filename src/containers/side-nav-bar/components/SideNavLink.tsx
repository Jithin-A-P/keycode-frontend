import { Link } from 'react-router-dom';

import { CaretDown } from '@icons';

import { ISideNavLinkProps } from '../type';

const SideNavLink = (props: ISideNavLinkProps) => {
  const {
    url,
    icon: Icon,
    name,
    isActive,
    showExpandedView = true,
    isNestedLink = false,
    hasNestedLinks = false,
  } = props;

  const isNestedActiveLink = isNestedLink && isActive;

  const linkStyle = () => {
    if (isNestedActiveLink) {
      return 'text-snow';
    }
    if (isActive) {
      return 'bg-gainsboro text-jaguar';
    }
    return 'text-slate-400';
  };

  const svgStyle = {
    Devices: 'path-fill-accent',
  };

  return (
    <Link
      to={url}
      className={`flex px-[14px] py-[10px] rounded-md ${
        showExpandedView ? '' : 'justify-center w-[50px]'
      }  items-center ${linkStyle()} ${
        isNestedLink && showExpandedView ? 'pl-[5px]' : ''
      }`}
    >
      {Icon && (
        <Icon
          className={`w-6 h-6 shrink-0 ${
            isActive ? svgStyle[name] || 'path-stroke-accent' : ''
          } ${showExpandedView ? 'mr-2' : ''}`}
        />
      )}
      {showExpandedView && (
        <span
          className={`whitespace-nowrap ${
            isNestedActiveLink ? 'text-snow' : ''
          }`}
        >
          {name}
        </span>
      )}
      {hasNestedLinks && isActive && showExpandedView && (
        <CaretDown className='ml-auto' />
      )}
    </Link>
  );
};

export default SideNavLink;
