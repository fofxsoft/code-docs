# Markdown Guide
A quick reference to the Markdown syntax.

## Table of Contents

  1. [Headings](#headings)
  1. [Paragraphs](#paragraphs)
  1. [Line Breaks](#line-breaks)
  1. [Emphasis](#emphasis)
  1. [Blockquotes](#blockquotes)
  1. [Ordered Lists](#ordered-lists)
  1. [Unordered Lists](#unordered-lists)
  1. [Horizontal Rules](#horizontal-rules)
  1. [Links](#links)
  1. [Images](#images)

## <a id="headings"></a>Headings
To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use
should correspond to the heading level. For example, to create a heading level three (&lt;h3&gt;), use three
number signs (e.g., ### My Header).

| Markdown            | HTML                              | Output                |
| ------------------- | --------------------------------- | --------------------- |
| # Jedi Level 1      | &lt;h1&gt;Jedi Level 1&lt;/h1&gt; | <h1>Jedi Level 1</h1> |
| ## Jedi Level 2     | &lt;h2&gt;Jedi Level 2&lt;/h2&gt; | <h2>Jedi Level 2</h2> |
| ### Jedi Level 3    | &lt;h3&gt;Jedi Level 3&lt;/h3&gt; | <h3>Jedi Level 3</h3> |
| #### Jedi Level 4   | &lt;h4&gt;Jedi Level 4&lt;/h4&gt; | <h4>Jedi Level 4</h4> |
| ##### Jedi Level 5  | &lt;h5&gt;Jedi Level 5&lt;/h5&gt; | <h5>Jedi Level 5</h5> |
| ###### Jedi Level 6 | &lt;h6&gt;Jedi Level 6&lt;/h6&gt; | <h6>Jedi Level 6</h6> |

[Back to Top](#)

## <a id="paragraphs"></a>Paragraphs
To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs
with spaces or tabs.

| Markdown                                         | HTML                                                                                                   | Output                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ------------------------------------------------ |
| <p>The Force will be with you.</p><p>Always.</p> | <p>&lt;p&gt;The Force will be with you.&lt;/p&gt;</p><p>&lt;p&gt;Always.&lt;/p&gt;</p> | <p>The Force will be with you.</p><p>Always.</p> |

[Back to Top](#)

## <a id="line-breaks"></a>Line Breaks
To create a line break (&lt;br&gt;), end a line with two or more spaces, and then type return.

| Markdown                               | HTML                                                            | Output                             |
| -------------------------------------- | --------------------------------------------------------------- | ---------------------------------- |
| Do. Or do not. · ·<br>There is no try. | &lt;p&gt;Do. Or do not.&lt;br&gt;<br>There is no try.&lt;/p&gt; | Do. Or do not.<br>There is no try. |

[Back to Top](#)

## <a id="emphasis"></a>Emphasis
You can add emphasis by making text bold or italic.

### Bold
To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

| Markdown               | HTML                                        | Output             |
| ---------------------- | ------------------------------------------- | ------------------ |
| \*\*Bold Text\*\*      | &lt;strong&gt;Bold Text&lt;/strong&gt;      | **Bold Text**      |
| Luke \*\*Skywalker\*\* | Luke &lt;strong&gt;Skywalker&lt;/strong&gt; | Luke **Skywalker** |

### Italic
To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

| Markdown            | HTML                                 | Output            |
| ------------------- | ------------------------------------ | ----------------- |
| \*Italicized Text\* | &lt;em&gt;Italicized Text&lt;/em&gt; | *Italicized Text* |
| Han \*Solo\*        | Han &lt;em&gt;Solo&lt;/em&gt;        | Han *Solo*        |


### Bold and Italic
To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase.

| Markdown               | HTML                                                         | Output          |
| ---------------------- | ------------------------------------------------------------ | --------------- |
| The \*\*\*Force\*\*\*. | The &lt;strong&gt;&lt;em&gt;Force&lt;/em&gt;&lt;/strong&gt;. | The ***Force*** |

[Back to Top](#)

## <a id="blockquotes"></a>Blockquotes
To create a blockquote, add a &gt; in front of a paragraph.

```markdown
> Why, you stuck-up, half-witted, scruffy-looking nerf herder!
```

The rendered output looks like this:
> Why, you stuck-up, half-witted, scruffy-looking nerf herder!

### Blockquotes with Multiple Paragraphs
Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

```markdown
> Why, you stuck-up, half-witted, scruffy-looking nerf herder!
>
> As far as Star Wars insults go, this one takes the cake. No contest.
```

The rendered output looks like this:
> Why, you stuck-up, half-witted, scruffy-looking nerf herder!
>
> As far as Star Wars insults go, this one takes the cake. No contest.

### Nested Blockquotes
Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.


```markdown
> Why, you stuck-up, half-witted, scruffy-looking nerf herder!
>
>> As far as Star Wars insults go, this one takes the cake. No contest.
```

The rendered output looks like this:
> Why, you stuck-up, half-witted, scruffy-looking nerf herder!
>
>> As far as Star Wars insults go, this one takes the cake. No contest.

### Blockquotes with Other Elements
Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

```markdown
> #### Yoda Quotes
>
> - Train yourself to let go of everything you fear to lose.
> - Powerful you have become, the dark side I sense in you.
>
>  Yoda Quotes to *Awake* the **Greatness** Within.
```

The rendered output looks like this:
> #### Yoda Quotes
>
> - Train yourself to let go of everything you fear to lose.
> - Powerful you have become, the dark side I sense in you.
>
>  Yoda Quotes to *Awake* the **Greatness** Within.

[Back to Top](#)

## <a id="ordered-lists"></a>Ordered Lists
To create an ordered list, add line items with numbers followed by periods. The numbers don’t have to
be in numerical order, but the list should start with the number one.

> You can use other elements like; paragraphs, line breaks, links, images, etc ...
> within each item.

```markdown
1. First item
1. Second item
1. Third item
1. Fourth item
```

The rendered output looks like this:
1. First item
1. Second item
1. Third item
1. Fourth item

### Nested Ordered Lists
To create a nested ordered list, simply add 4 spaces in front of the list item.

```markdown
1. First item
1. Second item
1. Third item
    1. Indented item
    1. Indented item
1. Fourth item
```

The rendered output looks like this:
1. First item
1. Second item
1. Third item
    1. Indented item
    1. Indented item
1. Fourth item

[Back to Top](#)

## <a id="unordered-lists"></a>Unordered Lists
To create an unordered list, add dashes (-), asterisks (*), or plus signs (+) in front of line items.
Indent one or more items to create a nested list.

> You can use other elements like; paragraphs, line breaks, links, images, etc ...
> within each item.

```markdown
- First item
- Second item
- Third item
- Fourth item
```

The rendered output looks like this:
- First item
- Second item
- Third item
- Fourth item

### Nested Unordered Lists
To create a nested unordered list, simply add 4 spaces in front of the list item.

```markdown
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item
```

The rendered output looks like this:
- First item
- Second item
- Third item
    - Indented item
    - Indented item
- Fourth item

[Back to Top](#)

## <a id="horizontal-rules"></a>Horizontal Rules
To create a horizontal rule, use three or more dashes (---) on a line by themselves.

```markdown
---
```

The rendered output looks like this:

---

## <a id="links"></a>Links
To create a link, enclose the link text in brackets (e.g., [Google]) and then follow it immediately
with the URL in parentheses (e.g., (https://google.com)).

```markdown
[Google](https://google.com/)
```

### Link Titles
You can optionally add a title for a link. This will appear as a tooltip when the user hovers over
the link. To add a title, enclose it in parentheses after the URL.

```markdown
[Google](https://google.com/ "Google Search Engine")
```

### Formatting Links
You can format links using [Emphasis](#emphasis) elements.

```markdown
*[Google](https://google.com/)*
**[Google](https://google.com/)**
***[Google](https://google.com/)***
```

[Back to Top](#)

## <a id="images"></a>Images
To add an image, add an exclamation mark (!), followed by alt text in brackets, and the path
or URL to the image asset in parentheses. You can optionally add a title after the URL in the
parentheses.

```markdown
![Markdown](https://badgen.net/badge/Markdown/Guide/blue)
```

The rendered output looks like this:

![Markdown](https://badgen.net/badge/Markdown/Guide/blue)

### Linking Images
To add a link to an image, enclose the Markdown for the image in brackets, and then add the link in parentheses.

```markdown
[![MD](https://badgen.net/badge/Markdown/Guide/blue)](https://badgen.net/)
```

The rendered output looks like this:

[![MD](https://badgen.net/badge/Markdown/Guide/blue)](https://badgen.net/)

[Back to Top](#)
