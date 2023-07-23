
import { TransEditor } from '../transactions/editor';
import { TransOverview } from '../transactions/overview';
import { TransImport } from '../transactions/import';
import { TransCategories } from '../transactions/categories';
import { HashRouter, Routes, Route } from "react-router-dom";


export function App() {    

     return <>
                <HashRouter>
                    <Routes>
                        <Route exact path ="/" element={<TransOverview/>} />
                        <Route path ="/transactions/overview" element={<TransOverview/>}/>
                        <Route path ="/transactions/import" element={<TransImport/>}/>
                        <Route path ="/transactions/editor" element={<TransEditor/>} />                     
                        <Route path ="/transactions/categories" element={<TransCategories/>} />                     
                        <Route path="*" render={() => <Redirect to="/" />} />
                    </Routes>
                </HashRouter>
            </>;
}