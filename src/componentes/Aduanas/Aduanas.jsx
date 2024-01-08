import React from 'react'
import mapa from "../../assets/Aduanas/mapa.png"
import { Box, Typography } from '@material-ui/core'
import Navbar from "../Navbar";
import Footer from "../Footer";
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const Aduanas = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const mapIframeStyle = {
    width: '1217px',
    height: '606px',
    borderRadius: '40px',
  };
  return (
    <div>
            <Navbar />  
<Box style={{paddingTop:"219px",textAlign:"center"}}>  
        <Typography style={{  fontSize: '48px' ,fontWeight:600, color: "#8F0D3C" }}>
        ADUANAS
        </Typography>
        <Typography style={{   fontSize:"30px", color: "rgba(143, 150, 164, 1)",
}}>
        Con nuestras asesorías puedes aclarar tus ideas para tus proyectos de importación
        </Typography></Box>
        <Box sx={{ width: '100%', typography: 'body1' }}  >
      <TabContext value={value} style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider'  }} style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>
          <TabList onChange={handleChange} aria-label="lab API tabs example"  >
            <Tab label="Fronteriza" value="1" />
            <Tab label="Marítima" value="2" />
            <Tab label="Aérea" value="3" />
          </TabList>
        </Box>
        <Box style={{display:"flex",flexDirection:"row",justifyContent:"center"}}>  
        <TabPanel value="1"> <iframe src="https://www.google.com/maps/d/embed?mid=1jiu6HtrEZ4Wrl_rnYlpc9iUiFGkZHqc&ehbc=2E312F" style={mapIframeStyle} width="640" height="480"></iframe></TabPanel>
        <TabPanel value="2"><iframe src="https://www.google.com/maps/d/embed?mid=1IOKxKqIpCkIWYed6H1f-oK80DadUYEA&ehbc=2E312F" style={mapIframeStyle} width="640" height="480"></iframe></TabPanel>
        <TabPanel value="3"><iframe src="https://www.google.com/maps/d/embed?mid=1zhULW3mzp2nMTOJyUJ-yNZdxc5CXRJ4&ehbc=2E312F" style={mapIframeStyle} width="640" height="480"></iframe></TabPanel>
        </Box>
         </TabContext>
    </Box>
        
        <Footer/>
    </div>
  )
}

export default Aduanas














































// import * as React from 'react';
// import SwipeableViews from 'react-swipeable-views';
// import { useTheme } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Tabs from '@mui/material/Tabs';
// import Tab from '@mui/material/Tab';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';

// // interface TabPanelProps {
// //   children?: React.ReactNode;
// //   dir?: string;
// //   index: number;
// //   value: number;
// // }

// function TabPanel(props ) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`full-width-tabpanel-${index}`}
//       aria-labelledby={`full-width-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index ) {
//   return {
//     id: `full-width-tab-${index}`,
//     'aria-controls': `full-width-tabpanel-${index}`,
//   };
// }

// export default function FullWidthTabs() {
//   const theme = useTheme();
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event,newValue) => {
//     setValue(newValue);
//   };

//   const handleChangeIndex = (index ) => {
//     setValue(index);
//   };

//   return (
//     <Box sx={{ bgcolor: 'background.paper', width: 500 }}>
//       <AppBar position="static">
//         <Tabs
//           value={value}
//           onChange={handleChange}
//           indicatorColor="secondary"
//           textColor="inherit"
//           variant="fullWidth"
//           aria-label="full width tabs example"
//         >
//           <Tab label="Fronteriza" {...a11yProps(0)} />
//           <Tab label="Marítima" {...a11yProps(1)} />
//           <Tab label="Aérea" {...a11yProps(2)} />
//         </Tabs>
//       </AppBar>
//       <SwipeableViews
//         axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
//         index={value}
//         onChangeIndex={handleChangeIndex}
//       >
//         <TabPanel value={value} index={0} dir={theme.direction}>
//           Fronteriza
//         </TabPanel>
//         <TabPanel value={value} index={1} dir={theme.direction}>
//           Item Two
//         </TabPanel>
//         <TabPanel value={value} index={2} dir={theme.direction}>
//           Item Three
//         </TabPanel>
//       </SwipeableViews>
//     </Box>
//   );
// }