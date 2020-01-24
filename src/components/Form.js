import React from 'react';

// sateless form component (sfc command)
const  Form = props => {            //passes props to the app
    return ( 
        <div>
            <form onSubmit={props.submit}>
                <input 
                type="text" 
                value={props.value}   // props takes event value 
                onChange={props.change} //updates value on change
                placeholder="Type in City Name"
                />  
                <button>Search</button>
            </form>
        </div>
     );
}
 
export default Form;