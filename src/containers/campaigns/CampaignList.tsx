import { CustomTable } from '@components';
import { useGetCampaignsQuery } from '@services/api';

const campaignHeaders = ['Name', 'Duration', 'Status', 'Price'];

const CampaignList = () => {
  const { data } = useGetCampaignsQuery('charmander');
  return (
    <div>
      <div className='text-xl font-semibold mb-[14px] text-jaguar'>Campaigns</div>
      <div
        className='overflow-y-auto rounded-lg'
        style={{ maxHeight: 'calc(100vh - 281px)' }}
      >
        <CustomTable headers={campaignHeaders} data={[
          {id: 1, name: 'KFC Onam Campaign', duration: '01/09/2023 - 01/10/2023', status: 'Active', price: 'Rs 8500' },
          {id: 2, name: 'KFC Onam Campaign', duration: '01/09/2023 - 01/10/2023', status: 'Active', price: 'Rs 8500' },
          {id: 3, name: 'KFC Onam Campaign', duration: '01/09/2023 - 01/10/2023', status: 'Active', price: 'Rs 8500' },
          {id: 4, name: 'KFC Onam Campaign', duration: '01/09/2023 - 01/10/2023', status: 'Active', price: 'Rs 8500' },
          {id: 5, name: 'KFC Onam Campaign', duration: '01/09/2023 - 01/10/2023', status: 'Active', price: 'Rs 8500' },
        ]} />
      </div>
    </div>
  );
};

export default CampaignList;
