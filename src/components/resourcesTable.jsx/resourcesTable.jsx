import { useState } from 'react';
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
  TablePagination
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import BasicTextFields from '../header/header';
import ResourcesAddButton from './resourcesAddButton';

function ResourcesTables() {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [editingData, setEditingData] = useState({});
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  
  const data = [
    { firstName: 'John', lastName: 'Doe', phoneNumber: '123-456-7890', email: 'john.doe@example.com', role: 'Admin' },
    { firstName: 'Jane', lastName: 'Doe', phoneNumber: '234-567-8901', email: 'jane.doe@example.com', role: 'User' },
    { firstName: 'Bob', lastName: 'Smith', phoneNumber: '345-678-9012', email: 'bob.smith@example.com', role: 'User' },
    { firstName: 'Alice', lastName: 'Johnson', phoneNumber: '456-789-0123', email: 'alice.johnson@example.com', role: 'Admin' },
    { firstName: 'Tom', lastName: 'Jones', phoneNumber: '567-890-1234', email: 'tom.jones@example.com', role: 'User' },
    { firstName: 'Sally', lastName: 'Smith', phoneNumber: '678-901-2345', email: 'sally.smith@example.com', role: 'Admin' },
    { firstName: 'Mike', lastName: 'Johnson', phoneNumber: '789-012-3456', email: 'mike.johnson@example.com', role: 'User' },
    { firstName: 'Karen', lastName: 'Davis', phoneNumber: '890-123-4567', email: 'karen.davis@example.com', role: 'User' },
    { firstName: 'Peter', lastName: 'Brown', phoneNumber: '901-234-5678', email: 'peter.brown@example.com', role: 'Admin' },
    { firstName: 'Linda', lastName: 'Wilson', phoneNumber: '012-345-6789', email: 'linda.wilson@example.com', role: 'User' },
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
    };
    
    const handleEditClick = (row) => {
    setEditingData(row);
    setEditDialogOpen(true);
    };
    
    const handleEditDialogClose = () => {
    setEditDialogOpen(false);
    setEditingData({});
    };
    
    
    const handleEditDialogSave = () => {
    // handle save logic here
    setEditDialogOpen(false);
    setEditingData({});
    };
    
    const handleDeleteClick = (row) => {
    // handle delete logic here
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
    <BasicTextFields/>
        <TableContainer component={Paper} style={{ width: "80%", margin: "auto",}}>
    <Table>
    <TableHead style={{ backgroundColor: "#0D7590" }}>
  <TableRow>
    <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>Name</TableCell>
    <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>Type</TableCell>
    <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>Description</TableCell>
    <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>Price</TableCell>
    <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>media</TableCell>
    <TableCell style={{ color: "#FFFFFF", fontWeight: "bold" }}>Actions</TableCell>
  </TableRow>
</TableHead>
    <TableBody>
    {data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row, index) => (
    <TableRow key={index}>
    <TableCell>{row.firstName}</TableCell>
    <TableCell>{row.lastName}</TableCell>
    <TableCell>{row.phoneNumber}</TableCell>
    <TableCell>{row.email}</TableCell>
    <TableCell>{row.role}</TableCell>
    <TableCell>
    <IconButton onClick={() => handleEditClick(row)}>
    <EditIcon />
    </IconButton>
    <IconButton onClick={() => handleDeleteClick(row)}>
    <DeleteIcon />
    </IconButton>
    </TableCell>
    </TableRow>
    ))}
    </TableBody>
    </Table>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", margin: 0, padding: 0 }}>
  <ResourcesAddButton />
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
            label="Name"
            type="text"
            fullWidth
            value={editingData.firstName || ''}
            onChange={(e) => setEditingData({ ...editingData, firstName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Last Name"
            type="text"
            fullWidth
            value={editingData.lastName || ''}
            onChange={(e) => setEditingData({ ...editingData, lastName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Phone Number"
            type="tel"
            fullWidth
            value={editingData.phoneNumber || ''}
            onChange={(e) => setEditingData({ ...editingData, phoneNumber: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Email Address"
            type="email"
            fullWidth
            value={editingData.email || ''}
            onChange={(e) => setEditingData({ ...editingData, email: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Role"
            type="text"
            fullWidth
            value={editingData.role || ''}
            onChange={(e) => setEditingData({ ...editingData, role: e.target.value })}
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
Upload Image
</Button>
</label>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleEditDialogClose}>Cancel</Button>
          <Button onClick={handleEditDialogSave}>Save</Button>
          </DialogActions>
      </Dialog>
    </>
  );
}
export default ResourcesTables;