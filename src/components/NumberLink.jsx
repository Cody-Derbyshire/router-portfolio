const NumberLink = ({ popovertarget, number }) => {
  return (
    <button
      className='number-link'
      popovertarget={popovertarget}
      popovertargetaction='show'
    >
      {number}
    </button>
  );
};

export default NumberLink;
