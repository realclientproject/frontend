import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
  TablePagination,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import AddresourcesButton from "./resourcesAddButton";

function ResourcesTable() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingData, setEditingData] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);
  const [selectedGrade, setSelectedGrade] = useState("");
  const [selectedLang, setSelectedLang] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (row) => {
    setEditingData({ ...row });
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setEditingData({});
    setSelectedGrade("");
    setSelectedLang("");
    setSelectedType("");

  };

  const handleEditDialogSave = (id) => {
    // handle save logic here
    axios
      .put(
        `https://supportteachers-mern-api.onrender.com
      /resource/${id}`,
        editingData,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("access_token"),
          },
        }
      )
      .then((response) => {
        // Handle success response
        console.log(response);
        if (response.status === 200) {
          alert("Product's info has been edited successfully");
          const updatedData = data.map((row) => {
            if (row._id === id) {
              return { ...row, ...editingData };
            }
            return row;
          });
          setData(updatedData);
        }
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
        if (error.response && error.response.status === 409) {
          alert("Email already taken, please use a different email.");
        }
        if (error.response && error.response.status === 403) {
          alert("You are not authorized");
        } else {
          alert("Something went wrong. Please try to change something.");
        }
      });

    setEditDialogOpen(false);
    setEditingData({}); // Clear the editing data after saving
  };

  // ...

  ///////////////////////////////////
  const handleDeleteClick = (id) => {
    // handle delete logic here
    axios
      .delete(`https://supportteachers-mern-api.onrender.com/resource/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        // Handle success response
        console.log(response);
        if (response.status === 200) {
          alert("resource was successfully deleted");
          fetching();
        }
      })
      .catch((error) => {
        if (error.response && error.response.status === 403) {
          alert("you are not authorized");
        } else {
          alert("Something went wrong.");
        }
        // Handle error response
        console.error(error);
      });
  };
  const fetching = () => {
    axios
      .get("https://supportteachers-mern-api.onrender.com/resource", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    fetching();
  }, []);

  ///////////////////////////////

  useEffect(() => {
    axios
      .get("https://supportteachers-mern-api.onrender.com/resource", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        setData(response.data.response);
        console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
    <div style={{ display: "flex", alignItems: "center" }}>
    <TextField
  select
  value={selectedGrade}
  onChange={(e) => setSelectedGrade(e.target.value)}
  style={{ marginRight: "10px", width: "140px", height: "40px" }}
  InputLabelProps={{
    shrink: selectedGrade !== "",
    style: { color: selectedGrade !== "" ? "#000000" : "#9e9e9e" },
  }}
  SelectProps={{
    displayEmpty: true,
    renderValue: (value) => (value === "" ? "All Grades" : value),
  }}
>
  <MenuItem value="">All</MenuItem>
  <MenuItem value="grade1">Grade 1</MenuItem>
  <MenuItem value="grade2">Grade 2</MenuItem>
  <MenuItem value="grade3">Grade 3</MenuItem>
  <MenuItem value="grade4">Grade 4</MenuItem>
  <MenuItem value="grade5">Grade 5</MenuItem>
  <MenuItem value="grade6">Grade 6</MenuItem>
  <MenuItem value="grade7">Grade 7</MenuItem>
  <MenuItem value="grade8">Grade 8</MenuItem>
  <MenuItem value="grade9">Grade 9</MenuItem>
  <MenuItem value="grade10">Grade 10</MenuItem>
  <MenuItem value="grade11">Grade 11</MenuItem>
  <MenuItem value="grade12">Grade 12</MenuItem>
</TextField>

  <TextField
  select
  value={selectedLang}
  onChange={(e) => setSelectedLang(e.target.value)}
  style={{ margin: "10px", width: "166px", height: "40px" }}
  InputLabelProps={{
    shrink: selectedLang !== "",
    style: { color: selectedLang !== "" ? "#000000" : "#9e9e9e" },
  }}
  SelectProps={{
    displayEmpty: true,
    renderValue: (value) => (value === "" ? "All Languages" : value),
  }}
>
  <MenuItem value="">All Languages</MenuItem>
  <MenuItem value="English">English</MenuItem>
  <MenuItem value="Arabic">Arabic</MenuItem>
  <MenuItem value="French">French</MenuItem>
</TextField>
<TextField
  select
  value={selectedType}
  onChange={(e) => setSelectedType(e.target.value)}
  style={{ margin: "10px", width: "166px", height: "40px" }}
  InputLabelProps={{
    shrink: selectedType !== "",
    style: { color: selectedType !== "" ? "#000000" : "#9e9e9e" },
  }}
  SelectProps={{
    displayEmpty: true,
    renderValue: (value) => (value === "" ? "All Type" : value),
  }}
>
  <MenuItem value="">All Type</MenuItem>
  <MenuItem value="Lesson">Lesson</MenuItem>
  <MenuItem value="quiz">quiz</MenuItem>
</TextField>
<TextField style={{ margin: "10px", width: "200px", height: "40px" }}
  label="Search "
  type="text"
  fullWidth
  value={searchKeyword}
  onChange={(e) => setSearchKeyword(e.target.value)}
/>
</div>

      <TableContainer component={Paper} sx={{ width: "98%", margin: "auto" }}>
        <Table>
          
          <TableHead style={{ backgroundColor: "#0D7590" }}>
            <TableRow>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Name
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Type
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Description
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                price
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                count
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Lang
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Grade
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          {data
  .filter((row) => selectedGrade === "" || row.grade === selectedGrade)
  .filter((row) => selectedLang === "" || row.lang === selectedLang)
  .filter((row) => selectedType === "" || row.type === selectedType)
  .filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === 'string' &&
        value.toLowerCase().includes(searchKeyword.toLowerCase())
    )
  )
  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
  .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.count}</TableCell>
                  <TableCell>{row.lang}</TableCell>
                  <TableCell>{row.grade}</TableCell>

                  <TableCell>
                    <IconButton onClick={() => handleEditClick(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(row._id)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: 0,
            padding: 0,
          }}
        >
          <AddresourcesButton />
          <TablePagination
            rowsPerPageOptions={[5, 10, 25]}
            component="div"
            count={data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </div>
      </TableContainer>
      <Dialog open={editDialogOpen} onClose={handleEditDialogClose}>
        <DialogTitle>Edit resources</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the resource information, please update the fields below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Name"
            type="text"
            fullWidth
            value={editingData.name || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Type"
            type="text"
            fullWidth
            value={editingData.type || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, type: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="description"
            type="tel"
            fullWidth
            value={editingData.description || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, description: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="price"
            type="text"
            fullWidth
            value={editingData.price || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, price: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="count"
            type="text"
            fullWidth
            value={editingData.count || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, count: e.target.value })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={() => handleEditDialogSave(editingData._id)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default ResourcesTable;
