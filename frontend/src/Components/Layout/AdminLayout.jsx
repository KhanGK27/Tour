import React,{useState} from 'react'
import Header from '../Header/Header'
import Sidebar from '../Sidebar'
import Home from '../Home'

const AdminLayout = () => {
    const [toggle,setToggle] = useState(true)
    const Toggle = () => {
        setToggle(!toggle)
    }
    return <>
    <Header />
    <div className='container-fluid bg-secondary min-vh-100'>
        <div className='row'>
            {toggle && <div className='col-4 col-md-2 bg-white vh-100'>
                <Sidebar />
            </div>}

            {toggle && <div className='col-1'></div>}
            <div className='col'>
                <Home Toggle={Toggle} />
            </div>
        </div>
    </div>
    </>
}

export default AdminLayout