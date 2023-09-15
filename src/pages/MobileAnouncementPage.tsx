import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { usePostAnnouncementMutation } from '@services/api';
import { useState } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';

const MobileAnnouncementPage = () => {
  const [anouncementText, setAnouncementText] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const [updateAnnouncement] = usePostAnnouncementMutation();

  const onChangeText = (event) => {
    setAnouncementText(event.target.value);
  };

  const onUpload = () => {
    setUploaded(true);
    updateAnnouncement({
      title: anouncementText,
      type: 'youtube'
    })
  };

  const uploadSuccessView = () => (
    <div className='items-center flex flex-col justify-center h-full'>
      <span className='text-center text-white'>
        Your announcement have been uploaded successfully. Your Ad will be
        played after the current running Ad. Please wait...
      </span>
      <Dots color='white' />
    </div>
  );

  if (uploaded) return uploadSuccessView();

  return (
    <div className='items-center flex flex-col justify-center h-full'>
      <div className='mb-6 text-center w-[90%] text-white'>
        Provide a detailed description of your Ad announcement. Include all the
        important information you want to convey to your audience below:
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
      inputProps={{ style: { color: "white" } }}
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
      <div className='mb-6' />
      <div className='mt-6 items-center flex justify-center'>
        <Button  style={{ backgroundColor: 'white', color: 'black' }} variant='contained' onClick={onUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default MobileAnnouncementPage;
