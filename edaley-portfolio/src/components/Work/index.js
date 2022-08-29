import './index.scss'
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';
const Work = () => {
  return (
    <>
    <div className='work-page'>

        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {Array.from(Array(6)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <Item>xs=2</Item>
              
            </Grid>
          ))}
        </Grid>
    </div>
    </>
  )
}

export default Work;