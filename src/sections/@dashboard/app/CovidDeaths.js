// material
import { alpha, styled } from '@mui/material/styles';
import { Card, Typography } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
//
import Iconify from '../../../components/Iconify';
import COVIDDEATHS from '../../../_mocks_/coviddeath';

import { useEffect, useState } from 'react';
// ----------------------------------------------------------------------

const RootStyle = styled(Card)(({ theme }) => ({
  boxShadow: 'none',
  textAlign: 'center',
  padding: theme.spacing(5, 0),
  color: theme.palette.error.darker,
  backgroundColor: theme.palette.error.lighter
}));

const IconWrapperStyle = styled('div')(({ theme }) => ({
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  width: theme.spacing(8),
  height: theme.spacing(8),
  justifyContent: 'center',
  marginBottom: theme.spacing(3),
  color: theme.palette.error.dark,
  backgroundImage: `linear-gradient(135deg, ${alpha(theme.palette.error.dark, 0)} 0%, ${alpha(
    theme.palette.error.dark,
    0.24
  )} 100%)`
}));

// ----------------------------------------------------------------------

export default function AppBugReports() {
  const [covidDeathNumber, setCovidDeathNumber] = useState()

  useEffect(() => {
    setCovidDeathNumber(COVIDDEATHS.length)
  }, [])

  return (
    <RootStyle>
      <IconWrapperStyle>
        <Iconify icon="cil:face-dead" width={24} height={24} />
      </IconWrapperStyle>
      <Typography variant="h4">{covidDeathNumber}</Typography>
      {/* <Typography variant="h4">{fShortenNumber(covidDeathNumber)}</Typography> */}
      <Typography variant="subtitle2" sx={{ opacity: 0.72 }}>
        Total Patients <br /> Deaths
      </Typography>
    </RootStyle>
  );
}
