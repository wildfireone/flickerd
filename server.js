/**
 * @Author: John Isaacs <john>
 * @Date:   31-Jul-182018
 * @Filename: server.js
 * @Last modified by:   john
 * @Last modified time: 01-Aug-182018
 */
 var Flickr = require('flickr-sdk');

var flickr = new Flickr(process.env.FLICKR_API_KEY);
 // create a new feeds instance


 // get the most recent public photos
 flickr.people.getPhotos({user_id:'55336091@N08'}).then(function (res) {
   var photolist = res.body['photos']['photo'];
   for( var i in photolist){
     //console.log(photolist[i]);
     var pid = photolist[i].id;
     flickr.photos.geo.getLocation({photo_id:pid}).then(function(loc){console.log(loc)}, function (err) {
     	console.log('got error', err.message);
     });
   }

 }, function (err) {
 	console.log('got error', err.message);
 });
