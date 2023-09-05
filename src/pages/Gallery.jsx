import { useNavigate } from 'react-router-dom';
import Transitions from '../components/Transitions';
import '../assets/css/Gallery.css';
import LensAll from '../components/Lens';

const Gallery = () => {
  const navigate = useNavigate();

  return (
    <>
      <Transitions>
        <div className='gallery-wrapper'>
          <div id='projects' className='float'>
            <h1 className='' style={{ color: '#0e080b', border: 'none' }}>
              gallery
            </h1>
            <h1
              style={{ color: '#0e080b', border: 'none' }}
              className='back'
              onClick={() => navigate(-1)}
            >
              back
            </h1>
          </div>
          <LensAll style={{ height: '100vh' }} />
        </div>
      </Transitions>
    </>
  );
};

export default Gallery;
