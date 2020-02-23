import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import Search from './Search';
import TableRow from './TableRow';
import { actTakeInterns } from "./../actions/index";
import { connect } from 'react-redux';

class Index extends Component {

    componentDidMount() {
        // callApi("interns", "GET", null).then(res => {
        //     this.props.takeAllInterns(res.data);
        // })
        this.props.takeAllInterns(this.props.interns);
    }

    tabRow() {
        return this.props.interns.map(function(object, index) {
            return <TableRow obj={ object } index={ index } key={ index }></TableRow>
        })
    }
    
    render() {
        return (
            <div>
                <div className="title-search">
                    <Title title="List Interns"></Title>
                    <Search onSearch={ this.onSearch }></Search>
                </div>
                <div className="list-interns">
                    <table className="table table-striped table-intern">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">Name</th>
                                <th scope="col">School</th>
                                <th scope="col">Email</th>
                                <th scope="col">Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        
                        <tbody>
                            { this.tabRow() }
                        </tbody>
                    </table>
                </div>
                <Link to={"/create"} className="btn btn-primary">New Intern</Link>
            </div>
        );
    }
}
//lay tat ca interns tu store
const mapStateToProps = state => {
    return {
        interns: state.interns
    }
}
//luu len store
const mapDispatchToProps = (dispatch, props) => {
    return {
        takeAllInterns: (interns) => {
            dispatch(actTakeInterns(interns));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
