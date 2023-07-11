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
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import BasicTextFields from "../../../components/header/header";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddButton from "./addbuttonTable";
import DashboardLayout from "../../../components/layout/dashboardLayout";
import axios from "axios";

function Tables() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingData, setEditingData] = useState({});
  const [SubscriptionDialogOpen, setSubscriptionDialogOpen] = useState(false);
  const [SubscriptionData, setSubscriptionData] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [loaded, setLoaded] = useState(false);
  const [data, setData] = useState([]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleEditClick = (row) => {
    setEditingData(row);
    // console.log(row);
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
        `https://supportteachers-mern-api.onrender.com/user/edit/${id}`,
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
      .delete(`https://supportteachers-mern-api.onrender.com/user/${id}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        // Handle success response
        console.log(response);
        if (response.status === 200) {
          alert("user was successfully deleted");
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

  const handleSubscriptionClick = (row) => {
    setEditingData(row);
    if (row.subscription) {
      setSubscriptionData(row.subscription);
    }
    setSubscriptionDialogOpen(true);
  };

  const handleSubscriptionDialogClose = () => {
    setSubscriptionDialogOpen(false);
    setSubscriptionData({});
  };

  const handleSubscriptionDialogSave = (editingData) => {
    // handle save logic here

    const url = editingData.subscription
      ? `https://supportteachers-mern-api.onrender.com/subscription/edit/${editingData.subscription._id}`
      : `https://supportteachers-mern-api.onrender.com/subscription`;

    const axiosConfig = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("access_token"),
      },
    };

    const saveSubscription = () => {
      axios
        .patch(url, SubscriptionData, axiosConfig)
        .then((response) => {
          if (response.status === 200) {
            alert("User's subscription info has been edited successfully");
          }
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 403) {
            alert("You are not authorized");
          } else {
            alert(
              "Something went wrong while creating subscription. Please try to change something."
            );
          }
        });
    };

    const handleSuccessResponse = (response) => {
      if (response.status === 200) {
        alert("Subscription has been added successfully");
        console.log(response);
        // const subscription = response.data.response._id;
        axios
          .patch(
            `https://supportteachers-mern-api.onrender.com/user/edit/${editingData._id}`,
            { subscription: response.data.response._id },
            axiosConfig
          )
          .then((response) => {
            console.log(response);
            if (response.status === 200) {
              alert("User's info has been edited successfully");
            }
          })
          .catch((error) => {
            console.error(error);
            if (error.response && error.response.status === 403) {
              alert("You are not authorized");
            } else {
              alert(
                "Something went wrong while saving subscription ID. Please try to change something."
              );
            }
          });
      }
    };

    if (editingData.subscription) {
      saveSubscription();
    } else {
      axios
        .post(url, SubscriptionData, axiosConfig)
        .then((response) => {
          console.log(response);
          handleSuccessResponse(response);
        })
        .catch((error) => {
          console.error(error);
          if (error.response && error.response.status === 403) {
            alert("You are not authorized");
          } else {
            alert("Something went wrong. Please try to change something.");
          }
        });
    }

    setSubscriptionDialogOpen(false);
    setSubscriptionData({});
    setEditingData({});
  };

  useEffect(() => {
    axios
      .get("https://supportteachers-mern-api.onrender.com/user", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("access_token"),
        },
      })
      .then((response) => {
        const users = response.data.response.filter(
          (user) => user.role === "user"
        );
        setData(users);
        console.log(response.data.response);
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
                First Name
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Last Name
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Phone Number
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Email
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Role
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Actions
              </TableCell>
              <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row.first_name}</TableCell>
                  <TableCell>{row.last_name}</TableCell>
                  <TableCell>{row.phone}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.role}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEditClick(row)}>
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDeleteClick(row._id)}>
                      <DeleteIcon />
                    </IconButton>
                    <IconButton onClick={() => handleSubscriptionClick(row)}>
                      <LoyaltyIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell>
                    <span
                      style={{
                        display: "inline-block",
                        width: "12px",
                        height: "12px",
                        borderRadius: "50%",
                        backgroundColor: row.subscription
                          ? row.subscription.isActive
                            ? "green"
                            : "red"
                          : "red",
                        marginRight: "4px",
                      }}
                    />
                    {row.subscription
                      ? row.subscription.isActive
                        ? "Subscribed"
                        : "Unsubscribed"
                      : "Unsubscribed"}
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
          <AddButton />
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
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the user's information, please update the fields below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="First Name"
            type="text"
            fullWidth
            value={editingData.first_name || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, first_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            fullWidth
            value={editingData.last_name || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, last_name: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="tel"
            fullWidth
            value={editingData.phone || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, phone: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={editingData.email || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, email: e.target.value })
            }
          />
          <InputLabel id="role">Role</InputLabel>
          <Select
            labelId="role"
            id="role"
            margin="dense"
            label="Role"
            fullWidth
            value={editingData.role || ""}
            onChange={(e) =>
              setEditingData({ ...editingData, role: e.target.value })
            }
          >
            <MenuItem value="user">User</MenuItem>
            <MenuItem value="admin">Admin</MenuItem>
            <MenuItem value="superadmin">SuperAdmin</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={() => handleEditDialogSave(editingData._id)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>

      {/* subscription dialogue */}
      <Dialog
        open={SubscriptionDialogOpen}
        onClose={handleSubscriptionDialogClose}
      >
        <DialogTitle>Edit User</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To edit the user's subscription information, please update the
            fields below.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={SubscriptionData.Description || ""}
            onChange={(e) =>
              setSubscriptionData({
                ...SubscriptionData,
                Description: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Payment"
            type="number"
            fullWidth
            value={SubscriptionData.Payment || ""}
            onChange={(e) =>
              setSubscriptionData({
                ...SubscriptionData,
                Payment: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Start Date"
            type="date"
            fullWidth
            value={SubscriptionData.StartDate || ""}
            onChange={(e) =>
              setSubscriptionData({
                ...SubscriptionData,
                StartDate: e.target.value,
              })
            }
          />
          <TextField
            margin="dense"
            label="Due Date"
            type="date"
            fullWidth
            value={SubscriptionData.DueDate || ""}
            onChange={(e) =>
              setSubscriptionData({
                ...SubscriptionData,
                DueDate: e.target.value,
              })
            }
          />
          <InputLabel id="isActive">isActive</InputLabel>
          <Select
            labelId="isActive"
            id="isActive"
            margin="dense"
            label="isActive"
            fullWidth
            value={SubscriptionData.isActive || ""}
            onChange={(e) =>
              setSubscriptionData({
                ...SubscriptionData,
                isActive: e.target.value,
              })
            }
          >
            <MenuItem value={true}>Active</MenuItem>
            <MenuItem value={false}>Disactive</MenuItem>
          </Select>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSubscriptionDialogClose}>Cancel</Button>
          <Button onClick={() => handleSubscriptionDialogSave(editingData)}>
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default Tables;
