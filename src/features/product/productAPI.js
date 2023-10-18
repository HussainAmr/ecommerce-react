// A mock function to mimic making an async request for data
export function fetchAllProducts() {
	return new Promise(async (resolve) => {
		const response = await fetch("http://localhost:8080/products");
		const data = await response.json();
		resolve({ data });
	});
}

export function fetchProductsByFilters(filter, sort) {
	//filter = {"category":["smartphone", "laptops"]}
	//sort = {_sort: "price", _order="dsec"}
	//todo: on server we will suppport multiple values in filter

	let queryString = "";
	for (let key in filter) {
		const categoryValues = filter[key];
		if (categoryValues.length) {
			const lastCategoryValue = categoryValues[categoryValues.length - 1];
			//& is for handling on or more query
			queryString += `${key}=${lastCategoryValue}&`;
		}
	}

	for (let key in sort) {
		queryString += `${key}=${sort[key]}&`;
	}

	return new Promise(async (resolve) => {
		const response = await fetch(
			"http://localhost:8080/products?" + queryString
		);
		const data = await response.json();
		resolve({ data });
	});
}
