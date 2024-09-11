import ViewStreamIcon from '@mui/icons-material/ViewStream';
import DialogTitle from '@mui/joy/DialogTitle';
import Drawer from '@mui/joy/Drawer';
import ModalClose from '@mui/joy/ModalClose';
import { AppBar, Box, Button, Container, Grid, Paper, Toolbar, Typography } from '@mui/material';
import React from 'react';


// Sample Navbar Component
const Navbar = ({ toggleDrawer }) => (
  <AppBar position="static">
    <Toolbar>
    <Button color="inherit" onClick={toggleDrawer}>
         <ViewStreamIcon/>
      </Button>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        HELIXWARE
      </Typography>

    </Toolbar>
  </AppBar>
);

// Features Section
const FeaturesSection = () => (
  <Container sx={{ mt: 6 }}>
    <Typography variant="h4" gutterBottom align="center">
      Top Features
    </Typography>
    <Grid container spacing={4}>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6">Feature 1</Typography>
          <Typography>Detail about feature 1.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6">Feature 2</Typography>
          <Typography>Detail about feature 2.</Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper sx={{ p: 4, textAlign: 'center' }}>
          <Typography variant="h6">Feature 3</Typography>
          <Typography>Detail about feature 3.</Typography>
        </Paper>
      </Grid>
    </Grid>
  </Container>
);

// Footer Section
const Footer = () => (
  <Box sx={{ py: 3, textAlign: 'center', backgroundColor: '#f0f0f0', mt: 26 }}>
    <Typography variant="body2">© 2024 My Website. All rights reserved.</Typography>
  </Box>
);

const Dashboard = () => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <Navbar toggleDrawer={toggleDrawer} />
      <FeaturesSection />
      <Footer />

      {/* Drawer Section */}
      <Drawer open={open} onClose={toggleDrawer}>
        <ModalClose />
        <DialogTitle>Title</DialogTitle>
      </Drawer>
    </>
  );
};

export default Dashboard;
