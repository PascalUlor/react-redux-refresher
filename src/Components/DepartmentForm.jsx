import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { addDepartment } from '../actions';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50rem;
  /* background-color: #fafafa; */
  margin: 0 auto;
  margin-top: 0;
`;

const FormStyle = styled.form`
  width: 50%;
  margin: 5rem auto;
  border: 2px solid lightgrey;
  padding: 4rem;
`;

const FormInput = styled.input`
  color: #000;
  font-weight: 100;
  width: 90%;
  display: block;
  padding: 0.5rem;
  background-color: rgba(242, 241, 239, 1);
  border: 2px solid rgba(242, 241, 239, 1);
  -webkit-transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  transition: all 0.3s cubic-bezier(0.64, 0.09, 0.08, 1);
  background-position: -800px 0;
  background-size: 100%;
  background-repeat: no-repeat;
  font-family: "Montserrat", sans-serif;
  margin: auto;
  margin-bottom: 1em;
  &:focus {
    outline: none;
    border: 1px solid rgba(189, 195, 199, 1);
  }
`;


const DepartmentForm = (props)=>{
  console.log(props, '<<< === props ===|||')
    const { addDepartment } = props;
    const [department, setDepartment] = useState({
        name: '',
        email: '',
        phone: '',
    });

    const createDepartment = (e) =>{
        e.preventDefault();
        let newDepartment = {
            name: department.name,
            email: department.email,
            phone: department.phone,
        };
        addDepartment(newDepartment)
    }
    
    const handleInputChange = (e)=>{
        const target = e.target;
        const value = target.value;
        const name = target.name;
        setDepartment(dept=> ({ ...department, [name]: value}));
    };


    return (
        <Container>
            <FormStyle onSubmit={createDepartment}>
              <h1>Add Department</h1>
              <FormInput
                onChange={handleInputChange}
                placeholder="name"
                value={department.name}
                name="name"
              />
              <FormInput
                onChange={handleInputChange}
                placeholder="email"
                value={department.email}
                name="email"
              />
              <FormInput
                onChange={handleInputChange}
                placeholder="phone"
                value={department.phone}
                name="phone"
              />
              <button type="submit">Add Department</button>
            </FormStyle>
        </Container>
      );
};

const mapStateToProps = state =>{
    return {
        departments: state.departmentState.departments,
        fetching: state.departmentState.fetching
    };
};

export default connect(
    mapStateToProps, { addDepartment }
)(DepartmentForm);