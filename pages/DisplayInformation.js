import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';


const DisplayInformation = () => {

  const [showBirdsInformation, setShowBirdsInformation] = useState([])
  // console.log("show birds information:", showBirdsInformation)

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'name', label: 'Name', minWidth: 170 },
    { id: 'order', label: 'Order', minWidth: 170 },
    { id: 'family', label: 'Family', minWidth: 170 },
    { id: 'size', label: 'Size', minWidth: 170 },
    { id: 'color', label: 'Color', minWidth: 170 },
    { id: 'image', label: 'Image', minWidth: 10 },
    { id: 'total-counts', label: 'Total counts', minWidth: 170 },
  ];


  useEffect(() => {
    axios.get('http://localhost:3000/api/birds_information/').then((response) => {
      // console.log("Feached data are:",response.data)
      setShowBirdsInformation(response.data)
    })
  }, [showBirdsInformation])

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 500, mt: 2, mb: 1 }} >
        <Table sx={{ mt: 2, mb: 1, ml: 2, mr: 2, p: "auto" }} >
          <TableHead >
            <TableRow style={{ backgroundColor: '#40c4ff', fontSize: '20px' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{ minWidth: column.minWidth, }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {showBirdsInformation
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                console.log("rows are:", row)
                console.log("track id of rows:")

                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.ID}>
                    <TableCell>
                      {row.NAME_OF_BIRDS}
                    </TableCell>

                    <TableCell >
                      {row.ORDER_OF_BIRDS}
                    </TableCell>

                    <TableCell>
                      {row.FAMILY_OF_BIRDS}
                    </TableCell>

                    <TableCell>
                      {row.SIZE_OF_BIRDS}
                    </TableCell>

                    <TableCell>
                      {row.COLOR_OF_BIRDS}
                    </TableCell>

                    <TableCell>
                      <Avatar alt="Photo" src={row.IMAGE_OF_BIRDS} variant="square" />
                    </TableCell>

                    <TableCell>
                      {row.TOTAL_COUNTS_OF_BIRDS}
                    </TableCell>

                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={showBirdsInformation.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

export default DisplayInformation