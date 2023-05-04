import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import { DialogActions } from "@mui/material";

const ResourcesAddButton = () => {
  const [open, setOpen] = useState(false);
  const[editingData,setEditingData] = useState(true);
  const [formData, setFormData] = useState({
    Name: "",
    type: "",
    Descrition: "",
    Price: "",
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleAddClick = () => {
    // handle adding data
    console.log(formData);
    handleClose();
  };
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setEditingData({ ...editingData, image: reader.result });
    };
  };
  return (
    <>
      <Button
        variant="contained"
        color="primary"
        onClick={handleClickOpen}
        startIcon={<Add />}
      >
        Add
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add Admin</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in the form below to add new Admin.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="Name"
            label="Name"
            type="text"
            fullWidth
            required
            value={formData.Name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="Type"
            label="Type"
            type="text"
            fullWidth
            required
            value={formData.type}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="Descrition"
            label="Descrition"
            type="text"
            fullWidth
            required
            value={formData.phoneNumber}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="Price"
            label="Price"
            type="Price"
            fullWidth
            required
            value={formData.email}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="Count"
            label="Count"
            type="text"
            fullWidth
            required
            value={formData.Count}
            onChange={handleInputChange}
          />
                    <input
accept="image/*"
id="contained-button-file"
multiple
type="file"
onChange={(e) => handleImageUpload(e)}
style={{ display: 'none' }}
/>
<label htmlFor="contained-button-file">
<Button variant="contained" color="primary" component="span">
Upload File
</Button>
</label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleAddClick} color="primary">
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};
export default ResourcesAddButton;
