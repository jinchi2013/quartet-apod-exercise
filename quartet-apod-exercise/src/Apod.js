import 'whatwg-fetch'
import React, { Component } from 'react'
import styled from 'styled-components'

import ApodContainer from './ApodContainer'


const Wrapper = styled.div`
  text-align: center;
  font-size: 32px;
  color: #2A9BD6;
`

export default class Apod extends Component {
	constructor(props) {
		super(props)
		this.state = {
			loading: true,
			error: false,
			json: null
		}
	}

	componentDidMount() {
		fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
			.then( response => response.json().then( json => {
				console.log(json)
				this.setState({
					loading: false,
					json: json
				})
			}), error => {
				this.setState({
					error: true
				})
			} )
	}

  render() {
  	const {
  		loading,
  		error,
  		json
  	} = this.state
    return (
    	<Wrapper>
				{
					loading || error ? 
						'Loading...' :
						<ApodContainer json={json} />
				}    	
    	</Wrapper>
    ) 
  }
}