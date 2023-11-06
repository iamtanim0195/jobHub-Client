import { Outlet } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import { Toaster } from 'react-hot-toast';

const App = () => {
    return (
        <MainLayout>
            <Outlet />
            <Toaster />
        </MainLayout>
    );
}

export default App;
