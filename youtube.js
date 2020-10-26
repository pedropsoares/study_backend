const idVideo = '3m2BxbcYFMI'
const key = 'AIzaSyDSm928CvvqBxy8I5Z-2S9sgx5_v2yRXL8'

const api = `https://www.googleapis.com/youtube/v3/videos?id=${idVideo}&key=${key}&
              fields=items(id,snippet(channelId,title),statistics)&part=snippet,statistics`