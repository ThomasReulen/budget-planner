import React from "react";

import { NavBar } from '../app/nav';
import { SideBar } from '../app/sidebar';

let transactionObject = {
    "1": {
        "month": "Januar",
        "transactions": [
            {
                "date": "2023-01-01 00:00:00.000",
                "sort": "1000",
                "value": "23,20",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "paypal",
                    "essen",
                    "haushalt"
                ]
            },
            {
                "date": "2023-01-02 00:00:00.000",
                "sort": "2000",
                "value": "86,50",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "tanken",
                    "haushalt"
                ]
            },
            {
                "date": "2023-01-03 00:00:00.000",
                "sort": "3000",
                "value": "44,50",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "amazon",
                    "privat",
                ]
            },
            {
                "date": "2023-01-03 00:00:00.000",
                "sort": "4000",
                "value": "4500,00",
                "accountid": "1",
                "type": "income",
                "tags": [
                    "lohn",
                    "privat",
                ]
            },
            {
                "date": "2023-01-04 00:00:00.000",
                "sort": "5000",
                "value": "1500,00",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "haushalt",
                ]
            },
        ]
    },
    "2": {
        "month": "Februar",
        "transactions": [
            {
                "date": "2023-01-01 00:00:00.000",
                "sort": "1000",
                "value": "23,20",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "paypal",
                    "essen",
                    "haushalt"
                ]
            },
            {
                "date": "2023-01-02 00:00:00.000",
                "sort": "2000",
                "value": "86,50",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "tanken",
                    "haushalt"
                ]
            },
            {
                "date": "2023-01-03 00:00:00.000",
                "sort": "3000",
                "value": "44,50",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "amazon",
                    "privat",
                ]
            },
            {
                "date": "2023-01-03 00:00:00.000",
                "sort": "4000",
                "value": "4500,00",
                "accountid": "1",
                "type": "income",
                "tags": [
                    "lohn",
                    "privat",
                ]
            },
            {
                "date": "2023-01-04 00:00:00.000",
                "sort": "5000",
                "value": "1500,00",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "haushalt",
                ]
            },]
    },
    "3": {
        "month": "März",
        "transactions": [
            {
                "date": "2023-01-01 00:00:00.000",
                "sort": "1000",
                "value": "23,20",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "paypal",
                    "essen",
                    "haushalt"
                ]
            },
            {
                "date": "2023-01-02 00:00:00.000",
                "sort": "2000",
                "value": "86,50",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "tanken",
                    "haushalt"
                ]
            },
            {
                "date": "2023-01-03 00:00:00.000",
                "sort": "3000",
                "value": "44,50",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "amazon",
                    "privat",
                ]
            },
            {
                "date": "2023-01-03 00:00:00.000",
                "sort": "4000",
                "value": "4500,00",
                "accountid": "1",
                "type": "income",
                "tags": [
                    "lohn",
                    "privat",
                ]
            },
            {
                "date": "2023-01-04 00:00:00.000",
                "sort": "5000",
                "value": "1500,00",
                "accountid": "1",
                "type": "expense",
                "tags": [
                    "haushalt",
                ]
            },]
    },
}

class TransEditorMonth extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            monthNr: 1,
            quarter: 1,
            transactionEntries: []
        };

        if (this.props.month) {
            this.state.monthNr = this.props.month;            
        }
        if (this.props.quarter) {
            this.state.quarter = this.props.quarter;
        }
    }

    render() {


        return <div className="card card-row card-secondary">
            <div className="card-header">
                <h3 className="card-title">
                    Q {this.state.quarter} / {this.state.monthNr}
                </h3>
            </div>
            <div className="card-body">
                <div className="card card-info card-outline">
                    <div className="card-header">
                        <h5 className="card-title">Create Labels</h5>
                        <div className="card-tools">                            
                            <a href="#" className="btn btn-tool">
                                <i className="fas fa-pen"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body">                        
                    </div>
                </div>
                <div className="card card-primary card-outline">
                    <div className="card-header">
                        <h5 className="card-title">Create Issue template</h5>
                        <div className="card-tools">                            
                            <a href="#" className="btn btn-tool">
                                <i className="fas fa-pen"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body">                        
                    </div>
                </div>
                <div className="card card-primary card-outline">
                    <div className="card-header">
                        <h5 className="card-title">Create PR template</h5>
                        <div className="card-tools">                            
                            <a href="#" className="btn btn-tool">
                                <i className="fas fa-pen"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body">                        
                    </div>
                </div>
                <div className="card card-light card-outline">
                    <div className="card-header">
                        <h5 className="card-title">Create Actions</h5>
                        <div className="card-tools">                            
                            <a href="#" className="btn btn-tool">
                                <i className="fas fa-pen"></i>
                            </a>
                        </div>
                    </div>
                    <div className="card-body">
                        <p>
                            Lorem ipsum                            
                        </p>
                    </div>
                </div>
            </div>
        </div>
        ;

    }
}

export class TransEditor extends React.Component {

    constructor() {
        super();
        this.state = {
            quarter: "1",
            transactions: transactionObject
        };
    }

