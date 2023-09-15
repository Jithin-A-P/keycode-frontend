import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const CustomTable = (props) => {

    const { headers, data } = props;

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
                        <TableRow key={row.id}>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.duration}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>{row.price}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default CustomTable;