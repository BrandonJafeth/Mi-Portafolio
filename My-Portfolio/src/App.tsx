import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './index.css';
import  ToggleTheme  from '../src/components/Atoms/ToggleTheme';
import ThemeProvider from './Context/MyProviderTheme';

const queryClient = new QueryClient();

function App() {
  


  return (
    <QueryClientProvider client={queryClient}>
        <ThemeProvider>

        <ToggleTheme/>
        </ThemeProvider>
    
    </QueryClientProvider>
  );
}

export default App;