// This file is generated

"use strict";
export const ObjectResult = validate11;
const schema12 = {"type":"object","properties":{"jsonrpc":{"type":"string"},"result":{"type":"object","nullable":true},"id":{"type":"integer"}},"additionalProperties":false,"required":["jsonrpc","id"]};

function validate11(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if(((data.jsonrpc === undefined) && (missing0 = "jsonrpc")) || ((data.id === undefined) && (missing0 = "id"))){
validate11.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs1 = errors;
for(const key0 in data){
if(!(((key0 === "jsonrpc") || (key0 === "result")) || (key0 === "id"))){
delete data[key0];
}
}
if(_errs1 === errors){
if(data.jsonrpc !== undefined){
let data0 = data.jsonrpc;
const _errs2 = errors;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
validate11.errors = [{instancePath:instancePath+"/jsonrpc",schemaPath:"#/properties/jsonrpc/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["jsonrpc"] = coerced0;
}
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.result !== undefined){
let data1 = data.result;
const _errs4 = errors;
if((!(data1 && typeof data1 == "object" && !Array.isArray(data1))) && (data1 !== null)){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if((data1 && typeof data1 == "object" && !Array.isArray(data1)) && (data1 === null)){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(data1 === "" || data1 === 0 || data1 === false){
coerced1 = null;
}
else {
validate11.errors = [{instancePath:instancePath+"/result",schemaPath:"#/properties/result/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["result"] = coerced1;
}
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.id !== undefined){
let data2 = data.id;
const _errs7 = errors;
if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2))){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 === "boolean" || data2 === null
              || (dataType2 === "string" && data2 && data2 == +data2 && !(data2 % 1))){
coerced2 = +data2;
}
else {
validate11.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data !== undefined){
data["id"] = coerced2;
}
}
}
var valid0 = _errs7 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
else {
validate11.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate11.errors = vErrors;
return errors === 0;
}

export const BooleanResult = validate12;
const schema13 = {"type":"object","properties":{"jsonrpc":{"type":"string"},"result":{"type":"boolean","nullable":true},"id":{"type":"integer"}},"additionalProperties":false,"required":["jsonrpc","id"]};

function validate12(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if(((data.jsonrpc === undefined) && (missing0 = "jsonrpc")) || ((data.id === undefined) && (missing0 = "id"))){
validate12.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs1 = errors;
for(const key0 in data){
if(!(((key0 === "jsonrpc") || (key0 === "result")) || (key0 === "id"))){
delete data[key0];
}
}
if(_errs1 === errors){
if(data.jsonrpc !== undefined){
let data0 = data.jsonrpc;
const _errs2 = errors;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
validate12.errors = [{instancePath:instancePath+"/jsonrpc",schemaPath:"#/properties/jsonrpc/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["jsonrpc"] = coerced0;
}
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.result !== undefined){
let data1 = data.result;
const _errs4 = errors;
if((typeof data1 !== "boolean") && (data1 !== null)){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if((typeof data1 === "boolean") && (data1 === null)){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(data1 === "false" || data1 === 0 || data1 === null){
coerced1 = false;
}
else if(data1 === "true" || data1 === 1){
coerced1 = true;
}
else if(data1 === "" || data1 === 0 || data1 === false){
coerced1 = null;
}
else {
validate12.errors = [{instancePath:instancePath+"/result",schemaPath:"#/properties/result/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["result"] = coerced1;
}
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.id !== undefined){
let data2 = data.id;
const _errs7 = errors;
if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2))){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 === "boolean" || data2 === null
              || (dataType2 === "string" && data2 && data2 == +data2 && !(data2 % 1))){
coerced2 = +data2;
}
else {
validate12.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data !== undefined){
data["id"] = coerced2;
}
}
}
var valid0 = _errs7 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
else {
validate12.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate12.errors = vErrors;
return errors === 0;
}

export const StringResult = validate13;
const schema14 = {"type":"object","properties":{"jsonrpc":{"type":"string"},"result":{"type":"string","nullable":true},"id":{"type":"integer"}},"additionalProperties":false,"required":["jsonrpc","id"]};

function validate13(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if(((data.jsonrpc === undefined) && (missing0 = "jsonrpc")) || ((data.id === undefined) && (missing0 = "id"))){
validate13.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs1 = errors;
for(const key0 in data){
if(!(((key0 === "jsonrpc") || (key0 === "result")) || (key0 === "id"))){
delete data[key0];
}
}
if(_errs1 === errors){
if(data.jsonrpc !== undefined){
let data0 = data.jsonrpc;
const _errs2 = errors;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
validate13.errors = [{instancePath:instancePath+"/jsonrpc",schemaPath:"#/properties/jsonrpc/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["jsonrpc"] = coerced0;
}
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.result !== undefined){
let data1 = data.result;
const _errs4 = errors;
if((typeof data1 !== "string") && (data1 !== null)){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if((typeof data1 === "string") && (data1 === null)){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 == "number" || dataType1 == "boolean"){
coerced1 = "" + data1;
}
else if(data1 === null){
coerced1 = "";
}
else if(data1 === "" || data1 === 0 || data1 === false){
coerced1 = null;
}
else {
validate13.errors = [{instancePath:instancePath+"/result",schemaPath:"#/properties/result/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["result"] = coerced1;
}
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.id !== undefined){
let data2 = data.id;
const _errs7 = errors;
if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2))){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 === "boolean" || data2 === null
              || (dataType2 === "string" && data2 && data2 == +data2 && !(data2 % 1))){
coerced2 = +data2;
}
else {
validate13.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data !== undefined){
data["id"] = coerced2;
}
}
}
var valid0 = _errs7 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
else {
validate13.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate13.errors = vErrors;
return errors === 0;
}

export const ErrorResult = validate14;
const schema15 = {"type":"object","properties":{"jsonrpc":{"type":"string"},"error":{"type":"object","properties":{"code":{"type":"integer"},"message":{"type":"string"}},"additionalProperties":false,"required":["code","message"]},"id":{"type":"integer"}},"additionalProperties":false,"required":["jsonrpc","error","id"]};

function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if((((data.jsonrpc === undefined) && (missing0 = "jsonrpc")) || ((data.error === undefined) && (missing0 = "error"))) || ((data.id === undefined) && (missing0 = "id"))){
validate14.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs1 = errors;
for(const key0 in data){
if(!(((key0 === "jsonrpc") || (key0 === "error")) || (key0 === "id"))){
delete data[key0];
}
}
if(_errs1 === errors){
if(data.jsonrpc !== undefined){
let data0 = data.jsonrpc;
const _errs2 = errors;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
validate14.errors = [{instancePath:instancePath+"/jsonrpc",schemaPath:"#/properties/jsonrpc/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["jsonrpc"] = coerced0;
}
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.error !== undefined){
let data1 = data.error;
const _errs4 = errors;
if(errors === _errs4){
if(data1 && typeof data1 == "object" && !Array.isArray(data1)){
let missing1;
if(((data1.code === undefined) && (missing1 = "code")) || ((data1.message === undefined) && (missing1 = "message"))){
validate14.errors = [{instancePath:instancePath+"/error",schemaPath:"#/properties/error/required",keyword:"required",params:{missingProperty: missing1},message:"must have required property '"+missing1+"'"}];
return false;
}
else {
const _errs6 = errors;
for(const key1 in data1){
if(!((key1 === "code") || (key1 === "message"))){
delete data1[key1];
}
}
if(_errs6 === errors){
if(data1.code !== undefined){
let data2 = data1.code;
const _errs7 = errors;
if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){
let dataType1 = typeof data2;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType1 = typeof data2;
if(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2))){
coerced1 = data2;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 === "boolean" || data2 === null
              || (dataType1 === "string" && data2 && data2 == +data2 && !(data2 % 1))){
coerced1 = +data2;
}
else {
validate14.errors = [{instancePath:instancePath+"/error/code",schemaPath:"#/properties/error/properties/code/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced1 !== undefined){
data2 = coerced1;
if(data1 !== undefined){
data1["code"] = coerced1;
}
}
}
var valid1 = _errs7 === errors;
}
else {
var valid1 = true;
}
if(valid1){
if(data1.message !== undefined){
let data3 = data1.message;
const _errs9 = errors;
if(typeof data3 !== "string"){
let dataType2 = typeof data3;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data3) && data3.length == 1){
data3 = data3[0];
dataType2 = typeof data3;
if(typeof data3 === "string"){
coerced2 = data3;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 == "number" || dataType2 == "boolean"){
coerced2 = "" + data3;
}
else if(data3 === null){
coerced2 = "";
}
else {
validate14.errors = [{instancePath:instancePath+"/error/message",schemaPath:"#/properties/error/properties/message/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced2 !== undefined){
data3 = coerced2;
if(data1 !== undefined){
data1["message"] = coerced2;
}
}
}
var valid1 = _errs9 === errors;
}
else {
var valid1 = true;
}
}
}
}
}
else {
validate14.errors = [{instancePath:instancePath+"/error",schemaPath:"#/properties/error/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.id !== undefined){
let data4 = data.id;
const _errs11 = errors;
if(!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))){
let dataType3 = typeof data4;
let coerced3 = undefined;
if(dataType3 == 'object' && Array.isArray(data4) && data4.length == 1){
data4 = data4[0];
dataType3 = typeof data4;
if(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4))){
coerced3 = data4;
}
}
if(!(coerced3 !== undefined)){
if(dataType3 === "boolean" || data4 === null
              || (dataType3 === "string" && data4 && data4 == +data4 && !(data4 % 1))){
coerced3 = +data4;
}
else {
validate14.errors = [{instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced3 !== undefined){
data4 = coerced3;
if(data !== undefined){
data["id"] = coerced3;
}
}
}
var valid0 = _errs11 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
else {
validate14.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate14.errors = vErrors;
return errors === 0;
}

export const OperationStatus = validate15;
const schema16 = {"type":"string","enum":["WAITING","ADDED","STARTED","SUCCEEDED","FAILED","UNKNOWN"]};

function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(typeof data !== "string"){
let dataType0 = typeof data;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data) && data.length == 1){
data = data[0];
dataType0 = typeof data;
if(typeof data === "string"){
coerced0 = data;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data;
}
else if(data === null){
coerced0 = "";
}
else {
validate15.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data = coerced0;
if(parentData !== undefined){
parentData[parentDataProperty] = coerced0;
}
}
}
if(!((((((data === "WAITING") || (data === "ADDED")) || (data === "STARTED")) || (data === "SUCCEEDED")) || (data === "FAILED")) || (data === "UNKNOWN"))){
validate15.errors = [{instancePath,schemaPath:"#/enum",keyword:"enum",params:{allowedValues: schema16.enum},message:"must be equal to one of the allowed values"}];
return false;
}
validate15.errors = vErrors;
return errors === 0;
}

export const OperationStatusInfo = validate16;
const schema17 = {"type":"object","properties":{"operationId":{"type":"string"},"name":{"type":"string"},"generation":{"type":"number"},"status":{"$ref":"naming#/definitions/OperationStatus"},"added":{"type":"integer","nullable":true},"completed":{"type":"integer","nullable":true},"errorCode":{"type":"string","nullable":true},"errorMessage":{"type":"string","nullable":true}},"additionalProperties":false,"required":["operationId","name","generation","status"]};

function validate16(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if(((((data.operationId === undefined) && (missing0 = "operationId")) || ((data.name === undefined) && (missing0 = "name"))) || ((data.generation === undefined) && (missing0 = "generation"))) || ((data.status === undefined) && (missing0 = "status"))){
validate16.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs1 = errors;
for(const key0 in data){
if(!((((((((key0 === "operationId") || (key0 === "name")) || (key0 === "generation")) || (key0 === "status")) || (key0 === "added")) || (key0 === "completed")) || (key0 === "errorCode")) || (key0 === "errorMessage"))){
delete data[key0];
}
}
if(_errs1 === errors){
if(data.operationId !== undefined){
let data0 = data.operationId;
const _errs2 = errors;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
validate16.errors = [{instancePath:instancePath+"/operationId",schemaPath:"#/properties/operationId/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["operationId"] = coerced0;
}
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.name !== undefined){
let data1 = data.name;
const _errs4 = errors;
if(typeof data1 !== "string"){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if(typeof data1 === "string"){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 == "number" || dataType1 == "boolean"){
coerced1 = "" + data1;
}
else if(data1 === null){
coerced1 = "";
}
else {
validate16.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["name"] = coerced1;
}
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.generation !== undefined){
let data2 = data.generation;
const _errs6 = errors;
if(!((typeof data2 == "number") && (isFinite(data2)))){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if((typeof data2 == "number") && (isFinite(data2))){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 == "boolean" || data2 === null
              || (dataType2 == "string" && data2 && data2 == +data2)){
coerced2 = +data2;
}
else {
validate16.errors = [{instancePath:instancePath+"/generation",schemaPath:"#/properties/generation/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data !== undefined){
data["generation"] = coerced2;
}
}
}
var valid0 = _errs6 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.status !== undefined){
let data3 = data.status;
const _errs8 = errors;
if(typeof data3 !== "string"){
let dataType3 = typeof data3;
let coerced3 = undefined;
if(dataType3 == 'object' && Array.isArray(data3) && data3.length == 1){
data3 = data3[0];
dataType3 = typeof data3;
if(typeof data3 === "string"){
coerced3 = data3;
}
}
if(!(coerced3 !== undefined)){
if(dataType3 == "number" || dataType3 == "boolean"){
coerced3 = "" + data3;
}
else if(data3 === null){
coerced3 = "";
}
else {
validate16.errors = [{instancePath:instancePath+"/status",schemaPath:"naming#/definitions/OperationStatus/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced3 !== undefined){
data3 = coerced3;
if(data !== undefined){
data["status"] = coerced3;
}
}
}
if(!((((((data3 === "WAITING") || (data3 === "ADDED")) || (data3 === "STARTED")) || (data3 === "SUCCEEDED")) || (data3 === "FAILED")) || (data3 === "UNKNOWN"))){
validate16.errors = [{instancePath:instancePath+"/status",schemaPath:"naming#/definitions/OperationStatus/enum",keyword:"enum",params:{allowedValues: schema16.enum},message:"must be equal to one of the allowed values"}];
return false;
}
var valid0 = _errs8 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.added !== undefined){
let data4 = data.added;
const _errs11 = errors;
if((!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))) && (data4 !== null)){
let dataType4 = typeof data4;
let coerced4 = undefined;
if(dataType4 == 'object' && Array.isArray(data4) && data4.length == 1){
data4 = data4[0];
dataType4 = typeof data4;
if((((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4))) && (data4 === null)){
coerced4 = data4;
}
}
if(!(coerced4 !== undefined)){
if(dataType4 === "boolean" || data4 === null
              || (dataType4 === "string" && data4 && data4 == +data4 && !(data4 % 1))){
coerced4 = +data4;
}
else if(data4 === "" || data4 === 0 || data4 === false){
coerced4 = null;
}
else {
validate16.errors = [{instancePath:instancePath+"/added",schemaPath:"#/properties/added/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced4 !== undefined){
data4 = coerced4;
if(data !== undefined){
data["added"] = coerced4;
}
}
}
var valid0 = _errs11 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.completed !== undefined){
let data5 = data.completed;
const _errs14 = errors;
if((!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))) && (data5 !== null)){
let dataType5 = typeof data5;
let coerced5 = undefined;
if(dataType5 == 'object' && Array.isArray(data5) && data5.length == 1){
data5 = data5[0];
dataType5 = typeof data5;
if((((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5))) && (data5 === null)){
coerced5 = data5;
}
}
if(!(coerced5 !== undefined)){
if(dataType5 === "boolean" || data5 === null
              || (dataType5 === "string" && data5 && data5 == +data5 && !(data5 % 1))){
coerced5 = +data5;
}
else if(data5 === "" || data5 === 0 || data5 === false){
coerced5 = null;
}
else {
validate16.errors = [{instancePath:instancePath+"/completed",schemaPath:"#/properties/completed/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced5 !== undefined){
data5 = coerced5;
if(data !== undefined){
data["completed"] = coerced5;
}
}
}
var valid0 = _errs14 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.errorCode !== undefined){
let data6 = data.errorCode;
const _errs17 = errors;
if((typeof data6 !== "string") && (data6 !== null)){
let dataType6 = typeof data6;
let coerced6 = undefined;
if(dataType6 == 'object' && Array.isArray(data6) && data6.length == 1){
data6 = data6[0];
dataType6 = typeof data6;
if((typeof data6 === "string") && (data6 === null)){
coerced6 = data6;
}
}
if(!(coerced6 !== undefined)){
if(dataType6 == "number" || dataType6 == "boolean"){
coerced6 = "" + data6;
}
else if(data6 === null){
coerced6 = "";
}
else if(data6 === "" || data6 === 0 || data6 === false){
coerced6 = null;
}
else {
validate16.errors = [{instancePath:instancePath+"/errorCode",schemaPath:"#/properties/errorCode/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced6 !== undefined){
data6 = coerced6;
if(data !== undefined){
data["errorCode"] = coerced6;
}
}
}
var valid0 = _errs17 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.errorMessage !== undefined){
let data7 = data.errorMessage;
const _errs20 = errors;
if((typeof data7 !== "string") && (data7 !== null)){
let dataType7 = typeof data7;
let coerced7 = undefined;
if(dataType7 == 'object' && Array.isArray(data7) && data7.length == 1){
data7 = data7[0];
dataType7 = typeof data7;
if((typeof data7 === "string") && (data7 === null)){
coerced7 = data7;
}
}
if(!(coerced7 !== undefined)){
if(dataType7 == "number" || dataType7 == "boolean"){
coerced7 = "" + data7;
}
else if(data7 === null){
coerced7 = "";
}
else if(data7 === "" || data7 === 0 || data7 === false){
coerced7 = null;
}
else {
validate16.errors = [{instancePath:instancePath+"/errorMessage",schemaPath:"#/properties/errorMessage/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced7 !== undefined){
data7 = coerced7;
if(data !== undefined){
data["errorMessage"] = coerced7;
}
}
}
var valid0 = _errs20 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
}
}
}
}
}
else {
validate16.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate16.errors = vErrors;
return errors === 0;
}

export const RegisteredNameInfo = validate17;
const schema19 = {"type":"object","properties":{"name":{"type":"string"},"generation":{"type":"integer","minimum":0},"updatingKey":{"type":"string","nullable":true},"nodeUri":{"type":"string"},"created":{"type":"integer","nullable":true},"signingKey":{"type":"string","nullable":true},"validFrom":{"type":"integer","nullable":true},"digest":{"type":"string","nullable":true}},"additionalProperties":false,"required":["name","generation","nodeUri"]};

function validate17(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if((((data.name === undefined) && (missing0 = "name")) || ((data.generation === undefined) && (missing0 = "generation"))) || ((data.nodeUri === undefined) && (missing0 = "nodeUri"))){
validate17.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs1 = errors;
for(const key0 in data){
if(!((((((((key0 === "name") || (key0 === "generation")) || (key0 === "updatingKey")) || (key0 === "nodeUri")) || (key0 === "created")) || (key0 === "signingKey")) || (key0 === "validFrom")) || (key0 === "digest"))){
delete data[key0];
}
}
if(_errs1 === errors){
if(data.name !== undefined){
let data0 = data.name;
const _errs2 = errors;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
validate17.errors = [{instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["name"] = coerced0;
}
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.generation !== undefined){
let data1 = data.generation;
const _errs4 = errors;
if(!(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1)))){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if(((typeof data1 == "number") && (!(data1 % 1) && !isNaN(data1))) && (isFinite(data1))){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 === "boolean" || data1 === null
              || (dataType1 === "string" && data1 && data1 == +data1 && !(data1 % 1))){
coerced1 = +data1;
}
else {
validate17.errors = [{instancePath:instancePath+"/generation",schemaPath:"#/properties/generation/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["generation"] = coerced1;
}
}
}
if(errors === _errs4){
if((typeof data1 == "number") && (isFinite(data1))){
if(data1 < 0 || isNaN(data1)){
validate17.errors = [{instancePath:instancePath+"/generation",schemaPath:"#/properties/generation/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];
return false;
}
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.updatingKey !== undefined){
let data2 = data.updatingKey;
const _errs6 = errors;
if((typeof data2 !== "string") && (data2 !== null)){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if((typeof data2 === "string") && (data2 === null)){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 == "number" || dataType2 == "boolean"){
coerced2 = "" + data2;
}
else if(data2 === null){
coerced2 = "";
}
else if(data2 === "" || data2 === 0 || data2 === false){
coerced2 = null;
}
else {
validate17.errors = [{instancePath:instancePath+"/updatingKey",schemaPath:"#/properties/updatingKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data !== undefined){
data["updatingKey"] = coerced2;
}
}
}
var valid0 = _errs6 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.nodeUri !== undefined){
let data3 = data.nodeUri;
const _errs9 = errors;
if(typeof data3 !== "string"){
let dataType3 = typeof data3;
let coerced3 = undefined;
if(dataType3 == 'object' && Array.isArray(data3) && data3.length == 1){
data3 = data3[0];
dataType3 = typeof data3;
if(typeof data3 === "string"){
coerced3 = data3;
}
}
if(!(coerced3 !== undefined)){
if(dataType3 == "number" || dataType3 == "boolean"){
coerced3 = "" + data3;
}
else if(data3 === null){
coerced3 = "";
}
else {
validate17.errors = [{instancePath:instancePath+"/nodeUri",schemaPath:"#/properties/nodeUri/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced3 !== undefined){
data3 = coerced3;
if(data !== undefined){
data["nodeUri"] = coerced3;
}
}
}
var valid0 = _errs9 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.created !== undefined){
let data4 = data.created;
const _errs11 = errors;
if((!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))) && (data4 !== null)){
let dataType4 = typeof data4;
let coerced4 = undefined;
if(dataType4 == 'object' && Array.isArray(data4) && data4.length == 1){
data4 = data4[0];
dataType4 = typeof data4;
if((((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4))) && (data4 === null)){
coerced4 = data4;
}
}
if(!(coerced4 !== undefined)){
if(dataType4 === "boolean" || data4 === null
              || (dataType4 === "string" && data4 && data4 == +data4 && !(data4 % 1))){
coerced4 = +data4;
}
else if(data4 === "" || data4 === 0 || data4 === false){
coerced4 = null;
}
else {
validate17.errors = [{instancePath:instancePath+"/created",schemaPath:"#/properties/created/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced4 !== undefined){
data4 = coerced4;
if(data !== undefined){
data["created"] = coerced4;
}
}
}
var valid0 = _errs11 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.signingKey !== undefined){
let data5 = data.signingKey;
const _errs14 = errors;
if((typeof data5 !== "string") && (data5 !== null)){
let dataType5 = typeof data5;
let coerced5 = undefined;
if(dataType5 == 'object' && Array.isArray(data5) && data5.length == 1){
data5 = data5[0];
dataType5 = typeof data5;
if((typeof data5 === "string") && (data5 === null)){
coerced5 = data5;
}
}
if(!(coerced5 !== undefined)){
if(dataType5 == "number" || dataType5 == "boolean"){
coerced5 = "" + data5;
}
else if(data5 === null){
coerced5 = "";
}
else if(data5 === "" || data5 === 0 || data5 === false){
coerced5 = null;
}
else {
validate17.errors = [{instancePath:instancePath+"/signingKey",schemaPath:"#/properties/signingKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced5 !== undefined){
data5 = coerced5;
if(data !== undefined){
data["signingKey"] = coerced5;
}
}
}
var valid0 = _errs14 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.validFrom !== undefined){
let data6 = data.validFrom;
const _errs17 = errors;
if((!(((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6)))) && (data6 !== null)){
let dataType6 = typeof data6;
let coerced6 = undefined;
if(dataType6 == 'object' && Array.isArray(data6) && data6.length == 1){
data6 = data6[0];
dataType6 = typeof data6;
if((((typeof data6 == "number") && (!(data6 % 1) && !isNaN(data6))) && (isFinite(data6))) && (data6 === null)){
coerced6 = data6;
}
}
if(!(coerced6 !== undefined)){
if(dataType6 === "boolean" || data6 === null
              || (dataType6 === "string" && data6 && data6 == +data6 && !(data6 % 1))){
coerced6 = +data6;
}
else if(data6 === "" || data6 === 0 || data6 === false){
coerced6 = null;
}
else {
validate17.errors = [{instancePath:instancePath+"/validFrom",schemaPath:"#/properties/validFrom/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced6 !== undefined){
data6 = coerced6;
if(data !== undefined){
data["validFrom"] = coerced6;
}
}
}
var valid0 = _errs17 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.digest !== undefined){
let data7 = data.digest;
const _errs20 = errors;
if((typeof data7 !== "string") && (data7 !== null)){
let dataType7 = typeof data7;
let coerced7 = undefined;
if(dataType7 == 'object' && Array.isArray(data7) && data7.length == 1){
data7 = data7[0];
dataType7 = typeof data7;
if((typeof data7 === "string") && (data7 === null)){
coerced7 = data7;
}
}
if(!(coerced7 !== undefined)){
if(dataType7 == "number" || dataType7 == "boolean"){
coerced7 = "" + data7;
}
else if(data7 === null){
coerced7 = "";
}
else if(data7 === "" || data7 === 0 || data7 === false){
coerced7 = null;
}
else {
validate17.errors = [{instancePath:instancePath+"/digest",schemaPath:"#/properties/digest/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced7 !== undefined){
data7 = coerced7;
if(data !== undefined){
data["digest"] = coerced7;
}
}
}
var valid0 = _errs20 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
}
}
}
}
}
}
else {
validate17.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate17.errors = vErrors;
return errors === 0;
}

export const RegisteredNameInfoArray = validate18;
const schema20 = {"type":"array","items":{"$ref":"naming#/definitions/RegisteredNameInfo"}};

function validate18(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(Array.isArray(data))){
let dataType0 = typeof data;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data) && data.length == 1){
data = data[0];
dataType0 = typeof data;
if(Array.isArray(data)){
coerced0 = data;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 === "string" || dataType0 === "number"
              || dataType0 === "boolean" || data === null){
coerced0 = [data];
}
else {
validate18.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
}
if(coerced0 !== undefined){
data = coerced0;
if(parentData !== undefined){
parentData[parentDataProperty] = coerced0;
}
}
}
if(errors === 0){
if(Array.isArray(data)){
var valid0 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
const _errs2 = errors;
if(errors === _errs2){
if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
let missing0;
if((((data0.name === undefined) && (missing0 = "name")) || ((data0.generation === undefined) && (missing0 = "generation"))) || ((data0.nodeUri === undefined) && (missing0 = "nodeUri"))){
validate18.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"naming#/definitions/RegisteredNameInfo/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs4 = errors;
for(const key0 in data0){
if(!((((((((key0 === "name") || (key0 === "generation")) || (key0 === "updatingKey")) || (key0 === "nodeUri")) || (key0 === "created")) || (key0 === "signingKey")) || (key0 === "validFrom")) || (key0 === "digest"))){
delete data0[key0];
}
}
if(_errs4 === errors){
if(data0.name !== undefined){
let data1 = data0.name;
const _errs5 = errors;
if(typeof data1 !== "string"){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if(typeof data1 === "string"){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 == "number" || dataType1 == "boolean"){
coerced1 = "" + data1;
}
else if(data1 === null){
coerced1 = "";
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/name",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data0 !== undefined){
data0["name"] = coerced1;
}
}
}
var valid2 = _errs5 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.generation !== undefined){
let data2 = data0.generation;
const _errs7 = errors;
if(!(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2)))){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if(((typeof data2 == "number") && (!(data2 % 1) && !isNaN(data2))) && (isFinite(data2))){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 === "boolean" || data2 === null
              || (dataType2 === "string" && data2 && data2 == +data2 && !(data2 % 1))){
coerced2 = +data2;
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/generation",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/generation/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data0 !== undefined){
data0["generation"] = coerced2;
}
}
}
if(errors === _errs7){
if((typeof data2 == "number") && (isFinite(data2))){
if(data2 < 0 || isNaN(data2)){
validate18.errors = [{instancePath:instancePath+"/" + i0+"/generation",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/generation/minimum",keyword:"minimum",params:{comparison: ">=", limit: 0},message:"must be >= 0"}];
return false;
}
}
}
var valid2 = _errs7 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.updatingKey !== undefined){
let data3 = data0.updatingKey;
const _errs9 = errors;
if((typeof data3 !== "string") && (data3 !== null)){
let dataType3 = typeof data3;
let coerced3 = undefined;
if(dataType3 == 'object' && Array.isArray(data3) && data3.length == 1){
data3 = data3[0];
dataType3 = typeof data3;
if((typeof data3 === "string") && (data3 === null)){
coerced3 = data3;
}
}
if(!(coerced3 !== undefined)){
if(dataType3 == "number" || dataType3 == "boolean"){
coerced3 = "" + data3;
}
else if(data3 === null){
coerced3 = "";
}
else if(data3 === "" || data3 === 0 || data3 === false){
coerced3 = null;
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/updatingKey",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/updatingKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced3 !== undefined){
data3 = coerced3;
if(data0 !== undefined){
data0["updatingKey"] = coerced3;
}
}
}
var valid2 = _errs9 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.nodeUri !== undefined){
let data4 = data0.nodeUri;
const _errs12 = errors;
if(typeof data4 !== "string"){
let dataType4 = typeof data4;
let coerced4 = undefined;
if(dataType4 == 'object' && Array.isArray(data4) && data4.length == 1){
data4 = data4[0];
dataType4 = typeof data4;
if(typeof data4 === "string"){
coerced4 = data4;
}
}
if(!(coerced4 !== undefined)){
if(dataType4 == "number" || dataType4 == "boolean"){
coerced4 = "" + data4;
}
else if(data4 === null){
coerced4 = "";
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/nodeUri",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/nodeUri/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced4 !== undefined){
data4 = coerced4;
if(data0 !== undefined){
data0["nodeUri"] = coerced4;
}
}
}
var valid2 = _errs12 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.created !== undefined){
let data5 = data0.created;
const _errs14 = errors;
if((!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))) && (data5 !== null)){
let dataType5 = typeof data5;
let coerced5 = undefined;
if(dataType5 == 'object' && Array.isArray(data5) && data5.length == 1){
data5 = data5[0];
dataType5 = typeof data5;
if((((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5))) && (data5 === null)){
coerced5 = data5;
}
}
if(!(coerced5 !== undefined)){
if(dataType5 === "boolean" || data5 === null
              || (dataType5 === "string" && data5 && data5 == +data5 && !(data5 % 1))){
coerced5 = +data5;
}
else if(data5 === "" || data5 === 0 || data5 === false){
coerced5 = null;
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/created",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/created/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced5 !== undefined){
data5 = coerced5;
if(data0 !== undefined){
data0["created"] = coerced5;
}
}
}
var valid2 = _errs14 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.signingKey !== undefined){
let data6 = data0.signingKey;
const _errs17 = errors;
if((typeof data6 !== "string") && (data6 !== null)){
let dataType6 = typeof data6;
let coerced6 = undefined;
if(dataType6 == 'object' && Array.isArray(data6) && data6.length == 1){
data6 = data6[0];
dataType6 = typeof data6;
if((typeof data6 === "string") && (data6 === null)){
coerced6 = data6;
}
}
if(!(coerced6 !== undefined)){
if(dataType6 == "number" || dataType6 == "boolean"){
coerced6 = "" + data6;
}
else if(data6 === null){
coerced6 = "";
}
else if(data6 === "" || data6 === 0 || data6 === false){
coerced6 = null;
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/signingKey",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/signingKey/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced6 !== undefined){
data6 = coerced6;
if(data0 !== undefined){
data0["signingKey"] = coerced6;
}
}
}
var valid2 = _errs17 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.validFrom !== undefined){
let data7 = data0.validFrom;
const _errs20 = errors;
if((!(((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7)))) && (data7 !== null)){
let dataType7 = typeof data7;
let coerced7 = undefined;
if(dataType7 == 'object' && Array.isArray(data7) && data7.length == 1){
data7 = data7[0];
dataType7 = typeof data7;
if((((typeof data7 == "number") && (!(data7 % 1) && !isNaN(data7))) && (isFinite(data7))) && (data7 === null)){
coerced7 = data7;
}
}
if(!(coerced7 !== undefined)){
if(dataType7 === "boolean" || data7 === null
              || (dataType7 === "string" && data7 && data7 == +data7 && !(data7 % 1))){
coerced7 = +data7;
}
else if(data7 === "" || data7 === 0 || data7 === false){
coerced7 = null;
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/validFrom",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/validFrom/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];
return false;
}
}
if(coerced7 !== undefined){
data7 = coerced7;
if(data0 !== undefined){
data0["validFrom"] = coerced7;
}
}
}
var valid2 = _errs20 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.digest !== undefined){
let data8 = data0.digest;
const _errs23 = errors;
if((typeof data8 !== "string") && (data8 !== null)){
let dataType8 = typeof data8;
let coerced8 = undefined;
if(dataType8 == 'object' && Array.isArray(data8) && data8.length == 1){
data8 = data8[0];
dataType8 = typeof data8;
if((typeof data8 === "string") && (data8 === null)){
coerced8 = data8;
}
}
if(!(coerced8 !== undefined)){
if(dataType8 == "number" || dataType8 == "boolean"){
coerced8 = "" + data8;
}
else if(data8 === null){
coerced8 = "";
}
else if(data8 === "" || data8 === 0 || data8 === false){
coerced8 = null;
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0+"/digest",schemaPath:"naming#/definitions/RegisteredNameInfo/properties/digest/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced8 !== undefined){
data8 = coerced8;
if(data0 !== undefined){
data0["digest"] = coerced8;
}
}
}
var valid2 = _errs23 === errors;
}
else {
var valid2 = true;
}
}
}
}
}
}
}
}
}
}
}
else {
validate18.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"naming#/definitions/RegisteredNameInfo/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
var valid0 = _errs1 === errors;
if(!valid0){
break;
}
}
}
}
validate18.errors = vErrors;
return errors === 0;
}

export const SigningKeyInfo = validate19;
const schema22 = {"type":"object","properties":{"key":{"type":"string"},"validFrom":{"type":"number"}},"additionalProperties":false,"required":["key","validFrom"]};

function validate19(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(errors === 0){
if(data && typeof data == "object" && !Array.isArray(data)){
let missing0;
if(((data.key === undefined) && (missing0 = "key")) || ((data.validFrom === undefined) && (missing0 = "validFrom"))){
validate19.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs1 = errors;
for(const key0 in data){
if(!((key0 === "key") || (key0 === "validFrom"))){
delete data[key0];
}
}
if(_errs1 === errors){
if(data.key !== undefined){
let data0 = data.key;
const _errs2 = errors;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
validate19.errors = [{instancePath:instancePath+"/key",schemaPath:"#/properties/key/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["key"] = coerced0;
}
}
}
var valid0 = _errs2 === errors;
}
else {
var valid0 = true;
}
if(valid0){
if(data.validFrom !== undefined){
let data1 = data.validFrom;
const _errs4 = errors;
if(!((typeof data1 == "number") && (isFinite(data1)))){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if((typeof data1 == "number") && (isFinite(data1))){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 == "boolean" || data1 === null
              || (dataType1 == "string" && data1 && data1 == +data1)){
coerced1 = +data1;
}
else {
validate19.errors = [{instancePath:instancePath+"/validFrom",schemaPath:"#/properties/validFrom/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["validFrom"] = coerced1;
}
}
}
var valid0 = _errs4 === errors;
}
else {
var valid0 = true;
}
}
}
}
}
else {
validate19.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
validate19.errors = vErrors;
return errors === 0;
}

export const SigningKeyInfoArray = validate20;
const schema23 = {"type":"array","items":{"$ref":"naming#/definitions/SigningKeyInfo"}};

function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(!(Array.isArray(data))){
let dataType0 = typeof data;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data) && data.length == 1){
data = data[0];
dataType0 = typeof data;
if(Array.isArray(data)){
coerced0 = data;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 === "string" || dataType0 === "number"
              || dataType0 === "boolean" || data === null){
coerced0 = [data];
}
else {
validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "array"},message:"must be array"}];
return false;
}
}
if(coerced0 !== undefined){
data = coerced0;
if(parentData !== undefined){
parentData[parentDataProperty] = coerced0;
}
}
}
if(errors === 0){
if(Array.isArray(data)){
var valid0 = true;
const len0 = data.length;
for(let i0=0; i0<len0; i0++){
let data0 = data[i0];
const _errs1 = errors;
const _errs2 = errors;
if(errors === _errs2){
if(data0 && typeof data0 == "object" && !Array.isArray(data0)){
let missing0;
if(((data0.key === undefined) && (missing0 = "key")) || ((data0.validFrom === undefined) && (missing0 = "validFrom"))){
validate20.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"naming#/definitions/SigningKeyInfo/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];
return false;
}
else {
const _errs4 = errors;
for(const key0 in data0){
if(!((key0 === "key") || (key0 === "validFrom"))){
delete data0[key0];
}
}
if(_errs4 === errors){
if(data0.key !== undefined){
let data1 = data0.key;
const _errs5 = errors;
if(typeof data1 !== "string"){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if(typeof data1 === "string"){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 == "number" || dataType1 == "boolean"){
coerced1 = "" + data1;
}
else if(data1 === null){
coerced1 = "";
}
else {
validate20.errors = [{instancePath:instancePath+"/" + i0+"/key",schemaPath:"naming#/definitions/SigningKeyInfo/properties/key/type",keyword:"type",params:{type: "string"},message:"must be string"}];
return false;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data0 !== undefined){
data0["key"] = coerced1;
}
}
}
var valid2 = _errs5 === errors;
}
else {
var valid2 = true;
}
if(valid2){
if(data0.validFrom !== undefined){
let data2 = data0.validFrom;
const _errs7 = errors;
if(!((typeof data2 == "number") && (isFinite(data2)))){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if((typeof data2 == "number") && (isFinite(data2))){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 == "boolean" || data2 === null
              || (dataType2 == "string" && data2 && data2 == +data2)){
coerced2 = +data2;
}
else {
validate20.errors = [{instancePath:instancePath+"/" + i0+"/validFrom",schemaPath:"naming#/definitions/SigningKeyInfo/properties/validFrom/type",keyword:"type",params:{type: "number"},message:"must be number"}];
return false;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data0 !== undefined){
data0["validFrom"] = coerced2;
}
}
}
var valid2 = _errs7 === errors;
}
else {
var valid2 = true;
}
}
}
}
}
else {
validate20.errors = [{instancePath:instancePath+"/" + i0,schemaPath:"naming#/definitions/SigningKeyInfo/type",keyword:"type",params:{type: "object"},message:"must be object"}];
return false;
}
}
var valid0 = _errs1 === errors;
if(!valid0){
break;
}
}
}
}
validate20.errors = vErrors;
return errors === 0;
}

export const NAMING_API_VALIDATORS = {
    "ObjectResult": ObjectResult,
    "BooleanResult": BooleanResult,
    "StringResult": StringResult,
    "ErrorResult": ErrorResult,
    "OperationStatus": OperationStatus,
    "OperationStatusInfo": OperationStatusInfo,
    "RegisteredNameInfo": RegisteredNameInfo,
    "RegisteredNameInfoArray": RegisteredNameInfoArray,
    "SigningKeyInfo": SigningKeyInfo,
    "SigningKeyInfoArray": SigningKeyInfoArray,
};
