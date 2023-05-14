const str = `
Lorem Ipsum is simply dummy text of the printing and typesetting industry. 

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
when an unknown printer took a galley of type and scrambled it to make a type specimen book. 

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
`;

function parseTaggedText(lines: string[]): string[][] {
  // const currPara: readonly string[] = []
  let currPara: readonly string[] = [];
  const paragraphs: string[][] = [];

  const addParagraph = () => {
    if (currPara.length) {
      paragraphs.push(
        // currPara
        [...currPara]
        // ~~~~~~~~ Type 'readonly string[]' is 'readonly' and
        //          cannot be assigned to the mutable type 'string[]'
      );
      // currPara.length = 0 // Clear lines
      currPara = [];
      // ~~~~~~ Cannot assign to 'length' because it is a read-only
      // property
    }
  };

  for (const line of lines) {
    if (!line) {
      addParagraph();
    } else {
      currPara = currPara.concat([line]);
      // ~~~~ Property 'push' does not exist on type 'readonly string[]'
    }
  }
  addParagraph();
  return paragraphs;
}

const result = parseTaggedText(str.split("\n"));
console.log(result);

// export default {};
