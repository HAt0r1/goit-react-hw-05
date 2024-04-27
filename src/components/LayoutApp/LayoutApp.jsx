import Navigation from "../Navigation/Navigation";

const LayoutApp = ({ children }) => {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
};

export default LayoutApp;
