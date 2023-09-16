export default {
  container:{
    display: 'grid',
    gridGap:'20px',
    gridAutoRows: 'auto'
  },
    timeSlotCard:{
      border: '1px solid black',
      borderRadius: '20px',
    },
    timeSlotwrapper:{
      display: 'grid',
      gridGap:'20px',
      gridTemplateColumns: 'repeat(auto-fit, 200px)',
      gridAutoRows: 'auto',
    },
    selectedData:{
      border: '1px solid green',
      backgroundColor: 'green',
      color: 'white',
      borderRadius: '20px'
    },
    buttonContainer:{
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      marginBottom: '20px'
    },
    button:{
      padding: '5px 10px',
      border: '1px solid #000000',
      borderRadius: '20px',
    },
    avgView:{
      display: 'flex',
      flexDirection: 'row' as const
    },
    priceView:{
      display: 'flex',
      flexDirection: 'row' as const
    }
}