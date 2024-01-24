const Popover = ({ id, src, alt, popovertarget }) => {
  return (
    <div id={id} className='pop-wrapper' popover='auto'>
      <img className='pop-img' src={src} alt={alt} />
      <button
        className='number-link'
        popovertarget={popovertarget}
        popovertargetaction='hide'
      >
        close
      </button>
    </div>
  );
};

export default Popover;
