import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import MuiToolbar from '@mui/material/Toolbar';

import MuiAppBar from '@mui/material/AppBar';

const rightLink = {
  fontSize: 16,
  color: 'common.white',
  ml: 3,
};

export default function AppBar() {
  return (
    <div>
      <MuiAppBar position="fixed" sx={{backgroundColor: '#6e5f55'}}>
        <MuiToolbar sx={{ justifyContent: 'space-between'}}>
          <Box sx={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
            <Link
              color="inherit"
              variant="h6"
              underline="none"
              href="/onepirate/sign-in/"
              sx={rightLink}
            >
              {'Sign In'}
            </Link>
            <Link
              variant="h6"
              underline="none"
              href="/onepirate/sign-up/"
              sx={rightLink}
            >
              {'Sign Up'}
            </Link>
          </Box>
        </MuiToolbar>
      </MuiAppBar>
      <MuiToolbar />
    </div>
  );
}
