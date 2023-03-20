import { useState } from 'react';
import Content from './components/Content';
import Button from './components/Button';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <Content>
      <h1 className={'text-5xl font-bold'}>{count}</h1>
      <div className={'mt-5 flex items-center gap-2'}>
        <Button onClick={handleClick}>+1</Button>
        <Button
          onClick={() => {
            handleClick();
            handleClick();
            handleClick();
          }}>
          +3
        </Button>
      </div>
    </Content>
  );
};

export default App;
