import { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";

const About = () => {

    const [info, setInfo] = useState([]);

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

    // console.log(info)

    return (
        <div className="about" id="about">
            <div className="about_text">
                <div className="about_text_heading">
                    <h1>{info[0] && info[0].header}</h1>
                </div>
                <div className="about_text_info">
                    <p>{info[0] && info[0].content}</p>
                </div>
                <div className="about_text_button">
                    <button type="button">{info[0] && info[0].footer}</button>
                </div>
            </div>
        </div>
    )
}

export default About
