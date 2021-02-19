import React from 'react';
import {Link} from 'react-router-dom'

class Footer extends React.Component{
    render(){
        return(
           <div>
               <Link to="/pins/new" id="plus-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 172 172"
                        style={{fill:"#000000"}}><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,171.14c-47.02152,0 -85.14,-38.11848 -85.14,-85.14v0c0,-47.02152 38.11848,-85.14 85.14,-85.14h0c47.02152,0 85.14,38.11848 85.14,85.14v0c0,47.02152 -38.11848,85.14 -85.14,85.14z" fill="#eee8e8"></path><g fill="#000000"><path d="M85.89922,44.62806c-3.79697,0.05564 -6.83098,3.17686 -6.77904,6.97388v27.51929h-27.51929c-2.48111,-0.03509 -4.78892,1.26847 -6.03971,3.41152c-1.2508,2.14305 -1.2508,4.79356 0,6.93661c1.2508,2.14305 3.5586,3.44661 6.03971,3.41152h27.51929v27.51929c-0.03509,2.48111 1.26847,4.78892 3.41152,6.03971c2.14305,1.2508 4.79356,1.2508 6.93661,0c2.14305,-1.2508 3.44661,-3.5586 3.41152,-6.03971v-27.51929h27.51929c2.48111,0.03509 4.78892,-1.26847 6.03971,-3.41152c1.2508,-2.14305 1.2508,-4.79356 0,-6.93661c-1.2508,-2.14305 -3.5586,-3.44661 -6.03971,-3.41152h-27.51929v-27.51929c0.02542,-1.85844 -0.70209,-3.64811 -2.01695,-4.96171c-1.31487,-1.3136 -3.10524,-2.03939 -4.96365,-2.01218z"></path></g></g></svg>
               </Link>
               <div id="question-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                        width="30" height="30"
                        viewBox="0 0 172 172"
                        style={{fill:"#000000"}}><g transform=""><g fill="none" fillRule="nonzero" stroke="none" strokeWidth="1" strokeLinecap="butt" strokeLinejoin="miter" strokeMiterlimit="10" strokeDasharray="" strokeDashoffset="0" fontFamily="none" fontWeight="none" fontSize="none" textAnchor="none" style={{mixBlendMode:"normal"}}><path d="M0,172v-172h172v172z" fill="none"></path><path d="M86,172c-47.49649,0 -86,-38.50351 -86,-86v0c0,-47.49649 38.50351,-86 86,-86v0c47.49649,0 86,38.50351 86,86v0c0,47.49649 -38.50351,86 -86,86z" fill="#e5e0e0"></path><g fill="#000000"><path d="M86.36573,37.152c-20.18237,0 -31.62749,11.30761 -31.95314,27.67576v0.8189h17.81712v-0.8189c0.39078,-7.2295 5.39217,-11.89398 12.9514,-11.89398c7.4941,0 12.49027,4.33284 12.49027,10.44698c0,6.11414 -2.56408,9.27088 -11.04327,14.33479c-9.07352,5.32443 -12.69317,11.24197 -11.83833,21.76058l0.10335,2.80653h17.4514v-2.67138c0,-6.30953 2.43464,-9.53732 11.17843,-14.59716c9.26891,-5.45876 14.06447,-12.35848 14.06447,-22.2217c0,-15.18766 -12.41929,-25.64043 -31.2217,-25.64043zM83.99647,114.49467c-6.6881,0 -10.86041,3.88265 -10.86041,10.20847c0,6.26883 4.17638,10.14487 10.86041,10.14487c6.68403,0 10.80476,-3.87604 10.80476,-10.14487c0,-6.32581 -4.11665,-10.20847 -10.80476,-10.20847z"></path></g></g></g></svg>
               </div>
           </div>
        )
    }
}

export default Footer