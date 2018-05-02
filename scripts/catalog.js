'use strict';

/*
  This file contains extensions being used by the OpenShift Online Developer Preview
  They can be used as reference examples.
*/

/*
  Override the CLI download locations
*/
window.OPENSHIFT_CONSTANTS.CLI = {
  "Linux (32 bits)": "https://openshift.com/tbd_url/32bitlinux.tar.gz",
  "Linux (64 bits)": "https://openshift.com/tbd_url/64bitlinux.tar.gz",
  "Windows":         "https://openshift.com/tbd_url/win.zip",
  "Mac OS X":        "https://openshift.com/tbd_url/mac.zip"
};

// Find the Languages category.
var category = _.find(window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES,
  { id: 'languages' });
// Add Go as a new subcategory under Languages.
category.subCategories.splice(2,0,{ // Insert at the third spot.
// Required. Must be unique.
id: "go",
// Required.
label: "Go",
// Optional. If specified, defines a unique icon for this item.
icon: "icon-go-gopher",
// Required. Items matching any tag will appear in this subcategory.
tags: [
"go",
"golang"
]
});

// Add a Featured category as the first category tab.
window.OPENSHIFT_CONSTANTS.SERVICE_CATALOG_CATEGORIES.unshift({
// Required. Must be unique.
id: "acme",
// Required
label: "Acme",
subCategories: [
{
// Required. Must be unique.
id: "go",
// Required.
label: "Go",
// Optional. If specified, defines a unique icon for this item.
icon: "icon-go-gopher",
// Required. Items matching any tag will appear in this subcategory.
tags: [
"go",
"golang"
]
},
{
// Required. Must be unique.
id: "jenkins",
// Required.
label: "Jenkins",
// Optional. If specified, defines a unique icon for this item.
icon: "icon-jenkins",
// Required. Items matching any tag will appear in this subcategory.
tags: [
"jenkins"
]
}
]
});