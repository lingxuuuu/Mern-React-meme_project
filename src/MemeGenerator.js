import React, {Component} from 'react'

class MemeGenerator extends Component {
    constructor(){
        super()
        this.state={
            topText:'',
            bottomText:'',
            randomImg:'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }
    }

    componentDidMount(){
      fetch('http://api.imgflip.com/get_memes')
        .then(response => response.json())
        .then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({ allMemeImgs: memes})
        })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({ [name]: value })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg }) 
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input type = 'text' 
                           name='topText' 
                           value={this.state.topText}
                           placeholder='Top Text' 
                           onChange={this.handleChange} /> <br/>
                    <input type = 'text' 
                           name='bottomText' 
                           value={this.state.bottomText}
                           placeholder='Bottom Text' 
                           onChange={this.handleChange} /> <br/>
                    <button>Generate</button>
                </form>
                <div>
                    <img src={this.state.randomImg} alt='' />
                    <h2> {this.state.topText} </h2>
                    <h2> {this.state.bottomText} </h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator