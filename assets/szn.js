var chance = 5;

function toggleModal(val) {
	var modal = document.querySelector('.fool-modal-wrapper');
	var body = document.querySelector('body');
	if (val === true || val === false) {
		modal.style.display = val ? 'block': 'none';
		body.style.overflow = val ? 'hidden' : '';
	}
	else {
		if (modal.style.display == 'block') {
			modal.style.display = 'none';
			body.style.overflow = 'hidden';
		} else {
			modal.style.display = 'block';
			body.style.overflow = '';
		}
	}
}

function closeForever() {
	document.cookie = 'fool=notme';
	toggleModal();
}

(function() {
	var d = new Date();
	if(window.location.hostname == 'localhost') {
		toggleModal(true);
	} else if(d.getMonth() == 3 && d.getDate() == 1) {
		// definitely show on first load, then random chance.
<<<<<<< HEAD
		if (document.cookie.indexOf('fool=notme') > -1) {
			toggleModal(false);
		} else if(document.cookie.indexOf("fool=me") == -1) {
=======
		if(document.cookie.indexOf("fool=me") == -1) {
>>>>>>> 48ecf7ee3d9b57f096577a77200fc30b83bd3f01
			toggleModal(true);
			document.cookie = "fool=me";
		} else if (Math.random() < (1 / chance)) {
			toggleModal(true);
		}
	}
	
	document.querySelector('.closebtn').addEventListener('click', toggleModal);
	document.querySelector('.helptext').addEventListener('click', closeForever);

	setTimeout(function() {
		document.querySelector('.closebtn').style.display = 'block';
	}, 3000);

	setTimeout(function() {
		document.querySelector('.helptext').style.visibility = 'visible';
	}, 5000);
})();