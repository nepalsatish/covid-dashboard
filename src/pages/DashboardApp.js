// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  CovidDeaths,
  NewCovidPositive,
  CovidRecovered} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard |Covid Nepal">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Hi, Welcome back</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <CovidRecovered />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <NewCovidPositive />
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <CovidDeaths />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
