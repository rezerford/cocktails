import { BrowserRouter as Router, Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import NotFound from "./pages/OtherPage/NotFound";
import AppLayout from "./layout/AppLayout";
import { ScrollToTop } from "./components/common/ScrollToTop";
import DrinkList from "./pages/Drinks/DrinkList";
import { Provider } from "react-redux";
import { setupStore } from "./store";

export default function App() {
  return (
    <>
      <Provider store={setupStore()}>
        <Router>
          <ScrollToTop />
          <Routes>
            <Route element={<AppLayout />}>
              <Route path="/" element={<Navigate to="/drinks/margarita" replace />} />
              <Route path="/drinks/:cocktailCode" element={<DrinkList />} />
            </Route>

            {/* Fallback Route */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </Provider>
    </>
  );
}
