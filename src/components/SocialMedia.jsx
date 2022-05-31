import { BsLinkedin, BsGithub } from 'react-icons/bs';
import { GrMail } from 'react-icons/gr';

const SocialMedia = () => {
  return (
    <div className='app__social'>
      <a href="https://www.linkedin.com/in/tom%C3%A1s-li%C3%B1an/" target='_blank' rel='noopener noreferrer'>
        <div>
          <BsLinkedin />
        </div>
      </a>
      <a href="https://github.com/Tomas-Li?tab=repositories" target='_blank' rel='noopener noreferrer'>
        <div>
          <BsGithub />
        </div>
      </a>
      <a href="mailto:tomili.job@gmail.com" target='_blank' rel='noopener noreferrer'>
        <div>
          <GrMail />
        </div>
      </a>
    </div>
  )
}

export default SocialMedia