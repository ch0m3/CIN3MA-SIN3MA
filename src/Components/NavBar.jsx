import { NavLink } from "react-router-dom";
import './NavBar.css';
export function NavBar (){
    return(
     <nav className="app-nav">
         <div className="nav-list">
            
     
        <button>
          <NavLink to="/home" className="nav-btn">
            Home
          </NavLink>
        </button>
        

        <button>
             <NavLink to="/about" className="nav-btn">
                About
            </NavLink>
        </button>
           
        <button>
            <NavLink to="/" className="nav-btn">
                Movies
            </NavLink>
        </button>

        <button>
             <NavLink to="/admin" className="nav-btn">
               Admin
             </NavLink>
        </button>
        
         
        
         </div>


    </nav>
    );

}