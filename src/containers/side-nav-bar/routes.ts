import RoutePaths from '@routes/RoutesPath';

import { Devices, Users } from '@icons';

export const routes = [
  {
    label: 'Catalogs',
    url: RoutePaths.CATALOGS,
    icon: Users,
  },
  {
    label: 'Campaigns',
    url: RoutePaths.CAMPAIGNS,
    icon: Devices,
  },
];
