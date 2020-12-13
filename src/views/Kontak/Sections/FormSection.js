import React, { useState,useEffect } from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import Axios from 'axios';
import { TextareaAutosize, TextField } from "@material-ui/core";
import Form from 'react-bootstrap/Form';

const useStyles = makeStyles(styles);

export default function FormSection() {
  const classes = useStyles();

  const [pesanList,setPesanList] = useState([]);
  useEffect(() => {
    Axios.get('http://localhost:3001/getpesan')
        .then((response)=> {
          setPesanList(response.data);
        });
  }, []);
    
  const [nama, setNama] = useState('');
  const [alamat_email, setAlamatEmail] = useState('');
  const [pesan, setPesan] = useState('');

  const submitPesan = () => {
    Axios.post("http://localhost:3001/addpesan", {
      nama: nama,
      alamat_email: alamat_email,
      pesan: pesan,
    });
    setPesanList([
      ...pesanList,
      { nama: nama, alamat_email: alamat_email, pesan: pesan },
    ]);
    window.location.reload(false);
  };

  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={12} sm={12} md={8}>
          <h2 className={classes.title}>Hubungi kami</h2>
          <h4 className={classes.description}>
            Anda bisa menghubungi kami melalui form di bawah ini.
          </h4>
          <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <TextField label="Masukkan nama" id="nama" variant="outlined" style={{ width: '100%' }}
                onChange={(e) => setNama(e.target.value)}/>
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <TextField label="Masukkan email" id="alamat_email" variant="outlined" style={{ width: '100%' }}
                  onChange={(e) => setAlamatEmail(e.target.value)}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={12}>
                <TextField label="Masukkan pesan" id="pesan" type="textarea" variant="outlined" style={{ width: '100%' }}
                  onChange={(e) => setPesan(e.target.value)}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary" onClick={submitPesan}>Kirim Pesan</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
