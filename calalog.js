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