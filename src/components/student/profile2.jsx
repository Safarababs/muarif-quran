import React from 'react';
import { useAuth } from '../admin/auth';
import { useNavigate } from 'react-router-dom';
import FemaleLinks from './femaleLinks';

function FemaleDashboard() {

    const auth = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        auth.logout();
        navigate("/")
    }
    return (
        <>
            <section className='heading-link' style={{ background: "#87CEEB", marginTop: "7rem", height: "70vh", width: "100vw" }}>
                <h3>hi, welcome to muarif-e-quran!</h3>
                <p style={{ color: "yellow", fontFamily: "Urdu", fontSize: "4rem" }}>ادارہ معارف قرآن و اہلبیت میں خوش آمدید</p>
                <button onClick={handleLogout} className="button">Logout</button>
            </section>
            <section className="contact">
                <h1 className="heading">your Dashboard</h1>

                <FemaleLinks />

            </section>
        </>
    )
}

export default FemaleDashboard