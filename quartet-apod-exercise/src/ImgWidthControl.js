import React, { Component } from 'react'
import styled from 'styled-components'

class ImgWidthControl extends Component {
	constructor(props) {
		super(props)
		this._keypressHandler = this._keyupHandler.bind(this)
		this._handleInputBlur = this._handleInputBlur.bind(this)
	}

	_keyupHandler(e) {
		e.preventDefault();
		if(e.keyCode === 13) {
			e.target.blur()
		}
	}

	_handleInputBlur (e) {

		const value = parseInt(e.target.value.trim())

		if(value !== '' && typeof value === 'number' && !isNaN(value)) {
			this.props._setImageWidth(value + 'px')
			e.target.value = ''
		} else {
			alert('Please Enter a number, thanks!')
		}
	}

	render() {
		const Wrapper = styled.div`
			padding: 15px;

			input {
				width: 200px;
				height: 20px;
				vertical-align: bottom;
			}

			p {
				font-size: 15px;
			}
		`

		const { 
			imgWidth
		} = this.props

		return (
			<Wrapper>
				<span>Enter Your Image Width: </span>
				<input name='imgWidth' onBlur={ this._handleInputBlur } onKeyUp={this._keyupHandler}  type='number' ref = {input => this.imgWidthInput = input} />
				<p>Press Enter or Blur the Input will resize the image</p>
			</Wrapper>
		)
	}
}

export default ImgWidthControl