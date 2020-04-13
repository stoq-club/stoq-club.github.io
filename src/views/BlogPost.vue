<template lang="pug">
  .blog-post
    section.section
      .container.margined-top-comfortable.margined-bottom-comfortable
        .row
          .col.s12.m8.offset-m2
            .card-panel
              h3.green-text {{ blog.title }}
              .center
                img.post-image(src="http://zerodha.com/varsity/wp-content/uploads/2014/07/Ch1-title1.jpg", alt="alt")
              VueMarkdown(:source="blog.body")
</template>

<style lang="scss" scoped>
@import '../../node_modules/prismjs/themes/prism.css';
</style>

<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs'
import 'prismjs/components/prism-python.min' // language
import 'prismjs/components/prism-go.min' // language

export default {
  components: {
    VueMarkdown
  },
  data() {
    return {
      blog: {
        title: 'The Need to Invest',
        body1: `# h1 Heading 8-)
<h2> h2 Heading by HTML</h2>
## h2 Heading
### h3 Heading

## Horizontal Rules

___

---

***

## Typographic replacements

Enable typographer option to see result.

(c) (C) (r) (R) (tm) (TM) (p) (P) +-

test.. test... test..... test?..... test!....

!!!!!! ???? ,,  -- ---

"Smartypants, double quotes" and 'single quotes'


## Emphasis

**This is bold text**

__This is bold text__

*This is italic text*

_This is italic text_

~~Strikethrough~~


## Blockquotes


> Blockquotes can also be nested...
>> ...by using additional greater-than signs right next to each other...
> > > ...or with spaces between arrows.


## Lists

Unordered

+ Create a list by starting a line with \`+\`, \`-\`, or \`*\`
+ Sub-lists are made by indenting 2 spaces:
  - Marker character change forces new list start:
    * Ac tristique libero volutpat at
    + Facilisis in pretium nisl aliquet
    - Nulla volutpat aliquam velit
+ Very easy!

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa


1. You can use sequential numbers...
1. ...or keep all the numbers as \`1.\`

Start numbering with offset:

57. foo
1. bar


## Code

Inline \`code\`

Indented code

    // Some comments
    line 1 of code
    line 2 of code
    line 3 of code


Block code "fences"

\`\`\`
Sample text here...
\`\`\`
Syntax highlighting

\`\`\`javascript
var foo = function (bar) {
  return bar++;
};

console.log(foo(5));
\`\`\`

\`\`\` go
package main

import "fmt"

func main() {
	fmt.Println("Hello, world!")
}
\`\`\`

## Tables

| Option | Description |
| ------ | ----------- |
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

Right aligned columns

| Option | Description |
| ------:| -----------:|
| data   | path to data files to supply the data that will be passed into templates. |
| engine | engine to be used for processing templates. Handlebars is the default. |
| ext    | extension to be used for dest files. |

## Links

[vue-markdown](https://github.com/miaolz123/vue-markdown)

[link with title](https://github.com/miaolz123/vue-markdown "VueMarkdown")

Autoconverted link https://github.com/miaolz123/vue-markdown (enable linkify to see)


## Images

![Minion](/images/office.jpg
)

Like links, Images also have a footnote style syntax

![Alt text][id]

With a reference later in the document defining the URL location:

[id]: /images/office.jpg
  "The Dojocat"


### Emojies

> Classic markup: :wink: :cry: :laughing: :yum:
>
> Shortcuts (emoticons): :-) :-( 8-) ;)


### Subscript / Superscript

- 19^th^
- H~2~O


### <ins>

++Inserted text++


### <mark>

==Marked text==


### Footnotes

Footnote 1 link[^first].

Footnote 2 link[^second].

Inline footnote^[Text of inline footnote] definition.

Duplicated footnote reference[^second].

[^first]: Footnote **can have markup**

    and multiple paragraphs.

[^second]: Footnote text.


### Definition lists

Term 1

:   Definition 1
with lazy continuation.

Term 2 with *inline markup*

:   Definition 2

        { some code, part of Definition 2 }

    Third paragraph of definition 2.

_Compact style:_

Term 1
  ~ Definition 1

Term 2
  ~ Definition 2a
  ~ Definition 2b


### Abbreviations

This is HTML abbreviation example.

It converts "HTML", but keep intact partial entries like "xxxHTMLyyy" and so on.

*[HTML]: Hyper Text Markup Language`,

        body: `

### 1.1 Why should one Invest?

Before we address the above question, let us understand what would happen if one chooses not to invest. Let us assume you earn Rs.50,000/- per month and you spend Rs.30,000/-towards your cost of living which includes housing, food, transport, shopping, medical, etc. The balance of Rs.20,000/- is your monthly surplus. For the sake of simplicity, let us just ignore the effect of personal income tax in this discussion.

To drive the point across, let us make a few simple assumptions.

1. The employer is kind enough to give you a 10% salary hike every year
2. The cost of living is likely to go up by 8% year on year
3. You are 30 years old and plan to retire at 50. This leaves you with 20 more years to earn
4. You don’t intend to work after you retire
5. Your expenses are fixed and don’t foresee any other expense
6. The balance cash of Rs.20,000/- per month is retained in the form of hard cash


With the decision to invest the surplus cash, your cash balance has increased significantly. The cash balance has grown to Rs.4.26Crs from Rs.1.7Crs. This is a staggering 2.4x times the regular amount. This translates to you being in a much better situation to deal with your post retirement life.

Now, going back to the initial question of why invest? There are a few compelling reasons for one to invest.

Fight Inflation – By investing one can deal better with the inevitable – growing cost of living – **generally referred to as Inflation**

Create Wealth – By investing one can aim to have a better corpus **by the end of the defined time period**. In the above example, the time period was up to retirement but it can be anything – children’s education, marriage, house purchase, retirement holidays, etc

To meet life’s financial aspiration


### 1.2 Where to invest?

Having figured out the reasons to invest, the next obvious question would be – Where would one invest, and what are the returns one could expect by investing.

When it comes to investing one has to choose an asset class that suits the individual’s risk and return temperament.

An asset class is a category of investment with particular risk and return characteristics. The following are some of the popular asset classes.

1. Fixed income instruments
2. Equity
3. Real estate
4. Commodities (precious metals)



#### Fixed Income Instruments

These are investable instruments with very limited risk to the principle and the return is paid as an interest to the investor based on the particular fixed-income instrument. The interest paid, could be quarterly, semi-annual or annual intervals. At the end of the term of deposit, (also known as maturity period) the capital is returned to the investor.

Typical fixed income investment includes:

1. Fixed deposits offered by banks
2. Bonds issued by the Government of India
3. Bonds issued by Government related agencies such as HUDCO, NHAI, etc
4. Bonds issued by corporate’s

As of June 2014, the typical return from a fixed income instrument varies between 8% and 11%.




`
      }
    }
  },
  mounted() {
    Prism.highlightAll()
  }
}
</script>

<style lang="scss" scoped>
.post-image {
  max-width: 100%;
}
</style>
