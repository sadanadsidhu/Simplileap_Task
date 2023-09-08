import { Outlet, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import LandingPage from "./pages/landingpage/LandingPage";
import SideNavbar from "./components/sidenavbar/SideNavbar";
import DealsList from "./pages/dealsTable/DealsList";
// import ResponsiveExample from "./pages/dealsTable/AA";

function App() {
  const Layout = () => {
    return (
      <div>
        <Navbar />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 1 }}>
            <SideNavbar />
          </div>
          <div style={{ flex: 11 }}>
            <Outlet />
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="deals" element={<DealsList />} />
        </Route>
      </Routes>
    </div>
  );
  // return (
  //   <div className="App">
  //     {/* <Navbar />
  //     <SideNavbar/> */}
  //     {/* <DealsTable/> */}
  //     {/* <ResponsiveExample/> */}
  //     {/* <LandingPage/> */}
  //     {/* <NextAppointment />
  //     <TotalCountCard />
  //     <RecentDetail />
  //     <DealsProgress />
  //     <Customer/>
  //     <TaskTodo/> */}
  //   </div>
  // );
}

export default App;
