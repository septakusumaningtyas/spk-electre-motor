import React, {useState, useEffect} from "react";
// @material-ui/core components
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import InputBase from '@material-ui/core/InputBase';
import FormHelperText from '@material-ui/core/FormHelperText';
import Select from '@material-ui/core/Select';
import Form from 'react-bootstrap/Form';
import {TextField} from "@material-ui/core";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Axios from 'axios';

const useStyles = makeStyles(styles);

export default function FormSection() {
  const classes = useStyles();

  const [konsultasiList,setKonsultasiList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/getkonsultasi')
        .then((response)=> {
          setKonsultasiList(response.data);
        });
  }, []);
  
  const [nama_pengguna, setNamaPengguna] = useState('');
  const [email_pengguna, setEmailPengguna] = useState('');
  const [tgl_akses, setTglAkses] = useState('');
  const [alamat_pengguna, setAlamatPengguna] = useState('');
  const [bobot_harga, setBobotHarga] = useState('');
  const [bobot_bbm, setBobotBbm] = useState('');
  const [bobot_tangki, setBobotTangki] = useState('');
  const [bobot_popularitas, setBobotPopularitas] = useState('');

  const submitKonsultasi = () => {
    Axios.post("http://localhost:3001/addkonsultasi", {
      nama_pengguna : nama_pengguna,
      email_pengguna : email_pengguna,
      tgl_akses : tgl_akses,
      alamat_pengguna : alamat_pengguna,
      bobot_harga : bobot_harga,
      bobot_bbm : bobot_bbm,
      bobot_tangki : bobot_tangki,
      bobot_popularitas : bobot_popularitas,
    });
    setKonsultasiList([
      ...konsultasiList,
      { nama_pengguna : nama_pengguna,
        email_pengguna : email_pengguna,
        tgl_akses : tgl_akses,
        alamat_pengguna : alamat_pengguna,
        bobot_harga : bobot_harga,
        bobot_bbm : bobot_bbm,
        bobot_tangki : bobot_tangki,
        bobot_popularitas : bobot_popularitas },
    ]);
    // window.location.reload(false);
  };
  
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Konsultasi</h2>
          <h4 className={classes.description}>
            Isi form di bawah ini untuk memulai konsultasi.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <TextField label="Masukkan nama" id="nama" variant="outlined" style={{ width: '100%' }}
                  onChange={(e) => setNamaPengguna(e.target.value)}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField label="Masukkan alamat" id="nama" variant="outlined" style={{ width: '100%' }}
                  onChange={(e) => setAlamatPengguna(e.target.value)}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField label="Masukkan email" id="nama" variant="outlined" style={{ width: '100%' }} type="email"
                  onChange={(e) => setEmailPengguna(e.target.value)}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField
                  id="date"
                  label="Tanggal Akses"
                  type="date"
                  defaultValue="yy-mm-dd"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }} onChange={(e) => setTglAkses(e.target.value)}
                />
              </GridItem>
              
              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">Harga</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" onChange={(e) => setBobotHarga(e.target.value)}>
                    <option aria-label="None" value="" />
                    <option value={1}>{"≤ 15.000.000"}</option>
                    <option value={2}>{"15.100.000 - 18.000.000"}</option>
                    <option value={3}>{"18.100.000 - 21.000.000"}</option>
                    <option value={4}>{"≥ 21.100.000"}</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem xs={12} sm={12} md={6}>
                <FormControl className={classes.formControl}>
                  <InputLabel htmlFor="grouped-native-select">Konsumsi BBM</InputLabel>
                  <Select native defaultValue="" id="grouped-native-select" onChange={(e) => setBobotBbm(e.target.value)}>
                    <option aria-label="None" value="" />
                    <option value={1}>Rendah(16 km/l - 70 km/l)</option>
                    <option value={2}>Cukup(51 km/l - 60 km/l)</option>
                    <option value={3}>Tinggi(41 km/l - 50 km/l)</option>
                    <option value={4}>Sangat Tinggi(31 km/l - 40 km/l)</option>
                  </Select>
                </FormControl>
              </GridItem>

              <GridItem md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Kapasitas Tangki</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" onChange={(e) => setBobotTangki(e.target.value)}>
                  <option aria-label="None" value="" />
                  <option value={1}>Rendah(3L - 4L)</option>
                  <option value={2}>Cukup(4.1L - 5L)</option>
                  <option value={3}>Tinggi(5.1L - 6L)</option>
                  <option value={4}>Sangat Tinggi(6.1L - 7L)</option>
                </Select>
              </FormControl>
              </GridItem>

              <GridItem md={6}>
              <FormControl className={classes.formControl}>
                <InputLabel htmlFor="grouped-native-select">Popularitas</InputLabel>
                <Select native defaultValue="" id="grouped-native-select" onChange={(e) => setBobotPopularitas(e.target.value)}>
                  <option aria-label="None" value="" />
                  <option value={1}>Rendah</option>
                  <option value={2}>Cukup</option>
                  <option value={3}>Tinggi</option>
                  <option value={4}>Sangat Tinggi</option>
                </Select>
              </FormControl>
              </GridItem>
              <br></br>
              <GridItem xs={12} sm={12} md={4}>
                <br></br>
                <Button color="primary">
                    <Link className="button-link" to="/Hasil" onClick={submitKonsultasi}>
                    Konsultasi
                    </Link>
                </Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
