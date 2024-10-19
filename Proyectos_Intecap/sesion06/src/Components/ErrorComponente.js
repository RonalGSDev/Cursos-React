import React from "react";

const ErrorComponente = ({mensaje}) => {
    return(
        <div style={{background: '#ffebee', 
                     color: '#b71c1c', padding:'10px',
                     border:'1px solid #ffcdd2', borderRadius:'4px',
                     marginBottom:'10px'}}>
            {mensaje}
        </div>
    )
};

export default ErrorComponente;