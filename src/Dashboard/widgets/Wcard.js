import React, { Component, Fragment } from 'react';
import '../../style/Dashboard/Wcard.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';



class Wcard extends Component {
    render() {
        return (
           <Fragment>
            <div class="cardContainer">
   <div class="block cardIcon">
   <FontAwesomeIcon icon={faUser} size='2x'/>
   </div>
   <div class="block cardBody">
      <div class="cardTitle"> Total User</div>
      <div className="cardProgres"></div>
   </div>
</div></Fragment>

        );
    }
}

export default Wcard;