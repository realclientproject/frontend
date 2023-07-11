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
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import axios from "axios";
import AddresourcesButton from "./quizzesAddButton";
import DashboardLayout from "../../../../components/layout/dashboardLayout";

function QuizzesTable() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingData, setEditingData] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([
    {
      _id: "1",
      first_name: "John",
      last_name: "Doe",
      phone: "123-456-7890",
      email: "john.doe@example.com",
      role: "Admin",
    },
    {
      _id: "2",
      first_name: "Jane",
      last_name: "Doe",
      phone: "234-567-8901",
      email: "jane.doe@example.com",
      role: "User",
    },
  ]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (row) => {
    setEditingData(row);
    console.log(row);
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setEditingData({});
  };

  const handleEditDialogSave = (id) => {
    // handle save logic here
    axios
      .patch(
        `https://supportteachers-mern-api.onrender.com/resource/${id}`,
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
          alert("user's info has been edited successfully");
        }
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
        if (error.response && error.response.status === 409) {
          alert("Email already taken, please use a different email.");
        }
        if (error.response && error.response.status === 403) {
          alert("you are not authorized");
        } else {
          alert("Something went wrong. Please try to change something.");
        }
      });

    setEditDialogOpen(false);
    setEditingData({});
  };

  const handleDeleteClick = (id) => {
    // handle delete logic here
    axios
      .delete(`https://supportteachers-mern-api.onrender.com/resource${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        // Handle success response
        console.log(response);
        if (response.status === 200) {
          alert("file was successfully deleted");
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

  useEffect(() => {
    axios
      .get("https://supportteachers-mern-api.onrender.com/resource", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        const quizzes = response.data.response.filter(
          (resource) => resource.type === "quiz"
        );
        setData(quizzes);
        // console.log(response.data.response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
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
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.type}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.price}</TableCell>
                  <TableCell>{row.count}</TableCell>
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
export default QuizzesTable;
