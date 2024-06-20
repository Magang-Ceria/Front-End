import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Button from '@mui/material/Button';

const KirimBroadcast = () => {
    // Data Dummy
    const broadcastHistory = [
        {
            date: "2024-06-09",
            recipient: "Semua Kelompok Magang",
            message: "Pesan untuk semua kelompok magang dengan informasi penting dan detail yang diperlukan untuk semua peserta magang."
        },
        {
            date: "2024-06-08",
            recipient: "Kelompok Magang Online",
            message: "Pesan khusus untuk kelompok magang online terkait dengan kegiatan yang akan diadakan secara virtual."
        },
        {
            date: "2024-06-07",
            recipient: "Kelompok Magang Offline",
            message: "Pesan untuk kelompok magang offline mengenai jadwal kegiatan di lokasi dan informasi logistik."
        }
    ];
    
    return (
        <div className="w-full">
            <div className='flex gap-2'>
                <div className="text-red-500 bg-white rounded py-1 px-2 flex-none">
                <FontAwesomeIcon icon={faBars} />
                </div>
                <div className='pl-2 py-1 bg-white rounded flex-auto'>
                <h5>/ Magang / Kelola Kelompok</h5>
                </div>
            </div>
            <div className="bg-white mt-5 rounded-md">
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '100%' },
                        p: 2,
                        width: '100%'
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <Typography variant="h6" component="div" gutterBottom sx={{ textAlign: 'center' }}>
                        Form Kirim Broadcast
                    </Typography>
                    <div>
                        <div className="flex items-center my-2">
                            <label htmlFor="outlined-multiline-flexible" className="mr-1 w-1/4">
                                Subjek
                            </label>
                            <TextField
                                id="outlined-multiline-flexible"
                                label="Subjek Pesan"
                                multiline
                                maxRows={4}
                            />
                        </div>
                        <div className="flex items-center my-2">
                        <label htmlFor="outlined-select" className="mr-1 w-1/4">
                            Kirim Ke-
                        </label>
                        <FormControl sx={{ m: 1, minWidth: 120 }} fullWidth>
                            <InputLabel id="demo-simple-select-label">Select Option</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="outlined-select"
                                label="Select Option"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={10}>Semua Kelompok Magang</MenuItem>
                                <MenuItem value={20}>Kelompok Magang Online</MenuItem>
                                <MenuItem value={30}>Kelompok Magang Offline</MenuItem>
                            </Select>
                        </FormControl>
                    </div>
                        <div className="flex items-center my-2">
                            <label htmlFor="outlined-multiline-static" className="mr-1 w-1/4">
                                Pesan
                            </label>
                            <TextField
                                id="outlined-multiline-static"
                                label="Pesan"
                                multiline
                                rows={4}
                                defaultValue="-Tulisa Pesan-"
                            />
                        </div>
                    </div>
                    <div className="flex justify-center mt-4">
                        <Button variant="contained" color="primary" type="submit">
                            Kirim
                        </Button>
                    </div>
                </Box>
            </div>
            <div className="bg-white mt-5 rounded-md p-4">
                <Typography variant="h6" component="div" gutterBottom sx={{ textAlign: 'center' }}>
                    Riwayat Kirim Broadcast
                </Typography>
                <div className="h-64 overflow-y-auto">
                    {broadcastHistory.map((history, index) => (
                        <div key={index} className="bg-gray-100 p-2 my-2 rounded shadow">
                            <div><strong>Tanggal:</strong> {history.date}</div>
                            <div><strong>Dikirim Ke:</strong> {history.recipient}</div>
                            <div><strong>Pesan:</strong> {history.message}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default KirimBroadcast;
