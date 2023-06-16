import { Outlet } from 'react-router-dom';
import { Header } from './Header';

function Layout() {
  return (
    <>
      <div>
        <Header />
      </div>
      <main>
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
