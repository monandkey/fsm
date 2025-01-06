import { 
  Route,
  Routes,
  BrowserRouter
} from "react-router-dom";
import HomePage from "../pages/HomePage";
import RecipeManagementPage from "../pages/RecipeManagementPage";
import MaterialManagementPage from "../pages/MaterialManagementPage";
import SettingPage from "../pages/SettingPage";
import EditHomePage from "../pages/EditHomePage";

const AppRoutes = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/edit' element={<EditHomePage />} />
          <Route path='/recipe' element={<RecipeManagementPage />} />
          <Route path='/material' element={<MaterialManagementPage />} />
          <Route path='/setting' element={<SettingPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRoutes;
