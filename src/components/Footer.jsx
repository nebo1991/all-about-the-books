import githubLogo from '../assets/github-logo.svg'
import instagramLogo from '../assets/instagram-logo.svg'
import facebookLogo from '../assets/facebook-logo.svg'
import youtubeLogo from '../assets/youtube-logo.svg'

const Footer = () => {
    return (
        <>
        <div className="flex justify-between py-2">
            <div className='flex gap-3'>
                <img src={githubLogo} className='w-8'/>
                <img src={instagramLogo} className='w-8'/>
                <img src={facebookLogo} className='w-8'/>
                <img src={youtubeLogo} className='w-10'/>
            </div>
            <div className='flex gap-4'>
            <div>
                <p>Our API</p>
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