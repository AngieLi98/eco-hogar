import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Feed from "../pages/Feed/Feed";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import ClasificacionAreas from "../pages/ClasificacionAreas/ClasificacionAreas";
import MaterialesGenerales from "../pages/MaterialesGenerales/MaterialesGenerales";
import ConsejosRetos from "../pages/ConsejosRetos/ConsejosRetos";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Feed/>} />
                <Route path="clasificacionAreas" element={<ClasificacionAreas/>}/>
                <Route path="materialesGenerales" element={<MaterialesGenerales/>}/>
                <Route path="consejosRetos" element={<ConsejosRetos/>}/>
                <Route path="register" element={<Register/>} />
                <Route path="login" element={<Login/>}/>
                <Route path="*" element={<Navigate to={'/'}/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
