import Nav from './Nav';

const Layout = ({ children }) => {
  return (
    <div>
      <Nav />
      <main>{children}</main>
      {/* Add footer or other common elements here */}
    </div>
  );
};

export default Layout;
