const diff = require('diff');

function compareFiles() {
  const file1 = document.getElementById('file1').files[0];
  const file2 = document.getElementById('file2').files[0];

  if (file1 && file2) {
    const reader1 = new FileReader();
    const reader2 = new FileReader();

    reader1.onload = function (e) {
      const content1 = e.target.result;

      reader2.onload = function (e) {
        const content2 = e.target.result;
        const differences = diff.diffLines(content1, content2);

        let output1 = '';
        let output2 = '';
        let lineNumber1 = 1;
        let lineNumber2 = 1;

        differences.forEach((part) => {
          const lines = part.value.split('\n').slice(0, -1); // Remove the last empty element

          lines.forEach((line) => {
            const escapedLine = escapeHtml(line);

            if (part.added) {
              // Placeholder for the removed line
              output1 += `<div class="unchanged"><span class="line-number"></span></div>`;
              // Actual line added in file 2
              output2 += `<div class="added"><span class="line-number">${lineNumber2}</span>${escapedLine}</div>`;
              lineNumber2 += 1;
            } else if (part.removed) {
              // Actual line removed from file 1
              output1 += `<div class="removed"><span class="line-number">${lineNumber1}</span>${escapedLine}</div>`;
              // Placeholder for the added line
              output2 += `<div class="unchanged"><span class="line-number"></span></div>`;
              lineNumber1 += 1;
            } else {
              // Unchanged lines
              output1 += `<div class="unchanged"><span class="line-number">${lineNumber1}</span>${escapedLine}</div>`;
              output2 += `<div class="unchanged"><span class="line-number">${lineNumber2}</span>${escapedLine}</div>`;
              lineNumber1 += 1;
              lineNumber2 += 1;
            }
          });
        });

        document.getElementById('file1-output').innerHTML = output1;
        document.getElementById('file2-output').innerHTML = output2;
      };

      reader2.readAsText(file2);
    };

    reader1.readAsText(file1);
  } else {
    alert('Please select two files to compare.');
  }
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function toggleTheme() {
  document.body.classList.toggle('dark-mode');
}
