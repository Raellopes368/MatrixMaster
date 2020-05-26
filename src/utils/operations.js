export function sum(matrix1, matrix2) {
  return matrix1.map(
    (elementMatrix1, index) => elementMatrix1.map(
      (elementMatrix2, ind) => elementMatrix2 + matrix2[index][ind],
    ),
  );
}


export function sub(matrix1, matrix2) {
  return matrix1.map(
    (elementMatrix1, index) => elementMatrix1.map(
      (elementMatrix2, ind) => elementMatrix2 - matrix2[index][ind],
    ),
  );
}


export function mult(a, b) {
  const aNumRows = a.length;
  const aNumCols = a[0].length;
  const bNumCols = b[0].length;
  const m = new Array(aNumRows); // initialize array of rows
  for (let r = 0; r < aNumRows; r += 1) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (let c = 0; c < bNumCols; c += 1) {
      m[r][c] = 0; // initialize the current cell
      for (let i = 0; i < aNumCols; i += 1) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}


function cofator(a, linha, coluna) {
  const subMatriz = [];
  const ordem = a.length;
  let m = 0;

  for (let i = 1; i < ordem; i += 1) {
    subMatriz[m] = [];

    for (let j = 0; j < ordem; j += 1) {
      if (j !== coluna) {
        subMatriz[m].push(a[i][j]);
      }
    }
    m += 1;
  }

  // eslint-disable-next-line no-use-before-define
  return (coluna % 2 ? -1 : 1) * det(subMatriz);
}

export function det(a) {
  const ordem = a.length;

  if (ordem === 1) {
    return a[0][0];
  }

  if (ordem === 2) {
    return a[0][0] * a[1][1] - a[0][1] * a[1][0];
  }

  let determinant = 0;

  for (let j = 0; j < ordem; j += 1) {
    determinant += a[0][j] * cofator(a, 0, j);
  }

  return determinant;
}
