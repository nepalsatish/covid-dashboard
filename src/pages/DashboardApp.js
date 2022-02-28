// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../components/Page';
import {
  CovidDeaths,
  NewCovidPositive,
  CovidRecovered,
  DataLocationPositive,
  DataLocationDeath,
  TotalDataChart,
} from '../sections/@dashboard/app';

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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6}>
            <DataLocationPositive />
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <DataLocationDeath />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <TotalDataChart />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
