import React, {Component} from 'react';



class ErrorBoundary extends Component{
    constructor(props){
    super(props)
    this.state = {
        hasError:false
    }


}

componentDidCatch(error, info){
this.setState({hasError:true})

}

render(){

    if(this.state.hasError){

        <h1>  OOOPS THERE IS AN ERROR </h1>
    }
    //render whatever is inside errorboundary
    return this.props.children
}


}

export default ErrorBoundary;