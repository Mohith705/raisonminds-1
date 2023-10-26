import "./footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer_left">
                <div className="footer_one footer_flex">
                    <div className="footer_heading"><h3>SCHOOLS</h3></div>
                    <div className="footer_links">
                        <a href="#">Business</a>
                        <a href="#">Education</a>
                        <a href="#">Engineering</a>
                        <a href="#">Humanities & Sciences</a>
                        <a href="#">Law</a>
                        <a href="#">Sustainability</a>
                    </div>
                </div>
                <div className="footer_two footer_flex">
                    <div className="footer_two_one">
                        <div className="footer_heading"><h3>DEPARTMENTS</h3></div>
                        <div className="footer_links">
                            <a href="#">Departments A-Z</a>
                            <a href="#">Interdisciplinary Programs</a>
                        </div>
                    </div>
                    <div className="footer_two_two">
                        <div className="footer_heading"><h3>RESEARCH</h3></div>
                        <div className="footer_links">
                            <a href="#">Research Centers A-Z</a>
                            <a href="#">Libraries</a>
                        </div>
                    </div>
                </div>
                <div className="footer_three footer_flex">
                    <div className="footer_three_one">
                        <div className="footer_heading"><h3>HEALTH CARE</h3></div>
                        <div className="footer_links">
                            <a href="#">VIT-AP Health Care</a>
                            <a href="#">VIT-AP Alumni Health</a>
                        </div>
                    </div>
                    <div className="footer_three_two">
                        <div className="footer_heading"><h3>ONLINE LEARNING</h3></div>
                        <div className="footer_links">
                            <a href="#">VITAP Online</a>
                        </div>
                    </div>
                </div>
                <div className="footer_four footer_flex">
                    <div className="footer_four_one">
                        <div className="footer_heading"><h3>ABOUT VITAP</h3></div>
                        <div className="footer_links">
                            <a href="#">Facts</a>
                            <a href="#">History</a>
                            <a href="#">Acceleration</a>
                        </div>
                    </div>
                    <div className="footer_four_two">
                        <div className="footer_heading"><h3>ADMISSION</h3></div>
                        <div className="footer_links">
                            <a href="#">Undergraduate</a>
                            <a href="#">Graduate</a>
                            <a href="#">Financial Aid</a>
                        </div>
                    </div>
                </div>
                <div className="footer_five footer_flex">
                    <div className="footer_heading"><h3>RESOURCES</h3></div>
                    <div className="footer_links">
                        <a href="#">Campus Map</a>
                        <a href="#">Community Engagement</a>
                        <a href="#">Directory</a>
                        <a href="#">VITAP Profiles</a>
                    </div>
                </div>
            </div>
            <div className="footer_buttons footer_flex">
                <button type="button">Applying</button>
                <button type="button">Visiting</button>
                <button type="button">Giving</button>
                <button type="button">Careers</button>
                <button type="button">Faculty Positions</button>
                <button type="button">Contact</button>
            </div>
        </div>
    )
}

export default Footer
