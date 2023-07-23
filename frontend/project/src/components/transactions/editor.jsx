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

    onDrag = (event, tr) => {
        console.log(event);
        event.target.style.opacity = '0.4';
        
        this.setState({
            draggedTransaction: tr
        });
    }

    onDragOver = (event) => {
        // event.preventDefault();
        console.log(event);
    }

    onDrop = (event) => {
        const { draggedTask } = this.state.draggedTransaction;
        console.log(event);
        console.log(draggedTask);   
        event.target.style.opacity = '1';
        this.setState({
            draggedTransaction: {},
        })
    }
    render() {
        return <div className="card card-row card-secondary">
            <div className="card-header">
                <h3 className="card-title">
                    Q {this.state.quarter} / {this.state.monthNr}
                </h3>
            </div>
            <div className="card-body">
                <div className="card">
                    <div className="card-header">
                        
                    </div>
                    <div className="card-body">
                        <ul className="todo-list" data-widget="todo-list" onDragOver={(event => this.onDragOver(event))}>
                            {
                                transactionObject[this.state.monthNr].transactions.map((tr,i) => {
                                    
                                    return <li draggable onDragStart={(event) => this.onDrag(event, tr)} onDrop={(event) => this.onDrop(event, tr)} key={i}>

                                        <span className="handle">
                                            <i className="fas fa-ellipsis-v"></i>
                                            <i className="fas fa-ellipsis-v"></i>
                                        </span>

                                        <span className="text">{tr.value}<br/>paypal</span>                                        

                                    </li>;
                                })
                            }
                        </ul>
                    </div>

                    <div className="card-footer clearfix">
                        <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus"></i> Add item</button>
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

                <section className="content pb-3">
                    <div className="container-fluid h-100">

                        <TransEditorMonth quarter={this.state.quarter} month={((this.state.quarter - 1) * 3) + 1} />
                        <TransEditorMonth quarter={this.state.quarter} month={((this.state.quarter - 1) * 3) + 2} />
                        <TransEditorMonth quarter={this.state.quarter} month={((this.state.quarter - 1) * 3) + 3} />

                    </div>
                </section>
            </div>
        </>
            ;


    }

}