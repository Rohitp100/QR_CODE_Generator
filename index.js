/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import inquirer from 'inquirer';
import qr from 'qr-image';
import fs from 'fs';

inquirer
  .prompt([
    {
    message: "Type in your URL : ",
    name: "URL",
    },
  ])
  .then((answers) => {
    const url = answers.URL;
    var qr_svg = qr.image(url);
qr_svg.pipe(fs.createWriteStream('qr_img.png'));
   fs.writeFile("URL.txt", url, (err)=>{
       if(err) throw err;
       console.log("The file has been saved.");
   });

  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });

  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> npm init
  // This utility will walk you through creating a package.json file.
  // It only covers the most common items, and tries to guess sensible defaults.
  
  // See `npm help init` for definitive documentation on these fields
  // and exactly what they do.
  
  // Use `npm install <pkg>` afterwards to install a package and
  // save it as a dependency in the package.json file.
  
  // Press ^C at any time to quit.
  // package name: (2.4-qr-code-project)
  // version: (1.0.0)
  // description:
  // entry point: (index.js)
  // test command:
  // git repository:
  // keywords:
  // author:
  // license: (ISC)
  // About to write to C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project\package.json:
  
  // {
  //   "name": "2.4-qr-code-project",
  //   "version": "1.0.0",
  //   "description": "",
  //   "main": "index.js",
  //   "scripts": {
  //     "test": "echo \"Error: no test specified\" && exit 1"
  //   },
  //   "author": "",
  //   "license": "ISC"
  // }
  
  // Is this OK? (yes)
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> npm i inquirer qr-image     
  
  // added 57 packages, and audited 58 packages in 13s
  
  // 18 packages are looking for funding
  //   run `npm fund` for details
  
  // found 0 vulnerabilities
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node index.js
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node .\index.js
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node .\index.js
  // ? Type in your URL :  www.google.com
  // { URL: 'www.google.com' }
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node index.js
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> https://www.youtube.com/
  // https://www.youtube.com/ : The term 'https://www.youtube.com/' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the      
  // spelling of the name, or if a path was included, verify that the path is correct and try again.
  // + https://www.youtube.com/
  // + ~~~~~~~~~~~~~~~~~~~~~~~~
  //     + CategoryInfo          : ObjectNotFound: (https://www.youtube.com/:String) [], CommandNotFoundException
  //     + FullyQualifiedErrorId : CommandNotFoundException
   
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node index.js
  // ? Type in your URL :  https://www.youtube.com/
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> npm i react-native-fs
  // Terminate batch job (Y/N)? Y
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node index.js
  // ? Type in your URL :  https://chat.openai.com/?model=text-davinci-002-render-sha
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node index.js
  // ? Type in your URL :  https://chat.openai.com/?model=text-davinci-002-render-sha
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> node index.js
  // ? Type in your URL :  https://chat.openai.com/?model=text-davinci-002-render-sha
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> 
  //  *  History restored 
  
  // ? Type in your URL :  https://chat.openai.com/?model=text-davinci-002-render-sha
  // The file has been saved.
  // PS C:\Users\KIIT\OneDrive\Desktop\Node\2.4 QR Code Project> 