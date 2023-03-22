import Content from './components/Content';
import Counter from './components/Counter';

const App = () => {
  return (
    <Content>
      <Counter initialValue={1} />
    </Content>
  );
};

export default App;
