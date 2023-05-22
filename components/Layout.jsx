import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import Header from "../components/Header";
import Footer from "../components/Footer"

function Layout(props) {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Sidebar />
      {props.children}
      <Footer />
    </>
  );
}

export default Layout;
