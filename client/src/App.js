import AppRouter from './components/appRouter/AppRouter';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './components/context/AuthContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <AppRouter/>
      </AuthProvider>
    </div>
  );
}

export default App;
