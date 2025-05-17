import { BrowserRouter, Route, Routes } from "react-router";
import PageOne from "./features/page-one";
import PageTwo from "./features/page-two";
 
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/page-one" element={<PageOne/>} />
        <Route path="/page-two" element={<PageTwo/>} />
      </Routes>
    </BrowserRouter>
  );
}