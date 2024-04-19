import { useSelector } from 'react-redux';
import './App.css';
import Home from './Screens/Home';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import { ACCOUNT_TYPE } from "./utils/constants";
import NavBar from './components/common/NavBar';
import Login from './Pages/Login';
import FindJob from './Screens/FindJob.js';
import JobDetailsPage from "./Pages/Find Job/JobDetailsPage";
import FindDriver from './Screens/FindDriver.js';
import Contact from './Screens/Contact.js';
import AboutUs from './Pages/Footer/AboutUs.js';
import PrivacyPolicy from './Pages/Footer/PrivacyPolicy.js';
import Terms from './Pages/Terms.js'
import FAQ from './Pages/Footer/FAQ.js'
import Vision from './Pages/Footer/Vision.js';
import Signup from './Pages/Signup.js';
import CreateCv from './Pages/Create CV/CreateCv.js';
import OurPublication from './Pages/Footer/OurPublication.js';
import OpenRoute from "./components/core/Auth/OpenRoute"
import PrivateRoute from "./components/core/Auth/PrivateRoute"
import MyProfile  from "./components/core/Dashboard/MyProfile/MyProfile"
import CompanyProfile from "./components/core/Dashboard/CompanyProfile/CompanyProfile"
import Dashboard from "./components/core/Dashboard/MainPage/Dashboard"
import AddService from "./components/core/Dashboard/Services/AddService"
import Settings from './components/core/Dashboard/Settings';
import Services from "./components/core/Dashboard/Services"
import EditService from "./components/core/Dashboard/Services/EditService"
import HomePage from "./components/core/Dashboard/MainPage/HomePage"
import  PostJob  from "./components/core/Dashboard/PostJob/PostJob"
import MyJobs from "./components/core/Dashboard/PostJob/MyJobs"
import EditJobPost from "./components/core/Dashboard/PostJob/EditJobPost"
import CandidateProfile from "./components/core/Dashboard/CandidateProfile"
import MyCv from "./components/core/Dashboard/MyCv/MyCv"
import AppliedJobs from "./components/core/Dashboard/AppliedJobs/AppliedJobs"
// import ApproveJobPost from "./components/core/Dashboard/PostJob/ApproveJobPost"
import AllJobs from "./components/core/Dashboard/AllJobsForAdmin/AllJobs"
import AppliedCandidates from './components/core/Dashboard/AppliedCandidates/AppliedCandidates';
import ViewCv from "./components/core/Dashboard/MyCv/ViewCv"

function App(){

  const { user } = useSelector((state) => state.profile)
  const token = user?.token
  const { serviceId } = useSelector((state) => state.service)
// console.log("serviceId inside app.js ",serviceId)
  return (
    // bg-orange-400
         <div className='w-screen min-h-screen flex flex-col font-inter bg-richblack-700 '>
          <NavBar/>
          <Routes>


            <Route exact path='/' element= {<Home/>} />
            <Route exact path='/find-job' element= {<FindJob/>} />
            <Route exact path='/contact' element= {<Contact/>} />
            <Route exact path='/about' element= {<AboutUs/>} />


            <Route exact path='/login' element= {<OpenRoute><Login/></OpenRoute>} />
            <Route exact path='/signup' element= {<OpenRoute><Signup/></OpenRoute>} />
       
            <Route exact path='/job/:jobId' element= {<JobDetailsPage user={user}/>} />
            <Route exact path='/find-driver' element= {<FindDriver/>}/>
            <Route exact path='/create-cv' element= {<CreateCv user={user} token={token} />} />

            <Route exact path='/privacy' element= {<OpenRoute><PrivacyPolicy/></OpenRoute>} />
            <Route exact path='/terms' element= {<OpenRoute><Terms/></OpenRoute>} />
            <Route exact path='/faq' element= {<OpenRoute><FAQ/></OpenRoute>} />
            <Route exact path='/vision' element= {<OpenRoute><Vision/></OpenRoute>} />
            <Route exact path='/our-publication' element={<OpenRoute><OurPublication/></OpenRoute>}/>

            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>



            <Route path="admin" element={<HomePage/>} />
            {/* Route for admin profile */}

            {user?.accountType === ACCOUNT_TYPE.ADMIN && (
              <>

              <Route path="my-profile" element={<MyProfile/>} />
              {/* <Route path="service" element={<Services/>} /> */}
              <Route path="add-service" element={<AddService/>} />
              <Route path="my-services" element={<Services />} />
              <Route
                  path="edit-service/:serviceId"
                  element={<EditService />}
                />
              <Route path="all-jobs" element={<AllJobs />} />
              
              {/* <Route
                  path="approve-job/:jobId"
                  element={<ApproveJobPost />}
                />     */}
          
              </>
            )}
            <Route path="settings" element={<Settings />} />


            {/* Route only for Company */}
          {user?.accountType === ACCOUNT_TYPE.COMPANY && (
            <>
              <Route
                path="post-job"
                element={<PostJob />}
              />
              <Route path="my-profile" element={<CompanyProfile/>} />
              <Route path="my-jobs" element={<MyJobs />} />
              <Route
                  path="edit-job/:jobId"
                  element={<EditJobPost />}
                />
              <Route path="applied-candidates/:jobId" element={<AppliedCandidates />} />
              {/* <Route exact path='/job/:jobId' element= {<JobDetailsPage user={user}/>} /> */}
              <Route path="view-cv" element={<ViewCv />} />
              
            </>
          )}



            {/* Route only for Candidate */}
            {
              user?.accountType === ACCOUNT_TYPE.CANDIDATE && (
                <>
                  <Route
                    path='my-profile' element={<CandidateProfile/>}
                  />
              <Route path="create-cv" element={<CreateCv />} />
              <Route path="my-cv" element={<MyCv />} />
              <Route path="applied-jobs" element={<AppliedJobs />} />

                </>
              )
            }



            </Route>
            



          </Routes>
         </div>

     
    
  );

}

export default App;