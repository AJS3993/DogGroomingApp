
import React, {Component} from 'react';
import NavBar from "../../Components/NavBar/NavBar";
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
        
        <div className="form-container">
        
        <form 
        // ref={this.formRef} autoComplete="off" onSubmit={this.handleSubmit}
        >
        <header ><h3>Enter Your Dog's information</h3></header>
          
        
          
            <label>Name</label>
            <input
              className="form-control"
            //   name="name"
            //   value={this.state.formData.name}
            //   onChange={this.handleChange}
              required
            />
          
        

        
            <label>Age</label>
            <input
              className="form-control"
              type='number'
            //   name="name"
            //   value={this.state.formData.name}
            //   onChange={this.handleChange}
              required
            />
          

         
            <label>Size</label>
            <select className="form-control" id="Size" name="size">
  <option value="Toy">Toy (0-12lbs)</option>
  <option value="Small">Small (12-25lbs)</option>
  <option value="Medium">Medium (25-50lbs)</option>
  <option value="Large">Large (50-100lbs)</option>
  <option value="Extra">Extra Large (100+lbs)</option>
</select>
         

         
            <label>Color</label>
            <input
              className="form-control"
            //   name="name"
            //   value={this.state.formData.name}
            //   onChange={this.handleChange}
              required
            />
    

         
            <label>Details</label>
            <input
              className="form-control"
            //   name="details"
            //   value={this.state.formData.name}
            //   onChange={this.handleChange}
              required
            />
       
        

          
          <button
          
            type="submit"
            className="btn"
            disabled={this.state.invalidForm}
          >
            ADD
          </button>
        </form>
        </div>
     
      </>
    );
  }
}

export default Add;