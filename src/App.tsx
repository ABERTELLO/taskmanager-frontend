// Common
import './App.css';
import AppRouter from './routes';
import contexts from './contexts';

const { StoreContext } = contexts;


function App() {
    return (
        <div className='App'>
            <StoreContext>
                <AppRouter />
            </StoreContext>
        </div>
    );
};

export default App;
