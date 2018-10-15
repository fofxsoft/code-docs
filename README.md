# Documentation Reader
An online, dynamic markdown renderer.

## Table of Contents

  1. [Building](#building)
  1. [Installing](#installing)
  1. [Usage](#usage)
  1. [Attributes](#attributes)
  1. [Methods](#methods)
  1. [Events](#events)
  1. [License](#license)

## Building
You will need the latest version of [Node](https://nodejs.org/en/download/) installed. The node install will include npm.

**Dependencies**

From the project folder run.
```
$ npm run install
```

Then build the project.
```
$ npm run build
```

> The build process will deploy to the build folder.

**[back to top](#)**

## Installing
First copy the contents of the build folder to your application. Then include the following in your HTML.

```html
<link href="/lib/markdown/markdown.css" rel="stylesheet">
<script src="/lib/markdown/markdown.js"></script>
```

**[back to top](#)**

## Usage
To include a markdown display on your page, simply add the tag.

```html
<input type="markdown" id="skywalker" name="skywalker" value="">
```

or

```html
<markdown id="skywalker" name="skywalker"></markdown>
```

**[back to top](#)**

## Attributes
- **id**  
  Required. Defines the id of the markdown container, and defines the access key.

- **name**  
  Optional. Sets the name of the markdown container.

- **url**  
  Optional. This will run the defined url to fetch the markdown code.
  > When using a relative URL, the base is set to the context of the build filder, not the folder you are calling this from.

- **class**  
  Optional. Used to set the class name(s) for the markdown container.

- **style**  
  Optional. Used to define css style for the markdown container.

- **value**  
  Optional. This is only available on the markdown type input field. This will populate the contents of the markdown.

- **innerText**  
  Optional. This is only available for the markdown tag. The innerText will populate the markdown.

**[back to top](#)**

## Methods
The initialization logic will create the markdown object used to access the methods.

- **get(id)**  
  This is used to get the markdown object.
  &nbsp;  
  ```javascript
  const md = markdown.get("skywalker");
  ```

- **md.code**  
  Returns a string. This will fetch the current markdown code.
  &nbsp;  
  ```javascript
  const md = markdown.get("skywalker");
  const code = markdown.code;
  ```

- **md.code(value)**  
  This allows you to set the markdown code.
  &nbsp;  
  ```javascript
  const md = markdown.get("skywalker");

  editor.code = "# Jedi Title";
  ```

- **md.html**  
  Returns a string. This will fetch the markdown converted to HTML.
  &nbsp;  
  ```javascript
  const md = markdown.get("skywalker");
  const html = md.html;
  ```

**[back to top](#)**

## Events
Custom events applied to the editor tag.

- **ready**  
  This event is dispached when the markdown is loaded and ready to accept commands.
  &nbsp;  
  ```javascript
  document.getElementById("skywalker").addEventListener("ready", () => {
      // Code to execute when markdown is ready
  });
  ```

**[back to top](#)**

## License
[MIT](https://github.com/fofxsoft/code-editor/blob/master/LICENSE.md)

**[back to top](#)**