    render() {
        return <>
            <NavBar></NavBar>
            <SideBar></SideBar>
            <div className="content-wrapper kanban">
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-6">
                                <h1>edit transactions</h1>
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

                <TransEditorMonth quarter={this.state.quarter} month={((this.state.quarter - 1) * 3) + 1} />
                <TransEditorMonth quarter={this.state.quarter} month={((this.state.quarter - 1) * 3) + 2} />
                <TransEditorMonth quarter={this.state.quarter} month={((this.state.quarter - 1) * 3) + 3} />

                <section className="content pb-3">
                    <div className="container-fluid h-100">
                        {/*               

                      <div className="card card-row card-secondary">
                        <div className="card-header">
                          <h3 className="card-title">
                            Q1
                          </h3>
                        </div>
                        <div className="card-body">
                          <div className="card card-info card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Labels</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#3</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1" disabled/>
                                <label htmlFor="customCheckbox1" className="custom-control-label">Bug</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox2" disabled/>
                                <label htmlFor="customCheckbox2" className="custom-control-label">Feature</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox3" disabled/>
                                <label htmlFor="customCheckbox3" className="custom-control-label">Enhancement</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox4" disabled/>
                                <label htmlFor="customCheckbox4" className="custom-control-label">Documentation</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox5" disabled/>
                                <label htmlFor="customCheckbox5" className="custom-control-label">Examples</label>
                              </div>
                            </div>
                          </div>
                          <div className="card card-primary card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Issue template</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#4</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1_1" disabled/>
                                <label htmlFor="customCheckbox1_1" className="custom-control-label">Bug Report</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1_2" disabled/>
                                <label htmlFor="customCheckbox1_2" className="custom-control-label">Feature Request</label>
                              </div>
                            </div>
                          </div>
                          <div className="card card-primary card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create PR template</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#6</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card card-light card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Actions</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#7</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
              
                            </div>
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="card card-row card-secondary">
                        <div className="card-header">
                          <h3 className="card-title">
                            Q2
                          </h3>
                        </div>
                        <div className="card-body">
                          <div className="card card-info card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Labels</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#3</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1" disabled/>
                                <label htmlFor="customCheckbox1" className="custom-control-label">Bug</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox2" disabled/>
                                <label htmlFor="customCheckbox2" className="custom-control-label">Feature</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox3" disabled/>
                                <label htmlFor="customCheckbox3" className="custom-control-label">Enhancement</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox4" disabled/>
                                <label htmlFor="customCheckbox4" className="custom-control-label">Documentation</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox5" disabled/>
                                <label htmlFor="customCheckbox5" className="custom-control-label">Examples</label>
                              </div>
                            </div>
                          </div>
                          <div className="card card-primary card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Issue template</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#4</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1_1" disabled/>
                                <label htmlFor="customCheckbox1_1" className="custom-control-label">Bug Report</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1_2" disabled/>
                                <label htmlFor="customCheckbox1_2" className="custom-control-label">Feature Request</label>
                              </div>
                            </div>
                          </div>
                          <div className="card card-primary card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create PR template</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#6</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card card-light card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Actions</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#7</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
              
                            </div>
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>


                      <div className="card card-row card-secondary">
                        <div className="card-header">
                          <h3 className="card-title">
                            Q3
                          </h3>
                        </div>
                        <div className="card-body">
                          <div className="card card-info card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Labels</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#3</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1" disabled/>
                                <label htmlFor="customCheckbox1" className="custom-control-label">Bug</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox2" disabled/>
                                <label htmlFor="customCheckbox2" className="custom-control-label">Feature</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox3" disabled/>
                                <label htmlFor="customCheckbox3" className="custom-control-label">Enhancement</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox4" disabled/>
                                <label htmlFor="customCheckbox4" className="custom-control-label">Documentation</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox5" disabled/>
                                <label htmlFor="customCheckbox5" className="custom-control-label">Examples</label>
                              </div>
                            </div>
                          </div>
                          <div className="card card-primary card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Issue template</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#4</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                            <div className="card-body">
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1_1" disabled/>
                                <label htmlFor="customCheckbox1_1" className="custom-control-label">Bug Report</label>
                              </div>
                              <div className="custom-control custom-checkbox">
                                <input className="custom-control-input" type="checkbox" id="customCheckbox1_2" disabled/>
                                <label htmlFor="customCheckbox1_2" className="custom-control-label">Feature Request</label>
                              </div>
                            </div>
                          </div>
                          <div className="card card-primary card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create PR template</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#6</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="card card-light card-outline">
                            <div className="card-header">
                              <h5 className="card-title">Create Actions</h5>
                              <div className="card-tools">
                                <a href="#" className="btn btn-tool btn-link">#7</a>
                                <a href="#" className="btn btn-tool">
                                  <i className="fas fa-pen"></i>
                                </a>
                              </div>
              
                            </div>
                            <div className="card-body">
                              <p>
                                Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                                Aenean commodo ligula eget dolor. Aenean massa.
                                Cum sociis natoque penatibus et magnis dis parturient montes,
                                nascetur ridiculus mus.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                       */}
                    </div>
                </section>
            </div>
        </>
            ;


    }

}