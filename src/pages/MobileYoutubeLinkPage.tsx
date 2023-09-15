import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { Dots } from 'react-activity';
import 'react-activity/dist/library.css';

const MobileYoutubeLinkPage = () => {
  const [youtubeLink, setYoutubeLink] = useState('');
  const [previewId, setPreviewId] = useState('');
  const [uploaded, setUploaded] = useState(false);

  const onChangeLinkText = (event) => {
    setYoutubeLink(event.target.value);
    const id = event.target.value.split('?')[0].split('/').pop();
    setPreviewId(id);
  };

  const onUpload = () => {
    setUploaded(true);
  };

  const uploadSuccessView = () => (
    <div className='items-center flex flex-col justify-center h-full'>
      <span className='text-center'>
        Your YouTube shorts have been uploaded successfully. Your Ad will be
        played after the current running Ad. Please wait...
      </span>
      <Dots />
    </div>
  );

  if (uploaded) return uploadSuccessView();

  return (
    <div className='items-center flex flex-col justify-center h-full'>
      <div className='mb-6 text-center w-[90%]'>
        Showcase your YouTube Shorts with us!. Enter the YouTube shorts link
        below:
      </div>
      <TextField
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
        <Button variant='contained' onClick={onUpload}>
          Upload
        </Button>
      </div>
    </div>
  );
};

export default MobileYoutubeLinkPage;
