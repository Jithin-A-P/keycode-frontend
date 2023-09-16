import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import RoutePaths from '@routes/RoutesPath';
import { usePostAnnouncementMutation } from '@services/api';
import { useState } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';
import { useNavigate } from 'react-router-dom';

const MobileAnnouncementPage = () => {
  const [anouncementText, setAnouncementText] = useState('');
  const [uploaded, setUploaded] = useState(false);
  const [flaggedMessage, setFlaggedMessage] = useState('');

  const [updateAnnouncement] = usePostAnnouncementMutation();

  const navigate = useNavigate();

  const onChangeText = (event) => {
    setAnouncementText(event.target.value);
  };

  const onUpload = async () => {
    const response: any = await updateAnnouncement({
      title: anouncementText,
      type: 'announcement',
      name: '',
    });
    if (response?.error != null) {
      setFlaggedMessage(response?.error?.data?.message);
    } else {
      setUploaded(true);
      setTimeout(() => {
        navigate(RoutePaths.MOBILE_HOME);
      }, 3000);
    }
  };

  const uploadSuccessView = () => (
    <div
      className='items-center flex flex-col justify-center h-full px-4 py-7'
      style={{ background: '#171717' }}
    >
      <span className='text-center text-white'>
        Your announcement have been uploaded successfully. Your Ad will be
        played after the current running Ad. Please wait...
      </span>
      <Dots color='white' />
    </div>
  );

  if (uploaded) return uploadSuccessView();

  return (
    <div
      className='items-center flex flex-col justify-center h-full px-4 py-7'
      style={{ background: '#171717' }}
    >
      <div className='font-bold text-white text-[24px] w-[90%] mb-[24px]'>
        Have anything to announce?
      </div>
      <div className='mb-6 text-center w-[90%] text-white'>
        Provide a description of your Ad announcement.
      </div>
      <TextField
        sx={{
          fieldset: { borderColor: 'white' },
          '& label.Mui-focused': {
            color: 'white',
          },
          '& .MuiInput-underline:after': {
            borderBottomColor: 'white',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: 'white',
            },
            '&:hover fieldset': {
              borderColor: 'white',
            },
            '&.Mui-focused fieldset': {
              borderColor: 'white',
            },
          },
          input: { color: 'white' },
        }}
        inputProps={{ style: { color: 'white' } }}
        InputLabelProps={{
          style: { color: 'white' },
        }}
        multiline
        rows={4}
        maxRows={4}
        onChange={onChangeText}
        className='w-full'
        id='fullWidth'
        label='Announcement'
        variant='outlined'
      />
      <div className='text-red-500 text-center mt-4'>{flaggedMessage}</div>
      <div className='mb-6' />
      <div className='mt-6 items-center flex justify-center'>
        <Button
          style={{ backgroundColor: 'white', color: 'black' }}
          variant='contained'
          onClick={onUpload}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default MobileAnnouncementPage;
