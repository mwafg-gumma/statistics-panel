
// import {  Route,
//   createBrowserRouter,
//   createRoutesFromElements,
//   RouterProvider
// } from "react-router-dom";
// import TablePage from "./components/Links/TablePage";
// import HomePage from "./components/Home/HomePage";
// import BillingPage from "./components/Links/BillingPage";
// import ProfilePage from "./components/Links/ProfilePage";
// import Form from "./components/Form";
// import SingUp from "./components/SingUp";

// const router = createBrowserRouter (
//   createRoutesFromElements (
//   <Route path="/statistics-panel" element={<HomePage />} />
//   <Route path="/table" element={<TablePage />} />
//   <Route path="/bill" element={<BillingPage />} />
//   <Route path="/profile" element={<ProfilePage />} />
//   <Route path="/SigIn" element={<Form />} />
//   <Route path="/SigUp" element={<SingUp />} />
//   </Route>
//   ),
//   {
//   }
// )

// const App = () => {
//   return <RouterProvider router={router} />
// }

// export default App;

import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from "react-router-dom";
import TablePage from "./components/Links/TablePage";
import HomePage from "./components/Home/HomePage";
import BillingPage from "./components/Links/BillingPage";
import ProfilePage from "./components/Links/ProfilePage";
import Form from "./components/Form";
import SingUp from "./components/SingUp";

// FIX: Remove the stray closing </Route> and use top-level routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<HomePage />} />
      <Route path="/statistics-panel" element={<HomePage />} />
      <Route path="/table" element={<TablePage />} />
      <Route path="/bill" element={<BillingPage />} />
      <Route path="/profile" element={<ProfilePage />} />
      <Route path="/sigIn" element={<Form />} />
      <Route path="/sigUp" element={<SingUp />} />
      <Route path="*" element={<div className="text-center text-4xl font-bold mt-20 text-red-500">404 - Not Found</div>} />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;