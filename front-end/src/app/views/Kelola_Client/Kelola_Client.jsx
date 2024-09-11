import * as React from 'react';
import { Fragment } from "react";
import { Card, Grid, styled, useTheme } from "@mui/material";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
  { id: 'no', label: 'No', minWidth: 50, width: 50, align: 'center' },
  { id: 'nama_klien', label: 'Nama Klien', minWidth: 200, width: 250, align: 'center' },
  { id: 'alamat', label: 'Alamat', minWidth: 250, width: 300, align: 'center' },
  { id: 'no_kontak', label: 'No Kontak', minWidth: 150, width: 150, align: 'center' },
  { id: 'email', label: 'Email', minWidth: 200, width: 200, align: 'center' },
  { id: 'tgl_gabung', label: 'Tanggal Gabung', minWidth: 170, width: 170, align: 'center' },
  { id: 'Aksi', label: 'Aksi', minWidth: 100, width: 120, align: 'center' },
];

function createData(no, nama_klien, alamat, no_kontak, email, tgl_gabung, Aksi) {
  return { no, nama_klien, alamat, no_kontak, email, tgl_gabung, Aksi };
}

const rows = [
  createData(1, "PT Huangcun", "Jl.Merdeka, Bekasi", +628123874940, "info@huangcun.co.id", "22 Agustus 2024"),
  createData(2, "PT Eskrimku", "Jl.Koramil, Bandung", +628123874934, "eskrimku@gmail.com", "22 Agustus 2024"),
  createData(3, "CV Berkah Daging", "Komp. Gudang, Cikarang", +628124555640, "berkah@dagingku.id", "22 Agustus 2024"),
];

// STYLED COMPONENTS
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" }
}));

const H4 = styled("h4")(({ theme }) => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginBottom: "16px",
  textTransform: "capitalize",
  color: theme.palette.text.secondary
}));

export default function Analytics() {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  

  return (
    <Fragment>
      <ContentBox className="analytics">
        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <H4>Kelola Klien</H4>
          </Grid>
          <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table sx={{ tableLayout: "auto" }} stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  sx={{ 
                    minWidth: column.minWidth, 
                    width: column.width,
                    border: '1px solid #ddd', 
                    backgroundColor: '#00A3D9', 
                    fontWeight: 'bold'
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.no}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell 
                          key={column.id} 
                          align={column.align}
                          sx={{
                            borderRight: '1px solid rgba(224, 224, 224, 1)',
                            '&:last-child': {
                              borderRight: 0,
                            }
                          }}
                        >
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
        </Grid>
      </ContentBox>
    </Fragment>
  );
}