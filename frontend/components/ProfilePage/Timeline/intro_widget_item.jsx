import React from 'react'
import { Link } from 'react-router-dom'

class IntroWidgetItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    if (this.props.valContent === null || this.props.valContent === '') {
      switch (this.props.valName) {
        case "current city":
        case "hometown":
          return <Link to={`/user/${this.props.profId}/about/places`}><p> Add {this.props.valName} </p> </Link>
        case "work":
        case "education":
          return <Link to={`/user/${this.props.profId}/about/work`}><p> Add {this.props.valName} </p> </Link>
        case "favorite quote":
        case "relationship status":
          return <Link to={`/user/${this.props.profId}/about/details`}><p> Add {this.props.valName} </p> </Link>
        default:
          return <Link to={`/user/${this.props.profId}/about/`}><p> Add {this.props.valName} </p> </Link>
      }
    } else {
      return (
       <p> {this.props.valContent} </p>
      )
    }


  }
}

export default IntroWidgetItem
