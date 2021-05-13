import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Loader from "react-loader-spinner";
import DepartmentForm from './DepartmentForm';
import NavLink from './Nav';
import styled from 'styled-components';
import { fetchDepartments } from '../actions';

const MainContainer = styled.div`
  background: linear-gradient(to top, rgba(80, 68, 18, 0.6) 10%, transparent),
    url(https://wallpapersite.com/images/pages/pic_h/2350.jpg) center/cover
      no-repeat border-box,
    skyblue;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  text-align: center;
`;


class Main extends React.Component {
    componentDidMount(){
        this.props.fetchDepartments();
    };

    render() {
        // console.log(this.props, '<<< this.props')
        const { departments, fetching } = this.props;
        if (fetching) {
            return (
              <div>
                <Loader type="Circles" color="green" height="100" width="100" />
              </div>
            );
          }
        return(
            <MainContainer>
                <NavLink/>
                <div>List of departments</div>
                <div className="dept">
                {
                    departments.length > 0 ? departments.map((department, index)=>{
                        return <div key={index}>{department.name}</div>
                    }) : 
                    <div>NO DATA</div>
                }
                </div>

                <Route path="/add-dept" render={props => <DepartmentForm { ...props }/> } />
            </MainContainer>
        )
    }
};

const mapStateToProps =(state) =>({
    departments: state.departmentState.departments,
    fetching: state.departmentState.fetching
});

export default connect(mapStateToProps, { fetchDepartments })(Main);