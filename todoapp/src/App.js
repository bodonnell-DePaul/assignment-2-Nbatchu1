import './App.css';
import { Container, Card } from 'react-bootstrap';
import TabContainer from './components/TabContainer';
import NavBar from './components/NavBar';

function App() {
  return (
    <Container className='containerStyle'>
      <Card className='pt-2 pb-4 px-5 bg-light'>
      <NavBar />
        <TabContainer />
      </Card>
    </Container>
  );
}

export default App;
