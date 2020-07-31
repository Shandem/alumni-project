import React, { Component } from 'react';
import './Gform.scss'

class Gform extends Component {
state = {
    title: ''
    }

    handleSubmit = (event) => {
    event.preventDefault();

   /* PostModel.create(this.state)
        .then(data => {
        this.props.history.push('/post')
        })*/
    }

    handleChange = (event) => {
    if (event.target.type !== "text") {
        this.setState({ completed: !this.state.completed })
    }

    this.setState({
        [event.target.name]: event.target.value
    })
    }
    render() {
        return (
            <div className='gform' >
            <h2 className="ftitle">New Craft</h2>
                <form onSubmit={this.handleSubmit} >
                    <div className="form-input gTitle">
                        <label htmlFor="title">Title</label>
                        <input 
                        type="text" 
                        name="title" 
                        onChange={this.handleChange}
                        value={this.state.title} />
                    </div>
                    
                    <div className="form-input gPrice">
                        <label htmlFor="price">Price</label>
                        <input 
                        type="text" 
                        name="price" 
                        onChange={this.handleChange}
                        value={this.state.price} />
                    </div>
                    <div className="form-input gHeight">
                        <label htmlFor="height">Height</label>
                        <input 
                        type="text" 
                        name="height" 
                        onChange={this.handleChange}
                        value={this.state.height} />
                    </div>
                    <div className="form-input">
                        <label htmlFor="width">Width</label>
                        <input 
                        type="text" 
                        name="width" 
                        onChange={this.handleChange}
                        value={this.state.width} />
                    </div>
                    <div className="form-input gDescription">
                        <label htmlFor="body">Description
                            <textarea type="text" 
                                    name="body" 
                                    onChange={this.handleChange}
                                    value={this.state.body} />
                        </label>
                    </div>
                    <input type="submit" value="Save!" className="saveButton"/>
                </form>
                
            </div>
        );
    }
}

export default Gform;
