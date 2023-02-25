import { Button, ButtonGroup } from '@mui/material';
import React, { useEffect, useState } from 'react';

export function CounterButton({ setQuantity }) {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    setQuantity(counter)
  }, [counter])

  return (
    <ButtonGroup size="small" aria-label="small outlined button group">
      {
        <Button disabled={counter <= 0} onClick={() => {setCounter(counter - 1)}}>
          -
        </Button>
      }
      {<Button disabled>{counter}</Button>}
      <Button
        onClick={()=> {setCounter(counter+1)}}>
          +
        </Button>
    </ButtonGroup>
  )
}
