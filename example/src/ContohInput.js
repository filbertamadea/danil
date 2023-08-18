import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useState } from "react";

function ContohInput() {
  const [form, setForm] = useState({
    nama: "",
  });

  const handleChange = (e) => {
    let data = e.target.value;

    setForm({ ...form, nama: data });
  };

  console.log(form);

  return (
    <>
      <Grid container item>
        <Grid item xs={3}>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            onChange={handleChange}
          />
        </Grid>
      </Grid>
    </>
  );
}

export default ContohInput;
