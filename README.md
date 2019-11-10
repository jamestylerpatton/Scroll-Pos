# ScrollPos.js

Utility to get percentage scrolled inside a container.

```bash
git clone https://github.com/jamestylerpatton/Scroll-Pos.git
```

## Usage

```javascript
import { ScrollPos } from 'ScrollPos'

let options = {
	// top or bottom of window hits top of element
	// default : "bottom"
	start: 'top',
	// top or bottom of window hits bottom of element
	// default : "bottom"
	end: 'top'
};

ScrollPos(
	'#target-element',
	value => {
		// value returns float between 0 and 1
		document.getElementById('target-element').style.opacity = 1 - value
	},
	options
)
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License
[MIT](https://choosealicense.com/licenses/mit/)