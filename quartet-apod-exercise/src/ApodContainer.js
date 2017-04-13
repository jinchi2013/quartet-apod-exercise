import React, { Component } from 'react'
import styled from 'styled-components'

import ImgWidthControl from './ImgWidthControl'

class ApodContainer extends Component {
	constructor(props) {
		super(props)
		this.state = {
			largeScreen: true,
			imgWidth: '1000px'
		}

		this._handleWindowResize = this._handleWindowResize.bind(this)
		this._setImageWidth = this._setImageWidth.bind(this)
	}

	_handleWindowResize() {
		if(this.state.largeScreen && window.innerWidth <= 1000) {
			this.setState({
				largeScreen: false
			})
		} else if(!this.state.largeScreen && window.innerWidth > 1000) {
			this.setState({
				largeScreen: true
			})
		}
	}

	_setImageWidth (width) {
		if(width !== this.state.imgWidth) {
			this.setState({
				imgWidth: width
			})
		}
	}

	componentDidMount() {
		if(window.innerWidth <= 1000) {
			this.setState({
				largeScreen: false
			})
		}

		window.addEventListener('resize', this._handleWindowResize)
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this._handleWindowResize)
	}

	render() {
		const Wrapper = styled.div`
			text-align: center;
			color: black;

			img {
				width: ${this.state.imgWidth};
				height:	auto;
			}

			div {
				font-size: 20px;
				width: 100%;

				@media (min-width: 1024px) {
					width: 1024px;
					margin: auto;
				} 
			}

			p {
				font-size: 12px;
			}
		`

		const { 
			json 
		} = this.props

		const { 
			largeScreen,
			imgWidth 
		} = this.state

		return(
			<Wrapper>
				<h5>{json.title}</h5>
				<h6>{json.date}</h6>
				<ImgWidthControl imgWidth={imgWidth} _setImageWidth={this._setImageWidth} />
				<img src={ largeScreen ? json.hdurl : json.url } />
				<div><b>Explanation: </b>{json.explanation}</div>
				<p> &copy; {json.copyright}</p>
			</Wrapper>
		)
	}
}

export default ApodContainer
