

export function getLocationId(event) {
	return event.target.id;
}


export function getLocationName(event) {
    debugger;
    return event.target.attributes.name.value;
   
}


export function getLocationSelected(event) {
    return event.target.attributes['aria-checked'].value === 'true';
}