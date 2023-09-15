export default {
    container:{
       height: '100vh',
       margin: 'auto',
       backgroundColor: 'transparent',
    },
    topContainer:{
      height: '75%',
      backgroundColor: 'transparent',
      marginBottom: 24
    },
    bottomContainer:{
      height: '20%',
      display: 'flex',
      justifyContent: 'space-between',
      padding: '20px 25px',
      borderRadius: 20,
      boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
      background: 'linear-gradient(180deg, #7B20B1 0%, rgba(123, 32, 177, 0.00) 100%)'
    },
    bottomLeft:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto'
    },
    text:{
      color: '#FFFFFF',
      width: '100%',
      textAlign: 'center' as const,
      margin:'auto',
      fontFamily: 'Syne',
      fontSize: '47px'
    },
    bottomRight: {
      display: 'flex',
      flexDirection: 'column' as const,
      alignItems: 'center',
    },
    qrContainer: {
      backgroundColor: 'white',
      padding: 10,
      borderRadius: 8
    },
    qrCode:{
      width: 'auto',
      height: 'auto',
    },
    imageContainer:{

    },
    announcementBanner:{
        backgroundImage: `url(/assets/announcement.png)`,
        width: '100%',
        height: '100%',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    announcementText:{
      color: '#5B1982',
      fontSize: 60,
      display: 'flex',
      paddingTop: '30%',
      justifyContent: 'center',

      alignItems: 'center',
      // height: '100%',
      padding: '0px 20px',
      fontWeight: '600',
      textAlign: 'center' as const
    }
}