# Regular Expressions

Regular expressions is a powerful way of doing search and replace in strings. Regular expressions are patterns used to match character combinations in strings. In `JavaScript`, regular expressions are also `objects`. These patterns are used with the exec and test methods of `RegExp`, and with the `match`, `matchAll`, `replace`, `search`, and `split` **methods** of `String`.

A regular expression (also “regexp”, or just “reg”) consists of a pattern and optional flags.

There are two syntaxes that can be used to _create a regular expression object_.

The “long” syntax:

```
regexp = new RegExp("pattern", "flags");
```

And the “short” one, using slashes "/":

```sh
regexp = /pattern/; // no flags
regexp = /pattern/gmi; // with flags g,m and i (to be covered soon)
```

Slashes `/.../` tell JavaScript that we are creating a regular expression. They play the same role as quotes for strings.

The main difference between these two syntaxes is that pattern using slashes `/.../` does not allow for expressions to be inserted (like string template literals with`${...}`). They are fully static.

## Flags

Regular expressions may have flags that affect the search.

There are only 6 of them in JavaScript:

| Character | Meaning                                                                                                                                                   |
| :-------: | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     i     | With this flag the search is case-insensitive: no difference between A and a (see the example below).                                                     |
|     g     | With this flag the search looks for all matches, without it – only the first match is returned.                                                           |
|     m     | Multiline mode (covered in the chapter Multiline mode of anchors ^ \$, flag "m").                                                                         |
|     s     | Enables “dotall” mode, that allows a dot . to match newline character \n (covered in the chapter Character classes).                                      |
|     u     | Enables full unicode support. The flag enables correct processing of surrogate pairs. More about that in the chapter Unicode: flag "u" and class \p{...}. |
|     y     | “Sticky” mode: searching at the exact position in the text (covered in the chapter Sticky flag "y", searching at position)                                |

## Pattern

### Simple Pattern

Simple patterns are constructed of characters for which you want to find a direct match. For example, the pattern `/abc/` matches character combinations in strings only when exactly the characters 'abc' occur together and in that order. Such a match would succeed in the strings "Hi, do you know your abc's?" and "The latest airplane designs evolved from slabcraft." In both cases the match is with the substring 'abc'. There is no match in the string 'Grab crab' because while it contains the substring 'ab c', it does not contain the exact substring 'abc'.

```js
let paragraph = `Hi, do you know your abc's?`;
let regex = /abc/gi;
let found = paragraph.match(regex);

console.log(found); // ["abc"]
```

### Using special characters

The following pages and table provide a complete list and description of the special characters that can be used in regular expressions.

- [Assertions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Assertions)
- [Boundaries](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Boundaries)
- [Character Classes
  ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Character_Classes)
- [Groups and Ranges
  ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges)
- [Quantifiers](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Quantifiers)
- [Unicode property escapes
  ](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Unicode_Property_Escapes)


---

## References

- [JavaScript Info](http://javascript.info/regexp-introduction)
- [JavaScript MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
- [regexr](https://regexr.com/)
