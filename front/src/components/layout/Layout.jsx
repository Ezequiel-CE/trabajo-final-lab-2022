import { Container } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../nav/NavBar';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <>
      <div className="container">
        <NavBar />
        <Container maxWidth="lg" sx={{ mt: 2, mb: 4 }}>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </>
  );
}

export default Layout;
