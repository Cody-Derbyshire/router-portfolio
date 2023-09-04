import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import '../assets/css/Graphics.css';
import images from '../assets/images.json';
import Transitions from '../components/Transitions';
import Lightbox from 'yet-another-react-lightbox';
import Inline from 'yet-another-react-lightbox/plugins/inline';
import 'yet-another-react-lightbox/styles.css';

const Motion = () => {
  const navigate = useNavigate();

  return (
    <>
      <Transitions>
        <div className='graphics-wrapper'>
          <div id='projects' className='menu-container'>
            <h1 className='page-title'>furniture</h1>

            <h1 className='menu-item' onClick={() => navigate(-1)}>
              back
            </h1>
          </div>
          <div className='graphics-gallery'>
            <Lightbox
              plugins={[Inline]}
              inline={{
                style: {
                  width: '100%',
                  /* maxWidth: '90vw', */
                  aspectRatio: '1 / 1',
                  imageFit: 'cover',
                },
              }}
              slides={images.motion}
            />
          </div>
        </div>
      </Transitions>
    </>
  );
};

export default Motion;
