
const access_token = '5d9aef4d4d0ffa0516c0b18110bc1410658c79da4a63fc05301951111aa80b7e';

export const restHost = 'https://gorest.co.in'
export const restUrl = '/public/v2/users/'

export const gorestHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${access_token}`
};