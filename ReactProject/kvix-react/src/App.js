import './App.css';
import React, { Component } from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

class App extends Component {

  state = { programs: [],
            value: null, }

  async getJson() {
    try {
      await fetch('/json')
        .then((response) => response.json())
        .then(programs => this.setState({ programs })
          );
    }
    catch (error) {
      console.log(error);
    }
  }

  componentDidMount() {
    this.getJson();
  }

  render() {
    return (
      <div className="App">
        
        {this.state.programs.length ? (
          <div>
            <Autocomplete id="MyAutoComplete"
              value = {this.state.value}
              onChange = {(event, newValue) =>{
                this.setState({value: newValue})
              }}
              options={this.state.programs}
              groupBy={(program) => program.level}
              getOptionLabel={(program) => program.title}
              style={{ width: 300 }}
              renderInput={(params) => <TextField {...params} label="Program" variant="outlined" />}
            />
          </div>
          
        ) : (
            <div>
              <textarea>My TextArea</textarea>
            </div>
          )}
          <div>{`${this.state.value != null ? `'${this.state.value.title}'` : 'Titel'}`}</div>
          <div>{`${this.state.value != null ? `'${this.state.value.description}'` : 'Beskrivning'}`}</div>
        <br />
      </div>
    );
  }

}
export default App;
