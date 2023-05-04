const NotionPageToHtml = require('notion-page-to-html');
const express = require('express')
const fs= require ('fs')
const app = express()
const port = 3000
const cors = require('cors');



// using async/await
async function getPage() {
  const { title, icon, cover, html } = await NotionPageToHtml.convert("https://www.notion.so/asnunes/Simple-Page-Text-4d64bbc0634d4758befa85c5a3a6c22f");
  fs.writeFile('jessica.txt', html, (err) => {
    if (err) throw err
    console.log('Data appended to file')
  })
  return {title, icon, cover, html};
}


app.get('/getPage', async (req, res) => {
  const {title, icon, cover, html}= await getPage();
  res.send({title, icon, cover, html})
})

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

app.use(cors({ 
    origin: 'http://localhost:3000', //replace with your client url
    credentials: true
  }));