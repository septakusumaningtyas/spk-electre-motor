import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Axios from 'axios';

const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

export default function TableSection() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [dataPenggunaList,setDataPenggunaList] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/getpengguna')
            .then((response)=> {
                setDataPenggunaList(response.data);
            });
    }, []);

  return (
    <div>
      <br></br><br></br>
      <Paper className={classes.root}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell style={{minWidth: 50}}>No</TableCell>
                <TableCell style={{minWidth: 170}}>Nama</TableCell>
                <TableCell style={{minWidth: 170}}>Alamat Email</TableCell>
                <TableCell style={{minWidth: 170}}>Tanggal Akses</TableCell>
                <TableCell style={{minWidth: 170}}>Alamat</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataPenggunaList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(val=> {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={val}>
                    <TableCell>{val.id}</TableCell>
                    <TableCell>{val.nama_pengguna}</TableCell>
                    <TableCell>{val.email_pengguna}</TableCell>
                    <TableCell>{val.tgl_akses}</TableCell>
                    <TableCell>{val.alamat_pengguna}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={dataPenggunaList.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Paper>
      <br></br><br></br>
    </div>
  );
}