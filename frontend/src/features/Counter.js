import React, {useState}  from 'react';
import {Button, Container} from '@mui/material';
import {Box} from '@mui/system';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, incrementByAmount } from './counterSlice';

import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { chagneColor } from './themeSlice';



const Counter = () => {


        
        const data = useSelector(state=>state.theming.color);

        console.log(data);

        
        const dispatch = useDispatch();
                
        const {count} = useSelector(state=>state.counter);

         const handleChange = (event) => {  

                // setColor(event.target.value);
                // console.log(color);
                dispatch(chagneColor(event.target.value));
        };


    


            

          
    
    return <>
            

          

            <Container sx={{display:'flex', width:"30%",  flexDirection:'column' , background: data , height:"90vh"}}>

<FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Age</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={data}
    label="color"
    onChange={handleChange}
  >
    <MenuItem value='white'>white</MenuItem>
    <MenuItem value='green'>green</MenuItem>
    <MenuItem value='blue'>blue</MenuItem>
  </Select>
</FormControl>

            <Box>

                <Box>

               

            <Badge badgeContent={count} color="secondary">
        <ShoppingCartIcon />
        </Badge>


        </Box>  

            <Button variant='contained' onClick={()=> dispatch( increment() )} >Add to cart</Button>
            <Button variant='contained' onClick={()=> dispatch( decrement())}>remove from Cart</Button>
            <Button variant='contained' onClick={()=> dispatch( incrementByAmount(10)  )}>Increment by 10</Button>

        

            </Box>
            </Container>

  
  </>;
};

export default Counter;
