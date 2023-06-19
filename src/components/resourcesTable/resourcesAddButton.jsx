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
import axios from "axios";
import { Input, InputAdornment, IconButton } from "@mui/material";
import { CloudUpload } from "@mui/icons-material";
const AddresourcesButton = () => {
  const [open, setOpen] = useState(false);
  const [showmedia, setShowmedia] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    description: "",
    price: "",
    count: "",
    media: null, // Use null as initial value for file
  });
  const handleClickShowmedia = (event) => {
    const file = event.target.files[0]; // Get the selected file

    // Check if the file type is allowed (e.g., image or PDF)
    if (file.type.includes("image/") || file.type === "application/pdf") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        media: file, // Update the media property with the file
      }));
      setShowmedia(true);
      console.log(file.name); // Display the file name in the console
    } else {
      // Display an error message or perform any other desired action
      alert("Please select a valid file type (image or PDF).");
    }
  };
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
  const handleAddClick = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      // Before creating formDataToSend
      console.log("formData:", formData);

      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("count", formData.count);
      formDataToSend.append("media", formData.media);

      // After creating formDataToSend
      console.log("formDataToSend:", formDataToSend);

      const response = await axios.post(
        "https://supportteachers-mern-api.onrender.com/resource",
        formDataToSend
      );

      console.log(response);

      // >> RESET THE INPUTS
      setFormData({
        name: "",
        type: "",
        description: "",
        price: "",
        count: "",
        media: null,
      });
      handleClose();
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 409) {
        alert("Price already taken, please use a different price.");
      } else {
        alert("Something went wrong. Please try to change the price.");
      }
    }
  };

  return (
    <>
      <Button
        variant="contained"
        onClick={handleClickOpen}
        startIcon={<Add />}
        sx={{
          m: 2,
          backgroundColor: "#0D7590",
          ":hover": {
            boxShadow: "0px 0px 0px 1px #0D7590",
            backgroundColor: "white",
            color: "#0D7590",
          },
        }}
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
            Fill in the form below to add a new Admin.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            name="name"
            label="Name"
            type="text"
            fullWidth
            required
            value={formData.name}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="type"
            label="Type"
            type="text"
            fullWidth
            required
            value={formData.type}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="description"
            label="Description"
            type="text"
            fullWidth
            required
            value={formData.description}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="price"
            label="Price"
            type="text"
            fullWidth
            required
            value={formData.price}
            onChange={handleInputChange}
          />
          <TextField
            margin="dense"
            name="count"
            label="Count"
            type="text"
            fullWidth
            required
            value={formData.count}
            onChange={handleInputChange}
          />
          <Input
            margin="dense"
            name="media"
            type="file"
            fullWidth
            required
            inputProps={{ accept: "image/*, .pdf" }}
            onChange={handleClickShowmedia}
            endAdornment={
              <InputAdornment position="end">
                <IconButton>
                  <CloudUpload />
                </IconButton>
              </InputAdornment>
            }
          />
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

export default AddresourcesButton;
