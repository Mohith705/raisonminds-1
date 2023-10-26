import "./campuslife.css";
import campus1 from "../../assets2/campus1.jpg"
import campus2 from "../../assets/campuslife2.webp"
import campus3 from "../../assets2/sports1.jpg"
import { useEffect, useState } from "react";
import axios from "axios";

const Academics = () => {

    const [info, setInfo] = useState([]);
    const [academicdata, setAcademicdata] = useState([]);

    useEffect(() => {
        const fetchAbout = async () => {
            try {
                const response = await axios.get("http://localhost:8000/api/data");
                setInfo(response.data);

            } catch (err) {
                console.error(err);
            }
        }

        fetchAbout();
    }, []);

    return (
        <div className="academics">
            <section className="facilities">
                <h1 className="academics_heading">{info[2] && info[2].header}</h1>
                <p className="academics_info">{ info[2] && info[2].footer }</p>
                <div className='row'>
                    <div className='facilities-col'>
                        <img src={campus1} alt="" />
                        <h3>Student Life</h3>
                        <p>A residential campus with diverse housing, exceptional dining, and over 600 student organizations</p>
                        <a href='#'>Student Affairs</a>
                    </div>
                    <div className='facilities-col'>
                        <img src={campus2} alt="" />
                        <h3>Arts & Culture</h3>
                        <p>A rich tradition of fostering creativity and a vibrant arts district on campus</p>
                        <a href='#'>VIT-AP Arts</a>
                    </div>
                    <div className='facilities-col'>
                        <img src={campus3} alt="" />
                        <h3>Recreation & Wellness</h3>
                        <p>State-of-the-art facilities and fitness programs to encourage movement and play</p>
                        <a href='#'>Recreation & Wellness</a>
                    </div>
                </div>
                <div className="about_text_button">
                    <button type="button">More about campus life</button>
                </div>
            </section>
        </div>
    )
}

export default Academics