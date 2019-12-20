/*
https://api.getdelta.io/web/coins
- https://api.getdelta.io/web/coins?page[number]=1&page[size]=10
- https://api.getdelta.io/web/coins/V1jxGX
- https://delta.app/images/V1jxGX/icon-64.png
*/

export const getApiUrl = page => `https://api.getdelta.io/web/coins?page[number]=${page}&page[size]=20`;
