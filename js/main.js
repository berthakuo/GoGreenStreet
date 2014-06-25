// ***********************************************
// Global Variables
// ***********************************************
allSponsors = {
	"Dwelltime": {address:"364 Broadway Cambridge,MA", deal:"10% off your purchase", website:"http://www.dwelltimecambridge.com",category:["Auto"], neighborhood:"Central"},
	"Darwins":{address:"453 Cambridge St. Cambridge,MA", deal:"Free small coffee", website:"http://www.darwinsltd.com",category:["Food"], neighborhood:"Central"}
};

filteredResults={};
filteredParam={};
filteredResults={};

// ***********************************************
// Functions
// ***********************************************
// consider passing an entire object to this function
function addNewSponsor(cateogory,address,deal,website,cateogory){
	this[placeName] = {address:address, deal:deal, website:website, cateogory:cateogory};
}

function detNumSponsors(){
	var numSponsors = 0;
	for (key in this){
		if (this[key].deal){			//make sure that undefined/null returns false
			numSponsors++;
		}
	}
	return numSponsors;
}

//you need to make this a function of the object prototype
Object.prototype.listSponsors = function(){
	$("ul").empty();

	for (key in this){
		if (this[key].deal){
			$("ul").append("<li>"+ 
			"<a href=" + this[key].website + ">" + key + "</a>" + 
			"<br>" + this[key].address + 
			"<br>" + this[key].deal + "</li>")			
		}
	}
}

// filterParam.getFilterParam = function(){				
// 	console.log("poop");
// 	console.log(this);
// 	// temp = $(".category").val();
// 	this.category = $(".category").val();
// 	this.neighborhood = $(".neighborhood").val();
// }

function getFilterParam(){
	tempObject={};
	tempObject.category = $(".category").val();
	tempObject.neighborhood = $(".neighborhood").val();
	return tempObject;
}

allSponsors.getFilterResults = function(filterCategories){		//can I do this, define arguments in funct. expressions
	var newArray = {};
	// console.log("poop")
	for(item in filterCategories){
		for(key in this){
			// console.log("filtercategory " + filterCategories[item]);
			// console.log("item in allsponsors " + this[key][item]);
			if(jQuery.inArray(filterCategories[item],this[key][item]) != -1){
				newArray[key] = this[key]; 	//i need a function that pulls out the repeats
			}
		}	
	}
	return newArray;
}

function parentFxn(){
	filteredParam = getFilterParam();
	filteredResults = allSponsors.getFilterResults(filteredParam);
	filteredResults.listSponsors();
}


// ***********************************************
// Script
// ***********************************************
allSponsors.listSponsors();
// var filteredResults = allSponsors.filter(filterParam);
// var poop = $("select").val()
// console.log(poop)

// ***********************************************
// Event Handlers
// ***********************************************
$(".button").click(parentFxn);			












