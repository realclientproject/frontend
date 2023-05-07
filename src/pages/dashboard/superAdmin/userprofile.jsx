import { Card, CardContent, CardHeader, Avatar, Typography } from '@mui/material';

const UserProfileCard = () => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar
            sx={{ bgcolor: 'primary.main' }}
            aria-label="user-avatar"
          >
            U
          </Avatar>
        }
        title="John Doe"
        subheader="johndoe@example.com"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Hi, I'm John Doe. I'm a software developer and love building things with React.
        </Typography>
      </CardContent>
    </Card>
  );
};

export default UserProfileCard;
