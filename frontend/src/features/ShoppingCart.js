import React from 'react';
import Badge from '@mui/material/Badge';
import {  useSelector } from 'react-redux';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


const ShoppingCarts = () => {


  const data = useSelector(state=>state.counter.count);

  console.log(data);
    
  return <>
  

  <Badge badgeContent={data} color="secondary">
        <ShoppingCartIcon />
</Badge>
  </>;
};

export default ShoppingCarts;
