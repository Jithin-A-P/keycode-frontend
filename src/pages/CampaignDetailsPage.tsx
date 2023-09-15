/* eslint-disable global-require */
import React from 'react';
import { Card, CardMedia, Typography } from '@mui/material';
import { getFormattedDate } from '@utils/date';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import VisibilityIcon from '@mui/icons-material/Visibility';
import CircularProgress from '@mui/material/CircularProgress';
import { useParams } from 'react-router-dom';

import { useGetCampaignByIdQuery } from '@services/api';

const statusMapper = {
    ACTIVE: { label: 'Active', color: 'success' },
    expired: { label: 'Expired', color: 'primary' },
    default: { label: 'Expired', color: 'primary' },
};

const CampaignDetailsPage = () => {
    const { id } = useParams();

    const { data, isLoading } = useGetCampaignByIdQuery(id);

    const { campaign: campaignData, kioskDetails, media } = data?.data || {};

    const renderStatus = (status) => {
        const { label } = statusMapper[status] || statusMapper.default;
        if (label === 'Active')
            return (
                <div style={{}} className='text-white bg-[#66bb6a] w-fit px-3 py-1 rounded-3xl text-sm'>
                    {label}
                </div>
            )
        return (
            <div style={{}} className='text-white bg-[#FF0000] w-fit px-3 py-1 rounded-3xl text-sm'>
                {label}
            </div>
        )
    }

    const isYoutubeVideo = (url) =>
        url.includes('youtube.com') || url.includes('youtu.be');

    const isVideo = (url) => /\.(mp4|mpg|mpeg4|webp|avi|mkv)$/.test(url);

    const getPreviewId = (url) => url.split('?')[0].split('/').pop();

    if (isLoading) return <CircularProgress color="inherit" />

    return (
        <div>
            <div className='shadow-sm my-4 p-4 flex gap-20'>
                <div className='w-[10%]'>
                    {media?.url && <Card sx={{ maxWidth: 200, borderRadius: 4, boxShadow: 4 }} className='card-styles'>
                        <CardMedia
                            component={(isVideo(media.url) && 'video') || 'image'}
                            style={{ aspectRatio: 9 / 16 }}
                            image={
                                isYoutubeVideo(media.url)
                                    ? `https://img.youtube.com/vi/${getPreviewId(media.url)}/0.jpg`
                                    : media.url
                            }
                            title='Name'
                        />
                    </Card>}
                </div>
                <div className='flex flex-col justify-center'>
                    <div className='flex items-center gap-2'>
                        <Typography variant='h4' className='capitalize'>
                            {campaignData?.name}
                        </Typography>
                        {renderStatus(campaignData?.status)}
                    </div>
                    <Typography style={{ marginTop: 20 }}>{getFormattedDate(campaignData?.startDate)} - {getFormattedDate(campaignData?.endDate)}</Typography>
                    <Typography style={{ marginTop: 8, textTransform: 'capitalize' }}>{campaignData?.name}</Typography>
                    <Typography style={{ marginTop: 8 }}>{campaignData?.totalPrice ? `₹${campaignData?.totalPrice}` : '-'}</Typography>
                    <Typography style={{ marginTop: 8 }}>Frequency: {campaignData?.frequency}</Typography>
                </div>
            </div>
            <div className='shadow-sm my-4 p-4'>
                Screens
                <div className='flex'>
                    {kioskDetails?.map((i) => <Accordion key={i.kiosk.id} className='mt-4 mr-4'>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{i.kiosk.title}<br />
                                <span className='text-[#a99f9f] font-[14px]'>{`${i.kiosk.location}, ${i.kiosk.city}`}</span></Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {i.selectedTimeslots.map(slot => (
                                <div key={slot.id} className='shadow-sm flex gap-10 mb-5 p-2 mr-2'>
                                    <div><AccessTimeIcon fontSize='small' /> {slot.time}</div>
                                    <div><CurrencyRupeeIcon fontSize='small' /> {slot.pricePerSecond} /sec</div>
                                    {campaignData?.status === 'ACTIVE' ? <div className='flex items-center gap-1'>
                                        <div className='loader__dot rounded w-2 h-2 bg-green-500' />
                                        <span className='text-[10px] text-green-500'>LIVE</span>
                                        {slot.liveViewCount}
                                    </div>
                                        :
                                        <div className='flex items-center gap-1'>
                                            <VisibilityIcon fontSize='small' />
                                            {slot.avgViewCount}
                                        </div>
                                    }
                                </div>
                            ))}
                        </AccordionDetails>
                    </Accordion>)}
                </div>
            </div>
        </div>
    )
}

export default CampaignDetailsPage