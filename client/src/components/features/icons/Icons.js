import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faEnvelope,faUserPlus,faUserCheck,faUserAltSlash,faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'

const shopCartIcon = <FontAwesomeIcon icon={faShoppingCart} />
const contactUsIcon = <FontAwesomeIcon icon={faEnvelope} />
const facebookIcon = <FontAwesomeIcon icon={faFacebook} />
const linkedInIcon = <FontAwesomeIcon icon={faLinkedin} />
const githubIcon = <FontAwesomeIcon icon={faGithub} />
const userRegisterIcon = <FontAwesomeIcon icon={faUserPlus} />
const userLoginIcon = <FontAwesomeIcon icon={faUserCheck} />
const userLogoutIcon = <FontAwesomeIcon icon={faUserAltSlash} />
const userSendMail = <FontAwesomeIcon icon={faEnvelopeOpen} />




export {shopCartIcon, contactUsIcon, facebookIcon, linkedInIcon, githubIcon, userRegisterIcon,userLoginIcon,userLogoutIcon,userSendMail }