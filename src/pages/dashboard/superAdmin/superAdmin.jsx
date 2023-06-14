import React from 'react'
import {Box, Typography} from '@mui/material'
import UsersTable from './usersTable'
import DonutChart from '../../../components/charts/DonutChart'

export default function SuperAdmin() {
  return (
    <Box>
         {/* <Box
                sx={{
                  marginY: "16px",
                  padding: "32px",
                  border: "1px solid rgba(109, 125, 147, 0.15)",
                  boxShadow: "4px 4px 20px -10px rgba(0, 0, 0, 0.1)",
                  borderRadius: "12px",
                  bgcolor: "white",
                }}
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold" }}
                  marginBottom={1}
                >
                  Users Languages
                </Typography>
                <DonutChart/>
                </Box> */}
        <UsersTable/>
        
    </Box>
  )
}
