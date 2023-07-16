import { NavBar } from '../app/nav';
import { SideBar } from '../app/sidebar'; 


 export function TransImport() {

    return  <>   
              <NavBar></NavBar> 
              <SideBar></SideBar>
              <div className="content-wrapper kanban">
                <section className="content-header">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-sm-6">
                        <h1>Import Bookings</h1>
                      </div>
                      <div className="col-sm-6 d-none d-sm-block">
                        <ol className="breadcrumb float-sm-right">
                          <li className="breadcrumb-item"><a href="#">Home</a></li>
                          <li className="breadcrumb-item active">Bookings</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </section>
            
                <section className="content pb-3">
                  <div className="container-fluid h-100">

                    
                  </div>
                </section>
              </div>
            </>
            
 }