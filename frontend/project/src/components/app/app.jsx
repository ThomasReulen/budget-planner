
import { TransEditor } from '../transactions/editor';
import { TransOverview } from '../transactions/overview';
import { TransImport } from '../transactions/import';
import { BrowserRouter, Routes, Route } from "react-router-dom";


export function App() {    

     return <>
                <BrowserRouter>                
                    <Routes>
                        <Route exact path ="/" element={<TransOverview/>} />
                        <Route path ="/transactions/editor" element={<TransEditor/>} />                     
                        <Route path ="/transactions/overview" element={<TransOverview/>}/>
                        <Route path ="/transactions/import" element={<TransImport/>}/>
                        <Route path="*" render={() => <Redirect to="/" />} />
                    </Routes>
                </BrowserRouter>
            </>;
}