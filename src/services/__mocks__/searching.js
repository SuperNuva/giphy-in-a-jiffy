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
    import_datetime: "2015-07-07 12:37:16"}
];


export default async (term) => {
  return await new Promise((resolve) => {
    resolve(testData)
  })
}