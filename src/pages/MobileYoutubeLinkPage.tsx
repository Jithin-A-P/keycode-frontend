import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { usePostAnnouncementMutation } from '@services/api';
import { useState } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';

const MobileYoutubeLinkPage = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [previewId, setPreviewId] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const [updateAnnouncement] = usePostAnnouncementMutation();

  const onChangeLinkText = (event) => {
    setYoutubeLink(event.target.value);
    const id = event.target.value.split('?')[0].split('/').pop();
    setPreviewId(id);
  };

  const onUpload = () => {
    setUploaded(true);
    updateAnnouncement({
      url: youtubeLink,
      type: 'announcement'
    })
  };

  const uploadSuccessView = () => (
    <div className='items-center flex flex-col justify-center h-full'>
      <span className='text-center text-white'>
        Your YouTube shorts have been uploaded successfully. Your Ad will be
        played after the current running Ad. Please wait...
      </span>
      <Dots color='white' />
    </div>
  );

  if (uploaded) return uploadSuccessView();

  return (
    <div className='items-center flex flex-col justify-center h-full'>
      <div className='mb-6 text-center w-[90%] text-white'>
        Showcase your YouTube Shorts with us!. Enter the YouTube shorts link
        below:
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
        InputLabelProps={{
          style: { color: 'white' },
        }}
        onChange={onChangeLinkText}
        className='w-full'
        id='fullWidth'
        label='YouTube link'
        variant='outlined'
      />
      <div className='mb-6' />
      {previewId !== '' && (
        <img src={`https://img.youtube.com/vi/${previewId}/0.jpg`} alt='src' />
      )}
      <div className='mt-6 items-center flex justify-center'>
        <Button
          variant='contained'
          style={{ backgroundColor: 'white', color: 'black' }}
          onClick={onUpload}
        >
          Upload
        </Button>
      </div>
    </div>
  );
};

export default MobileYoutubeLinkPage;
