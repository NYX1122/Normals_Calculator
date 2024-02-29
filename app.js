export default function (valuesArray, lowerBound, upperBound) {
  const lowestOriginalValue = Math.min(...valuesArray);

  const translatedValues = valuesArray.map(
    (value) => value - lowestOriginalValue
  );

  const highestTranslatedValue = Math.max(...translatedValues);

  const scaler = (upperBound - lowerBound) / highestTranslatedValue;

  const scaledValues = translatedValues.map((value) => value * scaler);

  const repositionedValues = scaledValues.map((value) => value + lowerBound);

  const roundedValues = repositionedValues.map((value) => Math.round(value));

  console.log('Normalized values:');
  console.log(roundedValues);

  return roundedValues;
}
