import { Box, Card, CardContent, CardHeader, IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const UserProfileCard = () => {
  const firstName = "John";
  const lastName = "Doe";
  const email = "johndoe@example.com";
  const phoneNumber = "555-555-5555";
  const avatarUrl = "https://via.placeholder.com/150"; // Replace with the URL of the user's avatar image
  const subjects = ["React", "JavaScript", "CSS"]; // Replace with the subjects that the user chooses

  return (
    <Card sx={{ maxWidth: 400, backgroundColor: "#f5f5f5" }}>
      <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 1 }}>
              <IconButton color="primary" aria-label="edit profile">
                <EditIcon />
              </IconButton>
            </Box>
      <CardHeader
        title={
          <>
            <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
              <img
                src={avatarUrl}
                alt={`${firstName} ${lastName}'s avatar`}
                style={{ width: 70, height: 70, borderRadius: "50%" }}
              />
            </Box>
            <Typography
              variant="h6"
              align="center"
            >{`${firstName} ${lastName}`}</Typography>
          </>
        }
        subheader={
          <>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center" }}
            >
              {email}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ textAlign: "center", mb: 1 }}
            >
              {phoneNumber}
            </Typography>

            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
              {subjects.map((subject) => (
                <Typography
                  key={subject}
                  variant="body2"
                  color="text.secondary"
                  sx={{
                    display: 'inline-block',
                    bgcolor: '#0D7590',
                    color: 'white',
                    borderRadius: 5,
                    px: 1,
                    py: 0.5,
                    ml: 1,
                    "&:hover": {
                      cursor: "pointer",
                      bgcolor: "#CCCCFF",
                      color: "white"
                    }
                  }}
                >
                  {subject}
                </Typography>
              ))}
            </div>

            

          </>
        }
      />
      <CardContent>
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="body2" color="text.secondary">
            Hi, I'm {firstName} {lastName}. I'm a software developer and love building things with {subjects[0]}.
          </Typography>
        </CardContent>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
