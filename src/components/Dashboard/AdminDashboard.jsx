import AllTask from '../other/AllTask.jsx';
import Createtask from '../other/Createtask.jsx';
import Header from '../other/Header.jsx';

const AdminDashboard = (props) => {
  return (
    <div>
        <Header changeUser ={props.changeUser}/>
        <Createtask/>
        <AllTask/>
         
    </div>
  )
}

export default AdminDashboard