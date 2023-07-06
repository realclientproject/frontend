import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  MenuItem,
  Select,
  styled,
  InputLabel,
} from "@mui/material";
import { Add, Label } from "@mui/icons-material";
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
      console.log(file); // Display the file name in the console
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

  const StyledInputLabel = styled(InputLabel)`
    color: #000000;
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
  `;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === "lang" || name === "grade") {
      // Handle the Select components separately
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    } else {
      // Handle other input components
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };
  const [resources, setResources] = useState([]);
  const handleAddClick = async (e) => {
    e.preventDefault();

    try {
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name);
      formDataToSend.append("type", formData.type);
      formDataToSend.append("description", formData.description);
      formDataToSend.append("price", formData.price);
      formDataToSend.append("count", formData.count);
      formDataToSend.append("media", formData.media);
      formDataToSend.append("lang", formData.lang);
      formDataToSend.append("grade", formData.grade);

      const response = await axios.post(
        "https://supportteachers-mern-api.onrender.com/resource",
        formDataToSend
      );

      // Update the state with the newly added object
      setResources((prevResources) => [...prevResources, response.data]);

      setFormData({
        name: "",
        type: "",
        description: "",
        price: "",
        count: "",
        media: null,
        lang: "",
        grade: "",
      });

      // Display success message
      handleClose();
      alert("created successfully!");
    } catch (error) {
      console.error(error);
      if (error.response && error.response.status === 409) {
        alert("Price already taken, please use a different price.");
      } else {
        alert("Something went wrong. Please try to change the price.");
      }
    }
  };

  //     handleClose();
  //   } catch (error) {
  //     console.error(error);
  //     if (error.response && error.response.status === 409) {
  //       alert("Price already taken, please use a different price.");
  //     } else {
  //       alert("Something went wrong. Please try to change the price.");
  //     }
  //   }
  // };

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
          <StyledInputLabel id="grade-label">Languages:</StyledInputLabel>

          <Select
            margin="dense"
            name="lang"
            label="Language"
            fullWidth
            required
            value={formData.lang}
            onChange={handleInputChange}
          >
            <MenuItem value="">Arabic</MenuItem>
            <MenuItem value="English">English</MenuItem>
            <MenuItem value="Spanish">French</MenuItem>
            {/* Add more language options */}
          </Select>

          <StyledInputLabel id="grade-label">Grades</StyledInputLabel>
          <Select
            margin="dense"
            name="grade"
            label="Grade"
            fullWidth
            required
            value={formData.grade}
            onChange={handleInputChange}
          >
            <MenuItem value="">kg1</MenuItem>
            <MenuItem value="kg2">kg2</MenuItem>
            <MenuItem value="kg3">kg3</MenuItem>
            <MenuItem value="grade1">grade1</MenuItem>
            <MenuItem value="grade2">grade2</MenuItem>
            <MenuItem value="grade3">grade3</MenuItem>
            <MenuItem value="grade4">grade4</MenuItem>
            <MenuItem value="grade5">grade5</MenuItem>
            <MenuItem value="grade6">grade6</MenuItem>
            <MenuItem value="grade7">grade7</MenuItem>
            <MenuItem value="grade8">grade8</MenuItem>
            <MenuItem value="grade9">grade9</MenuItem>
            <MenuItem value="grade10">grade10</MenuItem>
            <MenuItem value="grade11">grade11</MenuItem>
            <MenuItem value="grade12">grade12</MenuItem>
          </Select>

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
