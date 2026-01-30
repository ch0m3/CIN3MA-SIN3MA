export function NavBar ({about, movies, admin, home}){
    return(
     <nav className="app-nav">
         <div className="nav-list">
        
          <button className={home}>Home</button>
          <button className={about}>About</button>
          <button className={movies}>Movies</button>
          <button className={admin}>Admin</button>
          <section></section>
          <p>We are a small cinema focused on promoting local filmmakers, journalists and the creative sector in all forms</p>
        
         </div>


    </nav>
    )

}