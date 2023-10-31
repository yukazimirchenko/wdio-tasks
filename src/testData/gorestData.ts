
export const restHost = 'https://gorest.co.in'
export const restUrl = '/public/v2/users/'

export const gorestHeaders = {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${process.env.GOREST_TOKEN}`
};
