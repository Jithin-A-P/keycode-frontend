import Button from '@mui/material/Button';

const HeaderWithButton = (props) => {
  const {
    primaryIcon,
    onClickPrimaryButton,
    title,
    primaryButtonText,
    secondaryButtonText,
    secondaryButtonIcon,
    onClickSecondaryButton,
  } = props;


  return (
    <div className='flex justify-between my-[14px]'>
      <div className='text-xl font-bold text-jaguar'>{title}</div>
      <div style={{display: 'flex'}}>
      {secondaryButtonText && <Button
        style={{ borderRadius: 100 }}
        startIcon={secondaryButtonIcon}
        variant='outlined'
        onClick={onClickSecondaryButton}
      >
        {secondaryButtonText}
      </Button>}
      <div style={{width: '24px'}} />
      <Button
        style={{ borderRadius: 100 }}
        endIcon={primaryIcon}
        variant='contained'
        onClick={onClickPrimaryButton}
      >
        {primaryButtonText}
      </Button>
      </div>
    </div>
  );
};

export default HeaderWithButton;
