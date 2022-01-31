# CART263 - Lecture 03 - Data

# JSON:
JSON (JavaScript Object Notation) is a format for describing structured data  that we can load into our programs (via file or API).
The data take the form of plain text .json files containing either an object or an array. if object, properties are called names.
See https://github.com/public-apis/public-apis for public APIs or https://any-api.com/ for a broader set of APIs.
CORS (Cross-Origin Resource Sharing) is a security feature for data requests from other websites, sometimes refusing access to URLs.
Solutions are to use liberal 'Open CORS' APIs or transit via a proxy (e.g. https://cors-anywhere.herokuapp.com/)

# Web Storage API
For storing data between sessions/page visits, using localStorage (setItem/getItem) and sessionStorage.
localStorage stores data based on domain (URL) and browser (also, negated by incognito mode).
Pages in a common domain can share data based on key names
To view stored data (Chrome>developer console>Application>Local/Session Storage>URL / Firefox>developer console>Storage>Local/Session Storage>URL)
