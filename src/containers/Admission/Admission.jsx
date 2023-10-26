import "./admission.css";
import banner3 from "../../assets2/banner3.jpg"
import { useEffect, useState } from "react";
import axios from "axios";

const Admission = () => {

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
        <div className="admission">
            <div className="admission_heading">
                <h1>Admission</h1>
            </div>
            <div className="admission_info">
                Offering extraordinary freedom to explore, to collaborate, and to challenge yourself
            </div>
            <div className="admission_image">
                <img src={banner3} alt="admission" />
            </div>
            <div className="admission_desc">
                <div className="admission_desc_one">
                    <div className="admission_desc_one_heading">
                        <h1>{info[3] && info[3].content[0].title}</h1>
                    </div>
                    <div className="admission_desc_one_info">
                        <h3>{info[3] && info[3].content[0].desc}</h3>
                    </div>
                </div>
                <div className="admission_desc_two">
                    <div className="admission_desc_two_heading">
                        <h1>{info[3] && info[3].content[1].title}</h1>
                    </div>
                    <div className="admission_desc_two_info">
                        <h3>{info[3] && info[3].content[1].desc}</h3>
                    </div>
                </div>
            </div>
            <div className="admission_button">
                <button type="button">More about admission</button>
            </div>
        </div>
    )
}

export default Admission
