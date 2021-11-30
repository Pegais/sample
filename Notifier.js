import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class notifier extends Component {
    render() {
        return (
            < div>
            < div className="card banner-card" >
                <div>
                    <h5 className="card-title">COWIN NOTIFIER</h5>
                    <Link to='/' style={{ display: 'flex', textDecoration: "none" }}><button type="button" class="btn btn-success">LOG OUT</button></Link>


</div>
                </div>


                <div >
                    <table className="table table-dark" style={{ width: "70rem", marginLeft: '15rem' }}>
                        <thead>
                        </thead>
                            <tbody>
                                {/* <tr >
                                    <h3>AVAILABLE CENTRES</h3>

                                </tr> */}

                                <tr>
                                    <td style={{ height: '5rem', fontWeight: 'bolder' }}>ADDRESS</td>
                                    <td style={{ fontWeight: 'bolder', height: '5rem' }}>Pin</td>

                                </tr>
                                <tr>

                                    <td >noida</td>
                                    <td>P221006</td>
                                </tr>
                                <tr>

                                    <td  >delhi</td>
                                    <td>110096</td>
                                </tr>
                            </tbody>
                    </table>
                </div >
            </div >
        )
    }
}
