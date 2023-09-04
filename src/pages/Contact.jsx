import { useNavigate } from 'react-router-dom';
import Transitions from '../components/Transitions';
import '../assets/css/Contact.css';
import me from '../assets/images/ME.jpg';
import resume from '../assets/images/CODYDERBYSHIRE_CV_2023.pdf';

const Contact = () => {
  const navigate = useNavigate();

  return (
    <>
      <Transitions>
        <div id='projects' className='menu-container'>
          <h1 className='page-title'>contact me!</h1>

          <a
            className='projects-item'
            target='_blank'
            rel='noreferrer'
            href='tel:+64220725530'
          >
            <h1 className='ext-link'>call me</h1>
          </a>
          <a
            className='projects-item'
            target='_blank'
            rel='noreferrer'
            href='mailto:derbyshire@outlook.co.nz'
          >
            <h1 className='ext-link'>email me</h1>
          </a>
          <a
            className='projects-item'
            target='_blank'
            rel='noreferrer'
            href={resume}
          >
            <h1 className='ext-link'>resume</h1>
          </a>
          <a
            className='projects-item'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/Cody-Derbyshire'
          >
            <h1 className='ext-link'>github</h1>
          </a>
          <h1 className='menu-item' onClick={() => navigate(-1)}>
            back
          </h1>
        </div>
        <div className='contact-info'>
          <img className='me-picture' src={me} alt='cody derbyshire' />
          <div className='contact-link-wrapper'>
            <a className='contact-link'>
              <p>+64 22 072 5530</p>
            </a>
            <a className='contact-link'>
              <p>derbyshire@outlook.co.nz</p>
            </a>
          </div>
        </div>
      </Transitions>
    </>
  );
};

export default Contact;
