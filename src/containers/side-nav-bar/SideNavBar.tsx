import { Link, useLocation } from 'react-router-dom';

import { Logout } from '@icons';
import RoutePaths from '@routes/RoutesPath';

import { routes } from './routes';
import { ISideNavBarProps } from './type';
import SideNavLink from './components/SideNavLink';

const SideNavBar = (props: ISideNavBarProps) => {
  const { isBarExpanded } = props;


  const { pathname } = useLocation();

  const checkIsActivePath = (pathToCheck: string, currentPath: string) => {
    const parentPath = currentPath; // TO DO - To be kept until all paths are brought under breadcrumbs
    return parentPath.startsWith(pathToCheck);
  };

  return (
    <nav
      className={`${
        isBarExpanded
          ? 'w-[var(--expanded-sidenav-width)]'
          : 'w-[var(--collapsed-sidenav-width)]'
      } bg-jaguar h-screen float-left 
      border-r border-r-grey-border transition-all duration-[var(--sidenav-animation-duration)] 
      motion-reduce:transition-none fixed top-0 left-0`}
    >
      <div className='flex items-center border-b-2 border-b-black justify-center w-full h-20'>
        {isBarExpanded && (
          <Link to={RoutePaths.HOME}>
            <span className='text-white text-[28px]'>AdSure</span>
          </Link>
        )}
      </div>
      <div className='py-[32px] px-4'>
        {routes.map(({ label, url, icon }) => {
          const isActiveRootPath = checkIsActivePath(url, pathname);
          return (
            <div className='mb-3' key={url}>
              <SideNavLink
                url={url}
                name={label}
                icon={icon}
                isActive={isActiveRootPath}
                showExpandedView={isBarExpanded}
              />
            </div>
          );
        })}
      </div>
      <div
        className='absolute right-0 bottom-0 w-full h-[68px] items-center flex pl-[30px] cursor-pointer border-t-2 border-t-black'
        role='presentation'
      >
        <Logout />
        {isBarExpanded && (
          <span className='text-snow text-base px-[14px]'>Logout</span>
        )}
      </div>
    </nav>
  );
};

export default SideNavBar;
