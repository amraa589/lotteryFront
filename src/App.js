import { SendOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./views/Login";
import Dashboard from "./views/dashboard/dashboard";


function App() {
  
  return (
     <ThemeProvider theme={createTheme({})}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Routes>
        </BrowserRouter>
     </ThemeProvider>
  );
}

export default App;
 