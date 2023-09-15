import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';

const MobileAnnouncementPage = () => {
  const [anouncementText, setAnouncementText] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const onChangeText = (event) => {
    setAnouncementText(event.target.value);
  };

  const onUpload = () => {
    setUploaded(true);
  };

  const uploadSuccessView = () => (
    <div className='items-center flex flex-col justify-center h-full'>
      <span className='text-center'>
        Your announcement have been uploaded successfully. Your Ad will be
        played after the current running Ad. Please wait...
      </span>
      <Dots />
    </div>
  );

  if (uploaded) return uploadSuccessView();

  return (
    <div className='items-center flex flex-col justify-center h-full'>
      <div className='mb-6 text-center w-[90%]'>
        Provide a detailed description of your Ad announcement. Include all the
        important information you want to convey to your audience below:
      </div>
      <TextField
        onChange={onChangeText}
        className='w-full'
        id='fullWidth'
        label='Announcement'
        variant='outlined'
      />
      <div className='mb-6' />
      <div className='mt-6 items-center flex justify-center'>
        <Button variant='contained' onClick={onUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default MobileAnnouncementPage;
