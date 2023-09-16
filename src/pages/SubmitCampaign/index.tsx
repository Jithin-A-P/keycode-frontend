
import { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Typography from '@mui/material/Typography';
import { useCreateCampaignMutation, useGetKiosksQuery } from '@services/api';
import { time } from '@constants/time';
import { RootState } from '@store/reducer';
import { HeaderWithButton } from '@components';
import RoutePaths from '@routes/RoutesPath';

import styles from './style'

const SubmitCampaign = () => {
  
  const { data } = useGetKiosksQuery('');

  const [createCampaign,] = useCreateCampaignMutation();

  const navigate = useNavigate();

  const { data: formData } = useSelector(
    (state: RootState) => state.rootReducer.Notifications,
  );

  const [selectedData, setSelectedData] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const screens = data?.data ?? [];

  const isSelected = (screenId, slotId) => {
    const screenIndex = screens.findIndex((item) => item.id === screenId);
    const timeSlotIndex = screens[screenIndex].timeslots.findIndex((item) => item.id === slotId);
    const idIndex = selectedData.findIndex((item) => item.slotId === screens[screenIndex].timeslots[timeSlotIndex].id)
    return idIndex;
  }

  const calculateFinalPrice = (currentSelected = selectedData) => {
    let total = 0;
    const fd = Number(formData.frequency) * Number(formData.duration) 
    currentSelected.forEach(i => {
      total += (fd * Number(i.pricePerSecond))
    });
    setTotalPrice(total);
  };

  const handleClick = (screenId, slotId, pricePerSecond) => {
    const choosenItemIndex = isSelected(screenId, slotId);
    const newData = [...selectedData];
    if (selectedData.length === 0 || choosenItemIndex === -1) {
      newData.push({
        screenId, slotId, pricePerSecond,
      })
    } else {
      newData.splice(choosenItemIndex, 1)
    }
    calculateFinalPrice(newData);
    setSelectedData(newData);
  }

  const clearAll = () => {
    setTotalPrice(0);
    setSelectedData([]);
  }

  const onCreateCampaign = async () => {
    const body = {
      "name": formData.campaignName,
      "startDate": formData.startDate,
      "endDate": formData.endDate,
      "mediaId": formData.mediaId,
      "duration": formData.duration,
      "frequency": formData.frequency,
      "totalPrice": totalPrice,
      "status": "ACTIVE",
      "totalViews": 0,
      "timeSlotsIds": selectedData.map(i => i.slotId),
      kiosksCount: new Set(selectedData.map(i => i.screenId)).size,
    };
    const res = await createCampaign(body);
    if (res) {
      navigate(RoutePaths.CAMPAIGNS);
    }
  };

  return (
    <div>
      <HeaderWithButton
        primaryButtonText='Save'
        secondaryButtonText='Back'
        onClickSecondaryButton={() => navigate(-1)}
        onClickPrimaryButton={onCreateCampaign}
        title='Screen Selection'
      />
      <div className='font-semibold flex justify-end mb-4 text-[18px]'>Total Price: ₹{Number(totalPrice || 0)}</div>
      <Grid style={styles.container}>
        {screens.map((item) => (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>{item?.title}<br />
                <span className='text-[#a99f9f] font-[14px]'>{`${item?.location}, ${item?.city}`}</span>
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              Screen Dimensions : {item.dimensions}
              <div style={styles.buttonContainer}>
                <div style={styles.button}>
                  <button onClick={clearAll} type='button'>Clear All</button>
                </div>
              </div>
              <div style={styles.timeSlotwrapper}>
                {item.timeslots.map((timeSlot) => (
                  <button
                    style={isSelected(item.id, timeSlot.id) > -1 ? styles.selectedData : styles.timeSlotCard}
                    key={timeSlot.time}
                    type="button"
                    onClick={() => handleClick(item.id, timeSlot.id, timeSlot.pricePerSecond)}
                  >
                    <div className='flex items-center px-3 py-1 justify-between'>
                      <div>{time[timeSlot.time]}</div>
                      <div>
                        <div className='flex items-center gap-1 mt-1 justify-end'>
                          <VisibilityIcon fontSize='small' />
                          {timeSlot.avgViewCount}
                        </div>
                        <div className='flex items-center gap-1 text-xs justify-end'>
                          ₹{timeSlot.pricePerSecond}/sec
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        ))}
      </Grid>
    </div>

  )
}

export default SubmitCampaign;
