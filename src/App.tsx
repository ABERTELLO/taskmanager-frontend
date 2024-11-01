// Common
import './App.css';
import AppRouter from './routes';
import contexts from './contexts';

const {
    AuthContext,
    NoteContext,
    UserContext,
} = contexts;


function App() {
    return (
        <div className='App'>
            <UserContext>
                <NoteContext>
                    <AuthContext>
                        <AppRouter />
                    </AuthContext>
                </NoteContext>
            </UserContext>
        </div>
    );
};

export default App;
