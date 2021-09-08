
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

const Footer = () => (
    <footer className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container icon-cont">
            <p className="text-light">Made with <span style={{color:"red"}}>❤</span> by César Torres - 2021 &copy;</p>
        </div>
        <div className="container icon-cont">
            <span>
                <Link href="https://github.com/ctorres2020/">
                    <a className="text-light"><FontAwesomeIcon icon={faGithub} /></a>
                </Link>
                <span className="p-2">
                    <Link href="https://www.linkedin.com/in/cesar-ivan-torres-front-dev/">
                        <a className="text-light"><FontAwesomeIcon icon={faLinkedin} /></a>
                    </Link>
                </span>
            </span>
        </div>
    </footer>
)
export default Footer;