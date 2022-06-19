import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Student } from "./components/Student";
import { Staff } from "./components/Staff";
import { Login } from "./components/Login";
import { Header } from "./components/Header";
import { RequireAuth } from './components/RequireAuth';
import { Missing } from './components/Missing';
import { Layout } from './components/Layout';

const ROLES = {
  'Staff': 'staff',
  'Student': 'student',
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {/* public routes */}
        <Route path="login" element={<Login />} />
        <Route path="home" element={<Header />} />
        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Student]} />}>
          <Route path="/student" element={<Student />} />
        </Route>


        {/* we want to protect these routes */}
        <Route element={<RequireAuth allowedRoles={[ROLES.Staff]} />}>
          <Route path="/staff" element={<Staff />} />
        </Route>

        {/* catch all */}
        <Route path="*" element={<Missing />} />
      </Route>
    </Routes>
  );
}

export default App;
