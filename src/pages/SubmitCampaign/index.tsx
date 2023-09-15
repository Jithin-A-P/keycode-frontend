
import  { useState} from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from '@mui/material/Typography';
import {  useGetKiosksQuery } from '@services/api';
import styles from './style'

const SubmitCampaign = () => {
  
  const { data } = useGetKiosksQuery('');
    const [selectedData, setSelectedData] = useState([]);
    const screens = data?.data ??[];

    const isSelected = (screenId, slotId) =>{
      const screenIndex = screens.findIndex((item)=>item.id === screenId);
      const timeSlotIndex = screens[screenIndex].timeslots.findIndex((item)=> item.id === slotId);
      const idIndex = selectedData.findIndex((item)=> item.slotId === screens[screenIndex].timeslots[timeSlotIndex].id)
       return idIndex;
     }

    const handleClick = (screenId, slotId) => {
      const choosenItemIndex = isSelected(screenId, slotId);
      const newData = [...selectedData];
      if(selectedData.length === 0 ||  choosenItemIndex===-1){
        newData.push({
          screenId, slotId
        })
      } else {
        newData.splice(choosenItemIndex, 1)
      }
        setSelectedData(newData);
    }

    const clearAll = () =>{
      setSelectedData([]);
    }
    

    return (
       <Grid style={styles.container}>
        {screens.map((item)=>(
          <Accordion key={item.id}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>{item.location}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <div style={styles.buttonContainer}>
              <div style={styles.button}>
                <button onClick={clearAll} type='button'>Clear All</button>
              </div>
            </div>
            <div style={styles.timeSlotwrapper}>
            {item.timeslots.map((timeSlot)=>(
              
              <button style={isSelected(item.id, timeSlot.id) > -1? styles.selectedData : styles.timeSlotCard} key={timeSlot.time} type="button" onClick={()=>handleClick(item.id, timeSlot.id)}>
                
                <div>{timeSlot.time}</div>
                <div style={styles.avgView}>
                  <div>Avg. views</div>
                  <div>{timeSlot.avgViewCount}</div>
                </div>
                <div style={styles.priceView}>
                  <div>Price</div>
                  <div>{timeSlot.pricePerSecond}</div>
                </div>
                </button>
            ))}
            </div>
          </AccordionDetails>
          </Accordion>
        ))}
       </Grid> 
    )
}

export default SubmitCampaign;
