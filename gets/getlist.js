"use strict";
var request = require("request");
var fs = require("fs");

const LISTSITE = 'https://cryptofresh.com/api/holders?asset=EGEM';

var data = {};

function getRlist(){
	request(LISTSITE, (error, response)=>{
		try{
			var dataCoin = JSON.parse(response);
		} catch (e) {
			console.log("Api BTS Assets Problem: " + e);
			return
		}
		var rList = body.dataCoin;
		console.log(rList);

		fs.writeFile("data/rlist.txt",body,(err)=>{
			if(err) throw err;
			//console.log('File with block was updated');
		});
	});
}
module.exports = getRlist;