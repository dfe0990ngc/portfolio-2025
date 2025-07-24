
import { FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa';
import onlineJobsLogo from '../assets/images/onlinejobs.webp';
export default function Socials(){
    return (
        <>
            <a title="Github" href="https://github.com/dfe0990ngc" className="social-link"><FaGithub /></a>
            <a title="Linkedin" href="https://www.linkedin.com/in/nelson6c" className="social-link"><FaLinkedin /></a>
            <a title="Discord" href="https://discord.com/users/1224870249904738387" className="social-link"><FaDiscord/></a>
            <a title="OnlineJobs PH" href="https://www.onlinejobs.ph/jobseekers/info/4335481" className="social-link"><img src={onlineJobsLogo} className="rounded-full w-100" /></a>
        </>
    );
}