# Documentation Reader
An online, dynamic markdown renderer.

## Table of Contents

  1. [Building](#building)
  1. [Markdown](#markdown)
  1. [Installing](#installing)
  1. [Usage](#usage)
  1. [Attributes](#attributes)
  1. [Methods](#methods)
  1. [Events](#events)
  1. [License](#license)

## <a id="building"></a>Building
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

[Back to Top](#)

## <a id="markdown"></a>Markdown
[Markdown Guide](https://github.com/fofxsoft/docs/blob/master/GUIDE.md)

[Back to Top](#)

## <a id="installing"></a>Installing
First copy the contents of the build folder to your application. Then include the following in your HTML.

```html
<link href="/lib/markdown/markdown.css" rel="stylesheet">
<script src="/lib/markdown/markdown.js"></script>
```

[Back to Top](#)

## <a id="usage"></a>Usage
To include a markdown display on your page, simply add the tag.

```html
<input type="markdown" id="skywalker" name="skywalker" value="">
```

or

```html
<markdown id="skywalker" name="skywalker"></markdown>
```

[Back to Top](#)

## <a id="attributes"></a>Attributes
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

- **dark**  
  Optional. This property sets the markdown to dark mode.

- **value**  
  Optional. This is only available on the markdown type input field. This will populate the contents of the markdown.

- **innerText**  
  Optional. This is only available for the markdown tag. The innerText will populate the markdown.

[Back to Top](#)

## <a id="methods"></a>Methods
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

[Back to Top](#)

## <a id="events"></a>Events
Custom events applied to the markdown tag.

- **ready**  
  This event is dispached when the markdown is loaded and ready to accept commands.
  &nbsp;  
  ```javascript
  document.getElementById("skywalker").addEventListener("ready", () => {
      // Code to execute when markdown is ready
  });
  ```

[Back to Top](#)

## <a id="license"></a>License
[MIT](https://github.com/fofxsoft/code-editor/blob/master/LICENSE.md)

[Back to Top](#)
