import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  return (
    <div className={'bg-slate-100 text-slate-800 tracking-tight antialiased flex items-center justify-center min-h-screen'}>
      <div className={'max-w-xl w-full'}>
        <Card>
          <Card.Title>Hello React!</Card.Title>
          <Card.Body>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi atque eius numquam obcaecati quia modi, rerum architecto. Enim eos tenetur
            fuga, placeat ratione, earum numquam maiores libero, amet quisquam doloremque?
          </Card.Body>
          <Card.Footer>
            <Button>Register</Button>
          </Card.Footer>
        </Card>
      </div>
    </div>
  );
};

export default App;
