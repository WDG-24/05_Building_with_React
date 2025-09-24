import { Footer, NavBar } from './components';
import { Home } from './pages';

const App = () => {
  // TODO: React Router Routes und Layout
  return (
    <div className='flex flex-col min-h-screen'>
      <NavBar />
      <main className='container mx-auto px-4 py-8 mb-auto'>
        <Home />
      </main>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
