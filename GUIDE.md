# Markdown Guide
A quick reference to the Markdown syntax.

## Table of Contents

  1. [Headings](#headings)
  1. [Paragraphs](#paragraphs)
  1. [Line Breaks](#line-breaks)
  1. [Emphasis](#emphasis)
  1. [Blockquotes](#blockquotes)

## Headings
To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use
should correspond to the heading level. For example, to create a heading level three (&lt;h3&gt;), use three
number signs (e.g., ### My Header).

```markdown
# Heading level 1
## Heading level 2
### Heading level 3
#### Heading level 4
##### Heading level 5
###### Heading level 6
```

**[back to top](#)**

## Paragraphs
To create paragraphs, use a blank line to separate one or more lines of text. You should not indent paragraphs
with spaces or tabs.

```markdown
I really like using Markdown.

I think I'll use it to format all of my documents from now on.
```

**[back to top](#)**

## Line Breaks
To create a line break (&lt;br&gt;), end a line with two or more spaces, and then type return.

```markdown
This is the first line.  
And this is the second line.
```

**[back to top](#)**

## Emphasis
You can add emphasis by making text bold or italic.

### Bold
To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

```markdown
I just love **bold text**.
```

### Italic
To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

```markdown
Italicized text is the *cat's meow*.
```

### Bold and Italic
To emphasize text with bold and italics at the same time, add three asterisks or underscores before and after a word or phrase.

```markdown
This text is ***really important***.
```

**[back to top](#)**

## Blockquotes
To create a blockquote, add a &gt; in front of a paragraph.

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
```

### Blockquotes with Multiple Paragraphs
Blockquotes can contain multiple paragraphs. Add a > on the blank lines between the paragraphs.

```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

### Nested Blockquotes
Blockquotes can be nested. Add a >> in front of the paragraph you want to nest.


```markdown
> Dorothy followed her through many of the beautiful rooms in her castle.
>
>> The Witch bade her clean the pots and kettles and sweep the floor and keep the fire fed with wood.
```

### Blockquotes with Other Elements
Blockquotes can contain other Markdown formatted elements. Not all elements can be used — you’ll need to experiment to see which ones work.

```markdown
> #### The quarterly results look great!
>
> - Revenue was off the chart.
> - Profits were higher than ever.
>
>  *Everything* is going according to **plan**.
```

**[back to top](#)**