import React from "react";
import {
  Container,
  Typography,
  Box,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Phone, Email, Chat, HelpOutline } from "@mui/icons-material";
import Layout from '../../components/layout/layout'
const HelpAndSupport = () => {
  return (
    <Layout>
      <Container maxWidth="md" >
        <Typography variant="h4" component="h1" marginY={4}>
          Help and Support
        </Typography>
        <Typography variant="body1" component="p">
          Need help with your subscription or have a question about our premium
          lessons and quizzes? We're here to help.
        </Typography>
        <Divider sx={{marginBlock:4}} />
        
        <Box>
          <Typography variant="h6" component="h2" >
            Frequently Asked Questions
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <ListItemText
                primary="What is included in the premium subscription?"
                secondary="Our premium subscription includes access to all of our premium lessons and quizzes, as well as exclusive content and features."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <ListItemText
                primary="How do I subscribe to the premium plan?"
                secondary="To subscribe to our premium plan, simply click on the 'Subscribe' button and follow the instructions."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <HelpOutline />
              </ListItemIcon>
              <ListItemText
                primary="What payment methods do you accept?"
                secondary="We currently accept payments through Liban Post. Credit card payments are not accepted at this time."
              />
            </ListItem>
          </List>
        </Box>
        <Divider sx={{marginBlock:4}}/>
        <Box>
          <Typography variant="h6" component="h2" >
            Contact Us
          </Typography>
          <List>
            <ListItem>
              <ListItemIcon>
                <Phone />
              </ListItemIcon>
              <ListItemText
                primary="Call us"
                secondary="Call us at (123) 456-7890 from Monday to Friday, 9am to 5pm EST."
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <Email />
              </ListItemIcon>
              <ListItemText
                primary="Email us"
                secondary="Email us at support@example.com and we'll get back to you within 24 hours."
              />
            </ListItem>
            
          </List>
        </Box>
      </Container>
    </Layout>
  );
};

export default HelpAndSupport;
