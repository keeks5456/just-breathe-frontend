import Axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';

class IntroJournal extends React.Component{
    state = {
        content: ""
    }

    // componentDidMount(){
    //     Axios.get("http://localhost:3000/api/v1/journal_entries")
    //     .then(res => console.log(res))
    // }

    onChange = (e) =>{
        console.log(e.target.value)

        this.setState({
            [e.target.name]: e.target.value})
    }

    handleSubmit = (e) =>{
        console.log(e)
        const content = this.state.content
        e.preventDefault()

    }
    



    render(){
        const {content} = this.state
        return(
            <div>
                <h1>Intro Journal</h1>
                <p>Before you begin your adventures into <b>Just Breath,</b> please take a few minutes to write down anything you wish to express!</p>

                <p>This is a safe space to let out any negative thoughts, emotions, frustrations, and all of the above that have hindered you to feel at peace with yourself! </p>

                <form className="textarea-form" 
                onSubmit={this.handleSubmit}>
                <label htmlFor='content'>What's On Your Mind Today!</label>
                <br/><br/>
                <textarea
                id="content"
                name="content"
                rows="5" 
                cols="33"
                form="userform"
                value={content}
                onChange={this.onChange}
                placeholder="Express Yourself"
                ></textarea>
                <br/> 
                <button className="submit-button">Submit</button>
                </form>
            </div>
        )
    }
}

export default IntroJournal