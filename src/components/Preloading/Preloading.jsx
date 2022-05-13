import React from "react";
import preloader from './Preloading.module.sass';
import preload from './../../assets/images/loading.svg';

const Preloading = (props) => {
  return(
    <div className={ preloader.preloader }>
      { props.isFetching 
      ? <img src={ preload } alt="preload" />
      : null}
    </div>
  )
}

export default Preloading;