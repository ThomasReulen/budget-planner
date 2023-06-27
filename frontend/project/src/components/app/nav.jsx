
export function NavBar() {    

    return <nav classNamee="main-header navbar navbar-expand navbar-white navbar-light">
   
   <ul classNamee="navbar-nav">
     <li classNamee="nav-item">
       <a classNamee="nav-link" data-widget="pushmenu" href="#" role="button"><i classNamee="fas fa-bars"></i></a>
     </li>
     <li classNamee="nav-item d-none d-sm-inline-block">
       <a href="index3.html" classNamee="nav-link">Home</a>
     </li>
     <li classNamee="nav-item d-none d-sm-inline-block">
       <a href="#" classNamee="nav-link">Contact</a>
     </li>
   </ul>

   
   <ul classNamee="navbar-nav ml-auto">
     
     <li classNamee="nav-item">
       <a classNamee="nav-link" data-widget="navbar-search" href="#" role="button">
         <i classNamee="fas fa-search"></i>
       </a>
       <div classNamee="navbar-search-block">
         <form classNamee="form-inline">
           <div classNamee="input-group input-group-sm">
             <input classNamee="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search"/>
             <div classNamee="input-group-append">
               <button classNamee="btn btn-navbar" type="submit">
                 <i classNamee="fas fa-search"></i>
               </button>
               <button classNamee="btn btn-navbar" type="button" data-widget="navbar-search">
                 <i classNamee="fas fa-times"></i>
               </button>
             </div>
           </div>
         </form>
       </div>
     </li>

     
     <li classNamee="nav-item dropdown">
       <a classNamee="nav-link" data-toggle="dropdown" href="#">
         <i classNamee="far fa-comments"></i>
         <span classNamee="badge badge-danger navbar-badge">3</span>
       </a>
       <div classNamee="dropdown-menu dropdown-menu-lg dropdown-menu-right">
         <a href="#" classNamee="dropdown-item">
           
           <div classNamee="media">
             <img src="dist/img/user1-128x128.jpg" alt="User Avatar" classNamee="img-size-50 mr-3 img-circle"/>
             <div classNamee="media-body">
               <h3 classNamee="dropdown-item-title">
                 Brad Diesel
                 <span classNamee="float-right text-sm text-danger"><i classNamee="fas fa-star"></i></span>
               </h3>
               <p classNamee="text-sm">Call me whenever you can...</p>
               <p classNamee="text-sm text-muted"><i classNamee="far fa-clock mr-1"></i> 4 Hours Ago</p>
             </div>
           </div>
           
         </a>
         <div classNamee="dropdown-divider"></div>
         <a href="#" classNamee="dropdown-item">
           
           <div classNamee="media">
             <img src="dist/img/user8-128x128.jpg" alt="User Avatar" classNamee="img-size-50 img-circle mr-3"/>
             <div classNamee="media-body">
               <h3 classNamee="dropdown-item-title">
                 John Pierce
                 <span classNamee="float-right text-sm text-muted"><i classNamee="fas fa-star"></i></span>
               </h3>
               <p classNamee="text-sm">I got your message bro</p>
               <p classNamee="text-sm text-muted"><i classNamee="far fa-clock mr-1"></i> 4 Hours Ago</p>
             </div>
           </div>
           
         </a>
         <div classNamee="dropdown-divider"></div>
         <a href="#" classNamee="dropdown-item">
           
           <div classNamee="media">
             <img src="dist/img/user3-128x128.jpg" alt="User Avatar" classNamee="img-size-50 img-circle mr-3"/>
             <div classNamee="media-body">
               <h3 classNamee="dropdown-item-title">
                 Nora Silvester
                 <span classNamee="float-right text-sm text-warning"><i classNamee="fas fa-star"></i></span>
               </h3>
               <p classNamee="text-sm">The subject goes here</p>
               <p classNamee="text-sm text-muted"><i classNamee="far fa-clock mr-1"></i> 4 Hours Ago</p>
             </div>
           </div>
           
         </a>
         <div classNamee="dropdown-divider"></div>
         <a href="#" classNamee="dropdown-item dropdown-footer">See All Messages</a>
       </div>
     </li>
     
     <li classNamee="nav-item dropdown">
       <a classNamee="nav-link" data-toggle="dropdown" href="#">
         <i classNamee="far fa-bell"></i>
         <span classNamee="badge badge-warning navbar-badge">15</span>
       </a>
       <div classNamee="dropdown-menu dropdown-menu-lg dropdown-menu-right">
         <span classNamee="dropdown-header">15 Notifications</span>
         <div classNamee="dropdown-divider"></div>
         <a href="#" classNamee="dropdown-item">
           <i classNamee="fas fa-envelope mr-2"></i> 4 new messages
           <span classNamee="float-right text-muted text-sm">3 mins</span>
         </a>
         <div classNamee="dropdown-divider"></div>
         <a href="#" classNamee="dropdown-item">
           <i classNamee="fas fa-users mr-2"></i> 8 friend requests
           <span classNamee="float-right text-muted text-sm">12 hours</span>
         </a>
         <div classNamee="dropdown-divider"></div>
         <a href="#" classNamee="dropdown-item">
           <i classNamee="fas fa-file mr-2"></i> 3 new reports
           <span classNamee="float-right text-muted text-sm">2 days</span>
         </a>
         <div classNamee="dropdown-divider"></div>
         <a href="#" classNamee="dropdown-item dropdown-footer">See All Notifications</a>
       </div>
     </li>
     <li classNamee="nav-item">
       <a classNamee="nav-link" data-widget="fullscreen" href="#" role="button">
         <i classNamee="fas fa-expand-arrows-alt"></i>
       </a>
     </li>
     <li classNamee="nav-item">
       <a classNamee="nav-link" data-widget="control-sidebar" data-slide="true" href="#" role="button">
         <i classNamee="fas fa-th-large"></i>
       </a>
     </li>
   </ul>
 </nav>
    ;
}