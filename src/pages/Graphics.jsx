import { useNavigate } from 'react-router-dom';
import * as React from 'react';
import '../assets/css/Graphics.css';
import images from '../assets/images.json';
import Transitions from '../components/Transitions';
import NumberLink from '../components/NumberLink';
import Popover from '../components/Popover';

const Graphics = () => {
  const navigate = useNavigate();
  const graphicsData = images.graphics;

  const ImageGrid = ({ graphics }) => {
    return (
      <div className='image-grid'>
        {graphics.map((graphic, index) => (
          <img
            key={index}
            className='graphics-img'
            src={graphic.src}
            alt={`Graphic ${index}`}
            width={graphic.width}
            height={graphic.height}
          />
        ))}
      </div>
    );
  };

  return (
    <>
      <Transitions>
        <div className='graphics-wrapper'>
          <div className='float-projects'>
            <h1 className=''>graphics</h1>
            <h1 className='back' onClick={() => navigate(-1)}>
              back
            </h1>
          </div>
          <div className='blur float-projects center-float'>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>scale studios</h1>

                <h2>
                  <NumberLink popovertarget={'g-one'} number={'01'} />{' '}
                  <Popover
                    id={'g-one'}
                    src={graphicsData[0].src}
                    alt={graphicsData[0].alt}
                    popovertarget={'g-one'}
                  />
                  <NumberLink popovertarget={'g-two'} number={'02'} />
                  <Popover
                    id={'g-two'}
                    src={graphicsData[1].src}
                    alt={graphicsData[1].alt}
                    popovertarget={'g-two'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>branding proposal</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>branding</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>cody derbyshire</h1>

                <h2>
                  <NumberLink popovertarget={'g-three'} number={'03'} />{' '}
                  <Popover
                    id={'g-three'}
                    src={graphicsData[2].src}
                    alt={graphicsData[2].alt}
                    popovertarget={'g-three'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>personal branding</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>branding</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>flammenzauber</h1>

                <h2>
                  <NumberLink popovertarget={'g-four'} number={'04'} />{' '}
                  <Popover
                    id={'g-four'}
                    src={graphicsData[3].src}
                    alt={graphicsData[3].alt}
                    popovertarget={'g-four'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>brand identity</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>branding</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>green grove</h1>

                <h2>
                  <NumberLink popovertarget={'g-five'} number={'05'} />{' '}
                  <Popover
                    id={'g-five'}
                    src={graphicsData[4].src}
                    alt={graphicsData[4].alt}
                    popovertarget={'g-five'}
                  />{' '}
                  <NumberLink popovertarget={'g-six'} number={'06'} />{' '}
                  <Popover
                    id={'g-six'}
                    src={graphicsData[5].src}
                    alt={graphicsData[5].alt}
                    popovertarget={'g-six'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>brand identity</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>branding</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>ept</h1>

                <h2>
                  <NumberLink popovertarget={'g-seven'} number={'07'} />{' '}
                  <Popover
                    id={'g-seven'}
                    src={graphicsData[6].src}
                    alt={graphicsData[6].alt}
                    popovertarget={'g-seven'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>production design</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>film</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>eva mae elliot</h1>

                <h2>
                  <NumberLink popovertarget={'g-eight'} number={'08'} />{' '}
                  <Popover
                    id={'g-eight'}
                    src={graphicsData[7].src}
                    alt={graphicsData[7].alt}
                    popovertarget={'g-eight'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>client branding</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>branding</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>fwd 2020</h1>

                <h2>
                  <NumberLink popovertarget={'g-nine'} number={'09'} />{' '}
                  <Popover
                    id={'g-nine'}
                    src={graphicsData[8].src}
                    alt={graphicsData[8].alt}
                    popovertarget={'g-night'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>festival marketing</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>web</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>grace stephenson</h1>

                <h2>
                  <NumberLink popovertarget={'g-ten'} number={'10'} />{' '}
                  <Popover
                    id={'g-ten'}
                    src={graphicsData[9].src}
                    alt={graphicsData[9].alt}
                    popovertarget={'g-ten'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>client branding</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>branding</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>peony wedding</h1>

                <h2>
                  <NumberLink popovertarget={'g-eleven'} number={'11'} />{' '}
                  <Popover
                    id={'g-eleven'}
                    src={graphicsData[10].src}
                    alt={graphicsData[10].alt}
                    popovertarget={'g-eleven'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>wedding materials</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>print</p>
                </div>
              </div>
            </div>
            <div className='project-link-wrapper'>
              <div className='info-name-wrapper'>
                <h1 className='info-name'>manifest 2020</h1>

                <h2>
                  <NumberLink popovertarget={'g-twelve'} number={'12'} />{' '}
                  <Popover
                    id={'g-twelve'}
                    src={graphicsData[11].src}
                    alt={graphicsData[11].alt}
                    popovertarget={'g-twelve'}
                  />
                </h2>
              </div>
              <div className='info-desc-wrapper'>
                <p className='graphics-desc'>exhibition marketing</p>
                <div className='tag-wrapper'>
                  <p className='graphics-tag'>print</p>
                </div>
              </div>
            </div>
          </div>
          <div className='graphics-gallery'>
            <ImageGrid graphics={graphicsData} />
          </div>
        </div>
      </Transitions>
    </>
  );
};

export default Graphics;
