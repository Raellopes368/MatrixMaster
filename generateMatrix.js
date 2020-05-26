export default function generateMatrix(matrixObject) {
  const matrix = [];

  Object.entries(matrixObject).map((element) => {
    const key = element[0];

    const positionColumn = Number(key.match(/\d$/)[0]) - 1;

    const positionRow = Number(element[0].match(/^\d/)[0]) - 1;

    if (!matrix[positionRow]) {
      matrix[positionRow] = [];

      matrix[positionRow][positionColumn] = matrixObject[`${positionRow + 1}x${positionColumn + 1}`];
    } else {
      matrix[positionRow][positionColumn] = matrixObject[`${positionRow + 1}x${positionColumn + 1}`];
    }

    return false;
  });
  return matrix;
}
