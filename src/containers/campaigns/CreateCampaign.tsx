/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable global-require */
import {
  CardMedia,
  MenuItem,
  TextField,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import RoutePaths from '@routes/RoutesPath';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import ImageIcon from '@mui/icons-material/Image';
import Modal from '@mui/material/Modal';
import { useState } from 'react';
import { CardGrid, HeaderWithButton } from '@components';
import { useGetCatalogsQuery } from '@services/api';

const CreateCampaign = () => {
  const [type, setType] = useState('Time slot');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState({ url: null });
  const [frequency, setFrequency] = useState('');
  const [campaignName, setCampaignName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const { data: catalogsResponse } = useGetCatalogsQuery('');
  const catalogs = catalogsResponse?.data;

  const navigate = useNavigate();

  const onChangeType = (event) => {
    setType(event.target.value);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const onChangeCampaignName = (event) => {
    setCampaignName(event.target.value);
  };

  const onChangeFrequency = (event) => {
    setFrequency(event.target.value);
  };

  const classNames = {
    label: 'w-[150px] text-m font-semibold text-jaguar ml-4',
    row: 'flex items-center mt-5',
  };

  const onSelectCampaign = (item) => {
    setSelectedCampaign(item);
    setIsModalOpen(false);
  };

  const onChangeStartDate = (event) => {
    setStartDate(event.target.value);
  };

  const onChangeEndDate = (event) => {
    setEndDate(event.target.value);
  };

  const isVideo = (url) => /\.(mp4|mpg|mpeg4|webp|avi|mkv)$/.test(url);

  return (
    <div>
      <HeaderWithButton
        primaryButtonText='Next'
        onClickPrimaryButton={() => navigate(RoutePaths.CREATE_CAMPAIGN)}
        title='Add a new Campaign'
        primaryIcon={<NavigateNextIcon />}
      />
      <div className={classNames.row}>
        <div className={classNames.label}>Name</div>
        <TextField
          style={{ width: '250px' }}
          size='small'
          label='Campaign name'
          variant='outlined'
          onChange={onChangeCampaignName}
        />
      </div>
      <div className={classNames.row}>
        <div className={classNames.label}>Type</div>
        <Select
          size='small'
          style={{ width: 150 }}
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={type}
          label='type'
          onChange={onChangeType}
        >
          <MenuItem value='Time slot'>Time slot</MenuItem>
          <MenuItem value='50 per day'>50 per day</MenuItem>
          <MenuItem value='100 per day'>100 per day</MenuItem>
        </Select>
      </div>
      <div className={classNames.row}>
        <div className={classNames.label}>Date</div>
        <div className='mr-5'>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              onChange={onChangeStartDate}
              label='Start date'
              slotProps={{ textField: { size: 'small' } }}
            />
          </LocalizationProvider>
        </div>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label='End date'
            onChange={onChangeEndDate}
            slotProps={{ textField: { size: 'small' } }}
          />
        </LocalizationProvider>
      </div>
      <div className={classNames.row}>
        <div className={classNames.label}>Frequency</div>
        <TextField
          style={{ width: '120px' }}
          size='small'
          label='Frequency'
          variant='outlined'
          onChange={onChangeFrequency}
        />
      </div>
      <div className={classNames.row}>
        <div className={classNames.label}>Catalog</div>
        {selectedCampaign.url === null ? (
          <div
            style={{
              width: '250px',
              height: '200px',
              borderWidth: 1,
              borderRadius: 8,
              alignItems: 'center',
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
            }}
            onClick={() => openModal()}
          >
            <ImageIcon
              style={{ width: '200px', height: '100px' }}
              color='disabled'
            />
            <span style={{ fontSize: '14px', color: 'grey' }}>
              Select from catalogs
            </span>
          </div>
        ) : (
          <div
            onClick={() => openModal()}
            style={{ height: '200px', width: '250px', borderRadius: 8 }}
          >
            <CardMedia
              sx={{ height: '200px', width: '100%', borderRadius: 8 }}
              component={isVideo(selectedCampaign.url) ? 'video' : 'image'}
              image={selectedCampaign.url}
            />
          </div>
        )}
      </div>
      <Modal
        open={isModalOpen}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          display: 'flex',
        }}
        onClose={() => setIsModalOpen(false)}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <div
          style={{
            height: '60%',
            width: '50%',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            padding: '32px',
            borderRadius: 8,
          }}
        >
          <CardGrid
            data={catalogs}
            rowCount={3}
            onClick={onSelectCampaign}
            aspectRatio={20/24}
          />
        </div>
      </Modal>
    </div>
  );
};

export default CreateCampaign;
