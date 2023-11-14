import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';

function RunningLine() {
  return (
    <div>
      <Stack sx={{ width: '100px', color: 'grey.800', margin:'5px' }} spacing={2}>
      <LinearProgress color="secondary" />
    </Stack>
    </div>
  )
}

export default RunningLine
