export { QUOTE_DATA } from './constants';

const redirect = (path: string) => window.location.href = path;
const openLink = (path: string) => window.open(path);
const capitalize = (capitalizeString:string):string => capitalizeString.charAt(0).toUpperCase() + capitalizeString.slice(1);
const createIdName = (string:string):string => string.trim().toLowerCase().split(' ').map(item => capitalize(item)).join("");

export { redirect, openLink, capitalize, createIdName };