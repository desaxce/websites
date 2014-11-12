var css_ref_id;
if (css_ref_id == null) css_ref_id=1;

function ShopWidget()
{
	this.designId = "gallery";
	this.height = "250";
	this.width = "300";
	//this.domain = getHostname(document.getElementById('sdcWidgetGenerator').getAttribute('src'));

	this.requestParameters = new Object();
	this.requestParameters.apiKey = "";
	this.requestParameters.trackingId = "";

	this.isValid = false;
    this.widgetUrl = "";
}

ShopWidget.prototype.validate = function()
{
	// Is this a valid component
	this.isValid = false;

	try
	{	
	// If 'textlike' design change to active template
		if (this.designId == "textlike") {
			this.designId = "googlelikewithprice";
		}

		// check for valid input
		var validInput = false;

		// get random position for rotation of dynamic nav parameters
		var numKeywords = this.requestParameters.keyword ? this.requestParameters.keyword.length : 0;
		var numCategories = this.requestParameters.categoryId ? this.requestParameters.categoryId.length : 0;
		if (numKeywords || numCategories) {
			var index = Math.floor(Math.random() * Math.max(numKeywords, numCategories));

			var keyword = numKeywords > index ? this.requestParameters.keyword[index] : undefined;
			this.requestParameters.keyword = keyword;
			if (keyword && keyword.length)
				validInput = true;

			var categoryId = numCategories > index ? this.requestParameters.categoryId[index] : undefined;
			this.requestParameters.categoryId = categoryId;
			if (categoryId && categoryId.length)
				validInput = true;

			var numAttributeValues = this.requestParameters.attributeValue ? this.requestParameters.attributeValue.length : 0;
			var attributeValue = numAttributeValues > index ? this.requestParameters.attributeValue[index] : undefined;
			this.requestParameters.attributeValue = attributeValue;
		}
		else {
			this.requestParameters.keyword = undefined;
			this.requestParameters.categoryId = undefined;
			this.requestParameters.attributeValue = undefined;
		}

		if (this.requestParameters.productId && this.requestParameters.productId.length > 0)
		{
			// get random position for rotation of product IDs
			var index = Math.floor(Math.random() * this.requestParameters.productId.length);
			var productId = this.requestParameters.productId[index];
			this.requestParameters.productId = productId;
			if (productId && productId.length > 0)
				validInput = true;
		}

		if (this.requestParameters.offerId && this.requestParameters.offerId.length > 0)
		{
			// get random position for rotation of offer IDs
			var index = Math.floor(Math.random() * this.requestParameters.offerId.length);
			var offerId = this.requestParameters.offerId[index];
			this.requestParameters.offerId = offerId;
			if (offerId && offerId.length > 0)
				validInput = true;
		}

		if (!validInput)
			throw "Need valid search parameter";
	}
	catch(e)
	{
		this.errorMessage = e;
		this.isValid = false;
		return false;
	}

	// If we have the necessary parameters, we can render an ad.  
	this.errorMessage = null;
	this.isValid = true;
	return true;
}

ShopWidget.prototype.render = function(elem)
{
	if (this.designId == "textlike") { this.designId = "googlelikewithprice"; }
	if (!elem) { elem = document.getElementById('sdcWidgetContent'); }
	var widgetUrl;
    var apiHostName = "publisher.api.shopping.com";
    var localProxyUrl = document.getElementById("sdcWidgetGenerator").src;
	var useSandboxDomain = localProxyUrl.indexOf("useSandboxDomain=true") != -1;
    var useDocumentDomain = localProxyUrl.indexOf("useDocumentDomain=true") != -1;
    var useAnotherDomain = localProxyUrl.indexOf("useAnotherDomain=") != -1;
    if (useSandboxDomain) {
        apiHostName = "sandbox.api.shopping.com";
    } else if (useDocumentDomain) {
        apiHostName = document.domain;
    } else if (useAnotherDomain) {
        apiHostName = localProxyUrl.split("useAnotherDomain=")[1];
    }

	// Unless we already have a URL, validate other parameters, and build URL
	if (this.url && this.url.length) {
		widgetUrl = this.url;
	} else {
		this.validate();
		if (!this.isValid) return;

		// base request URL
		widgetUrl = "http://" + apiHostName + "/AdSearchService/adSearch?showProductOffers=true";
        if (! this.requestParameters.hasOwnProperty("designId") ) {
            widgetUrl += "&designId=" + encodeURIComponent(this.designId);
        }

		// loop through request parameters
		for (var property in this.requestParameters) {
			if (this.requestParameters.hasOwnProperty(property)) {
				// loop through values if multiple (separated by '||')
				if (this.requestParameters[property]) {
					var paramValues = this.requestParameters[property].split("||");
					for (var index = 0; index < paramValues.length; index++) {
						widgetUrl += "&" + property + "=" + encodeURIComponent(paramValues[index]);
					}
				}
			}
		}
	}
	// add visitorUserAgent and isECNWidgetCall params
	widgetUrl+= "&isECNWidgetCall=true&visitorUserAgent="+encodeURIComponent(navigator.userAgent).replace("(","%28").replace(")", "%29");

    this.widgetUrl = widgetUrl + "&rand="+Math.random();

	elem.innerHTML =
		"<iframe id='sdcWidget' style='border: none !important; margin:0;padding:0;' frameborder='0' src='" + this.widgetUrl + "' height='" + (this.height) + "' width='" + (this.width) + "' /></iframe>";
	//"<object id='sdcWidget' style='overflow: hidden; ' type='text/html' data='" + 
	//widgetUrl + "' height='" + this.height + "' width='" + this.width + "' />";

}