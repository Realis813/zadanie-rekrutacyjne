import { CSSProperties } from "react";
import "./Color.scss"

export const Color = ({color}:{color:string}) => {
   
    return (
        
        <div>
            <div className="color-rectangle" style={{"--bg-color":color} as CSSProperties }>
             

            </div>
            <p>
                {
                    color.toUpperCase()
                }
            </p>
        </div>
     );
  };
  
 