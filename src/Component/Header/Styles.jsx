/* header {
  color: white;
  background: black;
  padding: 20;
}
icons {
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;
  margin: 0 10px;
  cursor: pointer;
}
icon {
  margin: 0 30px;
  display: flex;
  margin: 0 30px;
  cursor: pointer;
  width: 100%;
}
p {
  
} */

import { makeStyles } from "@material-ui/core";

export default makeStyles((theme) => ({
  header:{
    marginTop:30,
    msOverflowWidth: 'none',
    scrollbarWidth:'none'
  },
  main:{
    fontFamily: 'Cabin, sans-serif',
    marginRight: '2rem',
    color:'white',
  },
  icons: {
    marginTop: '22',
    marginLeft: 30,
    color: "white",
    cursor: 'pointer',
    [theme.breakpoints.down("sm")]: {
      marginLeft: 10,
  },
  },
  icon:{
    marginLeft: 35,
    [theme.breakpoints.down("sm")]: {
      marginLeft: 20,
      
  },
  },
  text:{
    textTransform: 'upperCase',
    fontWeight: 100,
    marginLeft: 30,
    color: '#333',
    
    // display: 'none',
      [theme.breakpoints.down("sm")]: {
        marginLeft: 20,
    },
    '&:hover':{
      color: 'white',
    }
  },
  textMain:{
    textTransform: 'upperCase',
    fontWeight: 100,
    marginLeft: 30,
    color: 'white',
    
    // display: 'none',
      [theme.breakpoints.down("sm")]: {
        marginLeft: 20,
    },
   
  }
}));
