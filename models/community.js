"use strict";
 
const mongoose = require('./db');
const schema = mongoose.Schema;
const user = require('./user');
 
const organization = 
{
     _id: schema.Types.ObjectId,
     orgName: String,
     orgAdmin: [{type: schema.Types.ObjectId, ref: 'user' }],
     orgDesc: String,
     orgMods: String,
     orgType: {type:String, enum:['PRIVATE', 'PUBLIC']}    
     
};
 
const communitySchema = new schema(organization);

const community = mongoose.model('Community',communitySchema);

class communityModel
{
        
     
     
}
 
module.exports = communityModel;
