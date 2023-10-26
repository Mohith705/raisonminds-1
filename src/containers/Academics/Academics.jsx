import "./academics.css";
import academic1 from "../../assets2/academic1.jpg"
import academic2 from "../../assets2/academic2.jpeg"
import academic3 from "../../assets2/academic3.jpg"
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
                <h1 className="academics_heading">{info[1] && info[1].header}</h1>
                <p className="academics_info">{info[1] && info[1].footer}</p>
                <div className="row">
                    <div className="facilities-col">
                        <img src={academic1} alt="" />
                        <h3>Undergraduate Education</h3>
                        <p>Rich learning experiences that provide a broad liberal arts foundation and deep subject-area expertise</p>
                        <a href="#">Undergraduate Education</a>
                    </div>
                    <div className="facilities-col">
                        <img src={academic2} alt="" />
                        <h3>Graduate Education</h3>
                        <p>Unsurpassed opportunities to participate in the advancement of entire fields of knowledge</p>
                        <a href="#">Graduate Education</a>
                    </div>
                    <div className="facilities-col">
                        <img src={academic3} alt="" />
                        <h3>Driving impact</h3>
                        <p>Continuing adult education, executive and professional programs, and programs for K-12 students</p>
                        <a href="#">Lifelong Learning</a>
                    </div>
                </div>
                
                <div className="about_schools">
                    <div className="about_school_heading">
                        <h1>Seven schools in which to pursue your passions</h1>
                    </div>
                    <div className="about_school_buttons">
                        <button type="button">SCOPE</button>
                        <button type="button">Law</button>
                        <button type="button">SENSE</button>
                        <button type="button"> BBA </button>
                        <button type="button"> Education</button>
                        <button type="button">Bsc & Msc</button>
                        <button type="button"> Business</button>
                    </div>
                </div>

                <div className="about_text_button">
                    <button type="button">More about academics</button>
                </div>
            </section>
        </div>
    )
}

export default Academics