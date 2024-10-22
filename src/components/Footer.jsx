import githubLogo from '../assets/github-logo.svg'
import instagramLogo from '../assets/instagram-logo.svg'
import facebookLogo from '../assets/facebook-logo.svg'
import youtubeLogo from '../assets/youtube-logo.svg'

const Footer = () => {
    return (
        <>
        <div className="flex justify-between py-2">
            <div className='flex gap-3'>
                <a href="https://www.github.com/" target="_blank"><img  src={githubLogo} className='w-8' alt="github-logo"/></a>
                <a href="https://www.instagram.com/" target="_blank"><img src={instagramLogo} className='w-8'/></a>
                <a href="https://www.facebook.com/" target="_blank"><img src={facebookLogo} className='w-8'/></a>
                <a href="https://www.youtube.com/" target="_blank"><img src={youtubeLogo} className='w-8'/></a>
            </div>
            <div className='flex gap-4'>
            <div>
               <a href='https://my-json-server.typicode.com/nebo1991/json-server' target="_blank"> <p>Our API</p></a>
            </div>
            <div>
                <p>Documentation</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Footer;