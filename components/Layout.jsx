import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Layout(props) {
  return (
    <div className="container p-8 md:p-24 space-y-6">
      <Navbar />
      <Sidebar />
      {props.children}
    </div>
  );
}

export default Layout;
