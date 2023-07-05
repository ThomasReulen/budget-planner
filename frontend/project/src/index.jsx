import 'bootstrap';
// or: 
// import 'bootstrap/js/dist/util';
// import 'bootstrap/js/dist/dropdown';

import $ from 'jquery';
window.$ = window.jQuery = $;

// import 'jquery-ui/ui/widgets/datepicker.js';
import '@popperjs/core';

import '@adminlte/dist/js/adminlte.min.js';


// import '../node_modules/admin-lte/plugins/datatables/jquery.dataTables.min.js';
// import '../node_modules/admin-lte/plugins/datatables-bs4/js/dataTables.bootstrap4.min.js';
// import '../node_modules/admin-lte/plugins/datatables-responsive/js/dataTables.responsive.min.js';
// import '../node_modules/admin-lte/plugins/datatables-responsive/js/responsive.bootstrap4.min.js';
// import '../node_modules/admin-lte/plugins/select2/js/select2.full.min.js';

import '@fortawesome/fontawesome-free/js/fontawesome'
import '@fortawesome/fontawesome-free/js/solid'
import '@fortawesome/fontawesome-free/js/regular'
import '@fortawesome/fontawesome-free/js/brands'


import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from './components/app/app';

import './index.scss';


const root = createRoot(document.getElementById('root'));
root.render(<App />);

// wait for page to load 
// window.addEventListener('load', function(event) {  

  // create container for app
//   const container = document.createElement('div')
//   container.className = "wrapper";
//   document.body.insertAdjacentElement('afterbegin',container);
//   document.body.className = "hold-transition sidebar-mini";
  
//   // create react root
//   const root = createRoot(document.getElementById("root"); 
//   root.render(<StrictMode><App /></StrictMode>);
  
// });



