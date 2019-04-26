// container: querySelector for div to apply sections to
// hidden: (optional) whether the sections should be collapsed by default. Default false.
function sections(container, hidden) {
	if (hidden == undefined) hidden = false;
	// Get all the <h2> and <h3> headings in the container
	const headings = document.querySelectorAll(container + ' h2,' + container + ' h3');
	
	Array.prototype.forEach.call(headings, heading => {
		// append classname to heading for styles
		// FIXME Does not work in IE9 or below
		heading.classList.add('collapsible');

		// Give each <h2>/<h3> a toggle button child
		// with the SVG plus/minus icon
		heading.innerHTML = `
		<button aria-expanded="${!hidden}">
			${heading.textContent}
			<svg aria-hidden="${hidden}" focusable="true" viewBox="0 0 10 10">
			<rect class="vert" height="8" width="2" y="1" x="4"/>
			<rect height="2" width="8" y="4" x="1"/>
			</svg>
		</button>
		`
		
		// Function to create a node list 
		// of the content between this <h2> and the next
		const getContent = (elem) => {
		let elems = [], tag = elem.tagName
		while (elem.nextElementSibling && elem.nextElementSibling.tagName !== tag && elem.nextElementSibling.tagName !== 'H2') {
			elems.push(elem.nextElementSibling);
			elem = elem.nextElementSibling;
		}
	
		// Keeps the last HR element
		let last = elems.pop();
		if (last.tagName !== 'HR') {
			elems.push(last);
		}
		
		// Delete the old versions of the content nodes
		elems.forEach((node) => {
			node.parentNode.removeChild(node);
		})
		return elems;
		}
		
		// Assign the contents to be expanded/collapsed (array)
		let contents = getContent(heading);
		
		// Create a wrapper element for `contents` and hide it
		let wrapper = document.createElement('div');
		wrapper.classList.add();
		wrapper.hidden = hidden;
		
		// Add each element of `contents` to `wrapper`
		contents.forEach(node => {
			wrapper.appendChild(node);
		})
		
		// Add the wrapped content back into the DOM 
		// after the heading
		heading.parentNode.insertBefore(wrapper, heading.nextElementSibling);
		
		// Assign the button
		let btn = heading.querySelector('button');
		
		btn.onclick = () => {
			// Cast the state as a boolean
			let expanded = btn.getAttribute('aria-expanded') === 'true' || false;
			
			// Switch the state
			btn.setAttribute('aria-expanded', !expanded);
			// Switch the content's visibility
			wrapper.hidden = expanded;
		}
	})
	}