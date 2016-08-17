import React from 'react'

class MyAwesomeApp extends React.Component {
  render() {
    return(
      <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://miguhruiz.xyz/public/css/index.css" />
        <title>My awesome app rendered at the server</title>
      </head>
      <body>
        <div class="react-app"></div>
        <script src="./public/js/app.js"></script>
      </body>
      </html>
    )
  }
}

export default MyAwesomeApp
