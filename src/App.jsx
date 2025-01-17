import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import AdminLayout from "./components/AdminDashboard/AdminLayout";
import Companies from "./components/AdminDashboard/Companies";
import AdminJobsTable from "./components/AdminDashboard/JobsTable";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Chat from "./components/chat/Chat";
import AddCategory from "./components/AdminDashboard/AddCategory";
import AddJobs from "./components/Dashboard/AddJobs";
import Dashboard from "./components/Dashboard/Dashboard";
import JobsTable from "./components/Dashboard/JobsTable";
import Layout from "./components/Dashboard/Layout";
import MyProfile from "./components/Dashboard/MyProfile";
import CV from "./components/GenerateCV/CV";
import Home from "./components/Home";
import Jobs from "./components/joblist/Jobs";
import Profile from "./components/profile/Profile";
import ResumeMain from "./components/resume/ResumeMain";
import SinglePage from "./components/singleJob/SinglePage";
import Contact from "./components/Contact";
import RegisterAsCompany from "./components/auth/RegisterAsCompany";
import Applicants from "./components/Dashboard/Applicants";
import Messages from "./components/Dashboard/Messages";
import JobsByCategory from "./components/joblist/jobsByCategory";
import AdminUserTable from "./components/AdminDashboard/userTable";
import Google from "./components/Google";
import BookMarked from "./components/bookMarked/BookMarked";
import Notification from "./components/Notification";
import NotificationPage from "./components/AdminDashboard/Notification";
import ForgotPassword from "./components/auth/ForgotPassword";
import ResetPassword from "./components/auth/resetPassword";
import AdminContact from "./components/AdminDashboard/AdminContact";
import AppliedJobs from "./components/bookMarked/AppliedJobs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/registerAsCompany" element={<RegisterAsCompany />} />

          <Route path="/register" element={<Register />} />
          <Route path="/google/:id" element={<Google />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/bookmarked" element={<BookMarked />} />
          <Route path="/appliedjobs" element={<AppliedJobs />} />
          <Route path="/single/:id" element={<SinglePage />} />
          <Route path="/resume" element={<ResumeMain />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/jobs/:id" element={<JobsByCategory />} />
          <Route path="/chat/:id" element={<Chat />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
          <Route path="/resetPassword/" element={<ResetPassword />} />

          {/* company dashboard layout */}
          {localStorage.getItem("role") === "company" && (
            <Route path="/" element={<Layout />}>
              <Route path="dashboard" element={<Dashboard />} />
              <Route path="addjobs" element={<AddJobs />} />
              <Route path="jobslist" element={<JobsTable />} />
              <Route path="myprofile" element={<MyProfile />} />
              <Route path="applicants" element={<Applicants />} />
              <Route path="messages" element={<Messages />} />
            </Route>
          )}
          {/* admin dashboard layout */}
          {localStorage.getItem("role") === "admin" && (
            <Route path="/admin/" element={<AdminLayout />}>
              <Route path="dashboard" element={<AdminDashboard />} />
              <Route path="jobslist" element={<AdminJobsTable />} />
              <Route path="company" element={<Companies />} />
              <Route path="addcategory" element={<AddCategory />} />
              <Route path="notification" element={<NotificationPage />} />
              <Route path="users" element={<AdminUserTable />} />
              <Route path="contact" element={<AdminContact />} />
            </Route>
          )}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
