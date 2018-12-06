const testData = [
  { id: 1, 
    images: {
      fixed_width: {
        url: "https://media0.giphy.com/media/1108D2tVaUN3eo/200w.gif"
      }
    }, 
    import_datetime: "2015-09-17 03:18:37" },
  { id: 2, 
    images: {
      fixed_width: {
        url: '"https://media0.giphy.com/media/POmeDOmoTg9CU/200w.gif"'
      }
    },
    import_datetime: "2015-07-07 12:37:16"},
  { id: 3,
    images: {
      fixed_width: {
        url: "https://media1.giphy.com/media/114ugL1hv5p8He/200w.gif", import_datetime: "2016-06-20 19:04:54"
      }
    }
  } 
];


export default async () => {
  return await new Promise((resolve) => {
    resolve(testData)
  })
  // return response
}