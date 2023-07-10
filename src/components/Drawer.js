import * as React from 'react';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import DragIndicatorIcon from '@mui/icons-material/DragIndicator';

const categoryData = ['all_news',
                      'trending',
                      'top_stories',
                      'national',
                      'business',
                      'politics',
                      'sports',
                      'technology',
                      'startups',
                      'entertainment',
                      'hatke',
                      'education',
                      'world',
                      'automobile',
                      'science',
                      'travel',
                      'miscellaneous',
                      'fashion']

export default function SwipeableTemporaryDrawer({setCategory}) {
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 180 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <Divider />
      <List><h4 style={{marginLeft: "15px", fontSize: "20px"}}>Categories</h4><hr/>
        {categoryData.map((text, index) => (
          <ListItem button key={text} onClick={() => setCategory(text)}  >
            <p style={{fontSize: "13px", paddingLeft:"20px"}}>{text.toUpperCase().replace("_", " ")}</p>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
        <React.Fragment key={'left'}>
          <Button onClick={toggleDrawer('left', true)}>
          <DragIndicatorIcon style={{width: "45px" , height: "45px" }} color="action" fontSize="large"/>
           <h5 style={{color: "black"}}>Menu</h5>
          </Button>
          <SwipeableDrawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
            onOpen={toggleDrawer('left', true)}
          >
            {list('left')}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}
