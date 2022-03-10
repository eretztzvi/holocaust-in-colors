import { useLocation, Outlet } from 'react-router-dom';
// @mui
import { Box, Link, Container, Typography, Stack } from '@mui/material';
import Header from './Header'
// import MainFooter from './MainFooter';
// import MainHeader from './MainHeader';

// ----------------------------------------------------------------------

export default function GuestLayout() {
  const { pathname } = useLocation();

  const isHome = pathname === '/';

  return (
    <Stack sx={{ minHeight: 1 }}>
      <Header />

      <Outlet />

      <Box sx={{ flexGrow: 1 }} />

    </Stack>
  );
}
