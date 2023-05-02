import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  const grades = [
    "Kindergarten",
    "Grade 1", 
    "Grade 2", 
    "Grade 3", 
    "Grade 4", 
    "Grade 5", 
    "Grade 6", 
    "Grade 7", 
    "Grade 8", 
    "Grade 9", 
    "Grade 10", 
    "Grade 11", 
    "Grade 12"
  ];
  const subjects = ["Math", "Science", "English", "History", "Art"];
  const types = ["Homework", "Quiz", "Test", "Project", "Presentation"];

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "2rem",
        height: "200px",
      }}
    >
      {/* Autocomplete for selecting grade */}
      <Autocomplete
        disablePortal
        id="grades"
        options={grades}
        sx={{ width: 150, marginRight: "1rem" }}    
       renderInput={(params) => <TextField {...params} label="Grades" />}
      />

      {/* Autocomplete for selecting subject */}
      <Autocomplete
        disablePortal
        id="subject"
        options={subjects}
        sx={{ width: 150, marginRight: "1rem" }}
        renderInput={(params) => <TextField {...params} label="Subject" />}
      />

      {/* Autocomplete for selecting type */}
      <Autocomplete
        disablePortal
        id="type"
        options={types}
        sx={{ width: 150, marginRight: "1rem" }}
        renderInput={(params) => <TextField {...params} label="Type" />}
      />

      {/* Responsive styles */}
      <style jsx>{`
        @media (max-width: 600px) {
          div {
            flex-direction: column;
            justify-content: center;
            height: auto;
          }
          #grades {
            width: 100%;
            margin-bottom: 1rem;
          }
          #subject {
            width: 100%;
            margin-bottom: 1rem;
          }
          #type {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
}
