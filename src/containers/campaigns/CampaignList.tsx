import {CustomTable, HeaderWithButton } from '@components';
import { Button } from '@mui/material';
import { useGetCampaignsQuery } from '@services/api';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom';
import RoutePaths from '@routes/RoutesPath';

const campaignHeaders = ['Name', 'Duration', 'Status', 'Price'];

const CampaignList = (props) => {

  const { data: campaignsResponse } = useGetCampaignsQuery('');
  const campaigns = campaignsResponse?.data;

  const navigate = useNavigate();

  return (
    <div>
      <HeaderWithButton
        primaryButtonText='Create'
        onClickPrimaryButton={() => navigate(RoutePaths.CREATE_CAMPAIGN)}
        title='Campaigns'
        primaryIcon={<AddIcon />}
      />
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
