import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function SelectAutoWidth() {
  const [size, setSize] = React.useState("");

  const handleChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 160 }}>
        <InputLabel id="demo-simple-select-autowidth-label">
          --Select Size--
        </InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={size}
          onChange={handleChange}
          autoWidth
          label="Size"
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={28}>28</MenuItem>
          <MenuItem value={36}>36</MenuItem>
          <MenuItem value={42}>42</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
