import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMobileScreenButton, faBlog } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const LayoutSidebar = () => {
    return (
        <div className='layout-sidebar'>
            <div className='profile-box'>
                <img src="https://velog.velcdn.com/images/won_gee/profile/a263dd60-6327-4472-b5fd-2b14ccf897b9/image.png" alt="Profile" className="profile-image" />
            </div>
            <div className='introduce-box'>
                <h1 className='name-box'>
                    원지현
                </h1>
                <div className='job-box'>
                    Front-end Engineer
                </div>
            </div>
            <div className='contactInfo-box'>
                <div className='contactInfo'><FontAwesomeIcon icon={faMobileScreenButton} className='contactinfo-icon' /><span>010-5324-3448</span></div>
                <div className='contactInfo'><FontAwesomeIcon icon={faEnvelope} className='contactinfo-icon' /><span>won_gee@naver.com</span></div>
                <div className='contactInfo'><FontAwesomeIcon icon={faBlog} className='contactinfo-icon' /><span><a href='https://velog.io/@won_gee' target='_blank'>https://velog.io/@won_gee</a></span></div>
                <div className='contactInfo'><FontAwesomeIcon icon={faGithub} className='contactinfo-icon' /><span><a href='https://github.com/wongee93' target='_blank'>https://github.com/wongee93</a></span></div>
            </div>
            <div className='seperation-line'></div>
            <div className='organizstions-box'>
                <h4>Organizations</h4>
                <div className='organizstions-items'>
                    <div className='organizstions-item'>
                        <a href='https://greystein.inclass.co.kr/main/' target='_blank'>
                            <img src='https://s3.ap-northeast-2.amazonaws.com/inno.bucket.live/corp/logo/CP00012810_20221123123623.png' alt='organizstions-img' />
                        </a>
                    </div>
                    <div className='organizstions-item'>
                        <a href='https://www.koreapds.com/company/kc_main/' target='_blank'>
                            <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZRxC2JFWOHkRcidsZkAzsM9g5e004LkmhN6PzHLouB6jU5fZRhU9cPgt-kUc6z6B53Kc&usqp=CAU' alt='organizstions-img' />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LayoutSidebar;