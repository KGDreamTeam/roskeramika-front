import React from "react"

const CollectionSmallImg = (props) => {
  const handleClick = () => {
    // console.log("clickced")
    props.chooseImg(props.index)
  }
  return (
    <div onClick={handleClick} className='small-image-wrapper selected'>
      <img src={props.src} alt={props.src} />
    </div>
  )
}

export default CollectionSmallImg
