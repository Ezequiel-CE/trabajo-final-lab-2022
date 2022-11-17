import React from 'react';
import { Grid, Container, Box, Typography } from '@mui/material';

function Home() {
  return (
    <div>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid
            item
            sx={{
              display: 'flex',
              direction: 'row',
              alignContent: 'center',
              justifyContent: 'center',
              height: '440px',
              width: '90vh',
            }}
          >
            <Typography
              fullWidth
              display="flex"
              justifyContent="center"
              variant="h3"
              color="white"
              fontFamily="Aboreto"
            >
              Come and Flight with us!
            </Typography>
          </Grid>

          <Grid item display="flex" justifyContent="center" xs={12} sm={12}>
            <Box>
              <iframe
                width="900"
                height="480"
                src="https://www.youtube.com/embed/RoKeSWzZAwA"
                title="The Wonderful World of Flying (HD) - Wolfe Air Reel by 3DF"
                border="0"
                allow="accelerometer; autoplay; clipboard-write;
                  encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Home;
