import { Metadata } from "next";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';
import Switch from "@mui/material/Switch";

export const metadata: Metadata = {
    title: 'Dashboard',
};

export default async function Page() {

    return (
        <main className="p-4">
            <BasicTable />
        </main>
    );
}

function createData(
    id: string,
    name: string,
    template_id: string,
    template_name: string,
    status: boolean,
) {
    return { id, name, template_id, template_name, status };
}

const rows = [
    createData('1', 'Hồ sơ 1', 'Template 1', 'Template 1', true),
    createData('2', 'Hồ sơ 1', 'Template 1', 'Template 1', false),
    createData('3', 'Hồ sơ 1', 'Template 1', 'Template 1', true),
    createData('4', 'Hồ sơ 1', 'Template 1', 'Template 1', false),
    createData('5', 'Hồ sơ 1', 'Template 1', 'Template 1', true),
];

export function BasicTable() {
    return (
        <TableContainer component={Paper} elevation={0} sx={{ maxHeight: 600, boxShadow: 'none' }}>
            <Table sx={{ minWidth: 650 }} stickyHeader aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {[
                            { label: "#", align: "left" as const },
                            { label: "Tên hồ sơ", align: "right" as const },
                            { label: "Tên Template", align: "right" as const },
                            { label: "Mã Template", align: "right" as const },
                            { label: "Trạng thái", align: "right" as const },
                            { label: "Thao tác", align: "right" as const },
                        ].map((col) => (
                            <TableCell
                                key={col.label}
                                align={col.align}
                                sx={{
                                    backgroundColor: 'var(--brand-500)',
                                    color: '#ffffff',
                                    fontSize: '16px',
                                    fontWeight: 'bold',
                                }}
                            >
                                {col.label}
                            </TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {row.id}
                            </TableCell>
                            <TableCell align="right">{row.name}</TableCell>
                            <TableCell align="right">{row.template_name}</TableCell>
                            <TableCell align="right">{row.template_id}</TableCell>
                            <TableCell align="right">
                                <Switch
                                    checked={row.status}
                                    // onChange={handleChange}
                                    slotProps={{ input: { 'aria-label': 'controlled' } }}
                                />
                            </TableCell>
                            <TableCell align="right">
                                <div className="flex items-center justify-end gap-2">
                                    <div className="p-2 rounded-md bg-green-500 text-white transition-all hover:opacity-80 hover:cursor-pointer">
                                        <OpenInNewOutlinedIcon sx={{fontSize: 24}}/>
                                    </div>
                                    <div className="p-2 rounded-md bg-blue-500 text-white transition-all hover:opacity-80 hover:cursor-pointer">
                                        <DriveFileRenameOutlineOutlinedIcon sx={{fontSize: 24}}/>
                                    </div>
                                    <div className="p-2 rounded-md bg-red-500 text-white transition-all hover:opacity-80 hover:cursor-pointer">
                                        <DeleteOutlinedIcon sx={{fontSize: 24}}/>
                                    </div>
                                </div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}