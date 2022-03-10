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
  CovidPositiveBar,
  CovidNewCases,
  DistrictsReportingNewCases,
  NumberofActiveCase,
  RollingDaysTotal,
  DailyTestsAndPositivityRate,
  DailyPositiveCases,
  DailyNewPositiveAndRecoveredCases,
  WeeklyTestPositiveCases,
  EstimatedAndReported,
  NewCasesCard,
  NewActiveCasesCard,
  PredictiveValues,
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  return (
    <Page title="Dashboard |Covid Nepal">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">
            Hi, Welcome back to COVID19 status of Nepal
          </Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={6} lg={12} xl={12}>
            <Grid container spacing={3}>
              <Grid item xs={6} sm={2} md={2}>
                <CovidRecovered />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <NewCovidPositive />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <CovidDeaths />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <NewCasesCard />
              </Grid>
              <Grid item xs={6} sm={2} md={2}>
                <NewActiveCasesCard />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <CovidNewCases />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <DistrictsReportingNewCases />
            {/* <TotalDataChart /> */}
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <NumberofActiveCase />
            <RollingDaysTotal />
            <DailyTestsAndPositivityRate />
            <DailyPositiveCases />
            <DailyNewPositiveAndRecoveredCases />
            <WeeklyTestPositiveCases />
            <EstimatedAndReported />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <CovidPositiveBar />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <PredictiveValues />
          </Grid>
        </Grid>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={12} md={12}>
            <DataLocationDeath />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
