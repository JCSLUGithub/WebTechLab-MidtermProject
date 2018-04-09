/*const searchHeader = document.getElementByID('search-header');
const searchInput = document.getElementByID('Srearch');

searchHeader.addEventListener('submit', e => {
	//Get search term
	const searchTerm = searchInput.value;
	// Check input
	if(searchTerm === '') {
		//show message
		showMessage ('Empty search, add t xt', 'alert-danger');
	}
	//Clear Input after search
	searchInput.value = '';
	e.preventDefault();

});

//show message
function showMessage (message, className) {
	//create div
	const div = document.createElement('div');
	//add class
	div.ClassName = `alert ${className}`;
	//add text
	div.appendChild(document.createTextNode(message));
	//get parent
	const seaerchContainer =document.getElementById ('search-container');
	//get search
	const searchBody = document.getElementById('search-body');

	//insert message
	seaerchContainer.inserBefore(div, searchBody);

	//timout alert
	setATimeout(() => document.querySelector('.alert').remove(), 3000);
}
}*/
/*function showList1() {
    var x = document.getElementById("gym-1");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showList2() {
    var x = document.getElementById("gym-2");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showList3() {
    var x = document.getElementById("gym-3");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showList4() {
    var x = document.getElementById("gym-4");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function showList5() {
    var x = document.getElementById("gym-5");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}*/

function showList(divId) {

    /* Hide all divs */
    var elements = document.getElementsByTagName('class');

    for (var i = 0; i < elements.length; i++) {
        elements[i].style.display = "none";
    }

    /* Set display */
    var theDiv = document.getElementById(divId);
    theDiv.style.display = "";
}

/*
(function () {
    'use strict';

    function onPositionReceived(position) {
        console.log(position);
    }

    function locationNotReceived(positionError){
        console.log(positionError);
    }
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPostion(onPositionReceived, locationNotReceived);
        navigator.geolocation.watchPosition(onPositionReceived, locationNotReceived);
    }
})}());

var x = document.getElementByID("myLocation");
function getMyLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPostion(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}
function showPosition(position) {
    x.innerHTML = position.coords.latitude + position.coors.longitude;
    }
}
}*/
/*
    function initMap(){
        var location = {}
        var map = new google.maps.Map(document.getElementById("map"), {
            zoom: 4, center: location
        });
        var marker = new google.maps.Marker({
            position: location, map: map
        });

    }
*/
    function initMap(){
        var options = {
        zoom:15,
        center:{lat:16.4023, lng:120.5960}
        }
        
        
        var map = new google.maps.Map(document.getElementsById('map'), options);
        addMarker({lat:16.4117,lng:120.5905})
        addMarker({lat:16.4142,lng:120.5941})
        addMarker({lat:16.4090,lng:120.5993})
        addMarker({lat:16.4126,lng:120.5974})
        addMarker({lat:16.4118,lng:120.5981})
        addMarker({lat:16.4120,lng:120.5986})
        addMarker({lat:16.4140,lng:120.5967})
        addMarker({lat:16.4225,lng:120.5957})
        addMarker({lat:16.4038,lng:120.5941})
        addMarker({lat:16.4182,lng:120.5964})
        addMarker({lat:16.3824,lng:120.6042})
        addMarker({lat:16.4150,lng:120.5879})
        addMarker({lat:16.4030,lng:120.6055})
        addMarker({lat:16.4210,lng:120.5967})

        function addMarker(coords) {
        var marker = new google.maps.Marker({
        position:coords,
        map:map
        });
        }

        
    }