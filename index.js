(function () {
	const convertBtn = document.querySelector('.btn-convert')
	const rgbForm = document.querySelector('.rgb')
	const hexContent = document.querySelector('.hex-content')

	const rColor = document.querySelector('.r-color')
	const gColor = document.querySelector('.g-color')
	const bColor = document.querySelector('.b-color')
	const hexColor = document.querySelector('.hex-color')

	const rInput = document.getElementById('r-input')
	const gInput = document.getElementById('g-input')
	const bInput = document.getElementById('b-input')
	const hexInput = document.getElementById('hex-input')

	convertBtn.addEventListener('click', function (event) {
		event.preventDefault()

	  const rValue = rInput.value
		const gValue = gInput.value
		const bValue = bInput.value

		if (rValue == '' || gValue == '' || bValue == '') {
			alert("Please Enter All RGB Value")
		} else if (Number(rValue) < 0 || Number(rValue) > 255 || isNaN(rValue)) {
			alert("Please Enter R-Value Between 0 And 255")
		} else if (Number(gValue) < 0 || Number(gValue) > 255 || isNaN(gValue)) {
			alert("Please Enter G-Value Between 0 And 255")
		} else if (Number(bValue) < 0 || Number(bValue) > 255 || isNaN(bValue)) {
			alert("Please Enter B-Value Between 0 And 255")
		} else {
			const rgb = [rValue, gValue, bValue]
			const hex = '#' + decToHex(rgb)
			// console.log(hex)
			showHexText(hex)
			showRGBColor(rgb)
			showHexColor(hex)
		}

	})

	rgbForm.addEventListener('blur', (event) => {
		const rValue = rInput.value
		const gValue = gInput.value
		const bValue = bInput.value
    if (event.target.matches('#r-input')) {
    	if (rValue !== '' && Number(rValue) > 0 && Number(rValue) < 255) {
				rColor.style.backgroundColor = `rgb(${Number(rValue)}, 0, 0)`
			}
    } else if (event.target.matches('#g-input')) {
	    	if (gValue !== '' && Number(gValue) > 0 && Number(gValue) < 255) {
					gColor.style.backgroundColor = `rgb(0, ${Number(gValue)}, 0)`
				}
    } else if (event.target.matches('#b-input')) {
	    	if (bValue !== '' && Number(bValue) > 0 && Number(bValue) < 255) {
					bColor.style.backgroundColor = `rgb(0, 0, ${Number(bValue)})`
				}
    }
  }, true)

	function decToHex (rgb) {
		let hexValue = ''
		for (i = 0; i < rgb.length; i++) {
			hexValue += ('0' + Number(rgb[i]).toString(16)).slice(-2)
		}
		console.log(hexValue)
		return hexValue
	}

	function showHexText (hex) {
		let htmlContent = hex
		hexContent.innerHTML = htmlContent 
	}

	function showRGBColor (rgb) {
		rColor.style.backgroundColor = `rgb(${rgb[0]}, 0, 0)`
		gColor.style.backgroundColor = `rgb(0, ${rgb[1]}, 0)`
		bColor.style.backgroundColor = `rgb(0, 0, ${rgb[2]})`
	}

	function showHexColor (hex) {
		hexColor.style.backgroundColor = hex
	}

})()