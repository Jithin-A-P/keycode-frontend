import { CustomTable } from '@components';
import { useGetCampaignsQuery } from '@services/api';

const campaignHeaders = ['Name', 'Duration', 'Status', 'Price'];

const CampaignList = () => {
  const { data: campaignsResponse } = useGetCampaignsQuery('');
  const campaigns = campaignsResponse?.data;

  return (
    <div>
      <div className='text-xl font-semibold mb-[14px] text-jaguar'>Campaigns</div>
      <div
        className='overflow-y-auto rounded-lg'
        style={{ maxHeight: 'calc(100vh - 281px)' }}
      >
        {campaigns && <CustomTable headers={campaignHeaders} data={campaigns} />}
      </div>
    </div>
  );
};

export default CampaignList;
