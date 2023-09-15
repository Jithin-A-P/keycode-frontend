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
      padding: 25,
      borderRadius: 20,
      background: 'linear-gradient(180deg, #7B20B1 0%, rgba(123, 32, 177, 0.00) 100%)'
    },
    bottomLeft:{
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 'auto'
    },
    text:{
      fontSize: '30px',
      color: '#FFFFFF',
      width: '100%',
      textAlign: 'center' as const,
      margin:'auto'
    },
    bottomRight: {
      backgroundColor: 'white',
      padding: 10,
    },
    qrCode:{
      width: 'auto',
      height: 'auto',
    },
    imageContainer:{

    }
}