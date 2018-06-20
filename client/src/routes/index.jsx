import Home from '../views/Home/Home'
import Exam from '../views/Exam/Exan'

var indexRoutes = [ 
    { path: "/exam", name: "ExamPage", component: Exam },
    { path: "/", name: "HomePage", component: Home },
  ];
  
  export default indexRoutes;