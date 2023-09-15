const Flappy = () => {
  const width = window.innerWidth;
  const height = width * (650 / 500);

  return (
    <div className='flex flex-col h-screen w-screen'>
      <iframe
        height={height}
        width={width}
        // Need to run flappy bird on another server
        src='http://localhost:8080/'
        title='Flappy'
      />
    </div>
  );
};

export default Flappy;
