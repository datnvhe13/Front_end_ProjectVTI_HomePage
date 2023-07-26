import { Routes, Route } from "react-router-dom";
import HomePage from "../Pages/HomePage";
import Introduce from "../Pages/Introduce";
import PriceTable from "../Pages/PriceTable";
import BuyingOnInstallment from "../Pages/BuyingOnInstallment";
import New from "../Pages/New";
import Contact from "../Pages/Contact";
import AdminPage from "../Pages/AdminPage";
import ProductDetail from "../Pages/ProductDetail";
import Error from "../Pages/Error";
import ListCar from "../Components/ListCar";
import SideBarAdmin from "../Components/SideBarAdmin";
import ProductAdminPage from "../Components/ProductAdminPage";



export let routes = (
    <Routes>

        <Route path="/" element={<HomePage/>} />
        <Route path="/home" element={<HomePage/>} />
        <Route path="/introduce" element={<Introduce/>} />
        <Route path="/priceCarTable" element={<PriceTable/>} />
        <Route path="/buyingOnInstallment" element={<BuyingOnInstallment/>} />
        <Route path="/news" element={<New/>} />
        <Route path="/contact" element={<Contact/>} />
        {/* <Route path="/adminPage" element={<AdminPage/>}/> */}
        {/* <Route path="/sideBar" element={<SideBarAdmin/>}/> */}
        <Route path="/carDetail/:ID" element={<ProductDetail/>} />
        <Route path="/productAdminPage" element={<ProductAdminPage/>} />
        <Route path="*" element={<Error/>} />
        <Route path="/listCar" element={<ListCar/>} />

    </Routes>
);



