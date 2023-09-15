import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Chip from '@mui/material/Chip';
import { getFormattedDate } from '@utils/date';
import { useNavigate } from 'react-router-dom';

const statusMapper = {
    ACTIVE: { label: 'Active', color: 'success' },
    expired: { label: 'Expired', color: 'primary' },
    default: { label: 'Expired', color: 'primary' },
};

const CustomTable = (props) => {
    const { headers, data } = props;

    const navigate = useNavigate();

    const renderStatus = (status = 'expired') => {
        const { label, color } = statusMapper[status] || statusMapper.default;
        return (
            <Chip label={label} color={color} variant="outlined" />
        )
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650, backgroundColor: '#f9f9f9' }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {headers.map((headerItem) => (
                            <TableCell key={headerItem} style={{ fontWeight: '700', fontSize: 16 }}>{headerItem}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row: any) => (
                        <TableRow key={row.id} onClick={() => navigate(`/admin/campaigns/${row.id}`)} className='cursor-pointer'>
                            <TableCell className='capitalize'>{row.name}</TableCell>
                            <TableCell>{getFormattedDate(row.startDate)}</TableCell>
                            <TableCell>{getFormattedDate(row.endDate)}</TableCell>
                            <TableCell>{row.kiosksCount || '-'}</TableCell>
                            <TableCell>{renderStatus(row.status)}</TableCell>
                            <TableCell>Rs {row.totalPrice}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default CustomTable;