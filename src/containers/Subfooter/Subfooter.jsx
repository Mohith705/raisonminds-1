import "./subfooter.css"
import logo from "../../assets/log.png"

const Subfooter = () => {
    return (
        <div className="subfooter_section">
            <div className="subfooter">
                <div className="subfooter_left">
                    <img src={logo} alt="" />
                </div>
                <div className="subfooter_right">
                    <div className="subfooter_right_one">
                        <p><a href="#">VIT-AP Home</a></p>
                        <p><a href="#">Maps & Directions</a></p>
                        <p><a href="#">Search VIT-AP</a></p>
                        <p><a href="#">Emergency Info</a></p>
                    </div>
                    <div className="subfooter_right_two">
                        <p><a href="#">Terms of Use</a></p>
                        <p><a href="#">Privacy</a></p>
                        <p><a href="#">Copyright</a></p>
                        <p><a href="#">Trademarks</a></p>
                        <p><a href="#">Non-Discrimination</a></p>
                        <p><a href="#">Accessibility</a></p>
                    </div>
                </div>
            </div>
            <div className="copyright">
                ©Copyright VIT-AP University.   VIT-AP, Amaravati 522237.
            </div>
        </div>
    )
}

export default Subfooter
