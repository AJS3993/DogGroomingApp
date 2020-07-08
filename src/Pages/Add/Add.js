
import React, {Component} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
import  {Form}  from 'react-bootstrap';
import './Add.css'


class Add extends Component {
  state = {
    invalidForm: true,
    formData: {
      name: '',
      age: '',
      weight: '',
      color: '',
      details: ''
    }
  };

  formRef = React.createRef();

//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.props)
//     this.props.handleAddItem(this.state.formData);
    
//   };

//   handleChange = e => {
//     const formData = {...this.state.formData, [e.target.name]: e.target.value};
//     this.setState({
//       formData,
//       invalidForm: !this.formRef.current.checkValidity()
//     });
//   };


  render() {
    return (
      <>
      <NavBar/>
        
        <Form>
        <header className="header-footer"><h3>Enter Your Dog's information</h3></header>
        <form className="form-horizontal" ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}>
          
          
          <Form.Group>
          <div className="col-sm-12">
            <label>Name</label>
            <Form.Control
              type= 'text'
            //   name="name"
            //   value={this.state.formData.name}
            //   onChange={this.handleChange}
              required
            />
          </div>
          </Form.Group>

         
          
          <button
          
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD
          </button>
        </form>
        </Form>
     
      </>
    );
  }
}

export default Add;