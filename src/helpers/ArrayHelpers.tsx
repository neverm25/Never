type getSlicedArrayUsingSubArrayLengthProps = {
  data: any[];
  subArrayLength: number;
};

export const getSlicedArrayUsingSubArrayLength = (
  props: getSlicedArrayUsingSubArrayLengthProps
) => {
  const { data, subArrayLength } = props;
  const dataLength = data?.length;
  let iteration = 0;
  const slicedArray: any[][] = [];
  while (iteration * subArrayLength < dataLength) {
    const subArray = data.slice(
      iteration * subArrayLength,
      (iteration + 1) * subArrayLength
    );
    slicedArray.push(subArray);
    iteration += 1;
  }

  return slicedArray;
};

type getSlicedArrayUsingNumberOfSplitsProps = {
  data: any[];
  numberOfSplitsNeeded: number;
};
export const getSlicedArrayUsingNumberOfSplits = (
  props: getSlicedArrayUsingNumberOfSplitsProps
) => {
  const { data, numberOfSplitsNeeded } = props;
  const ListSliceIndex = Math.ceil(data?.length / numberOfSplitsNeeded);

  let iteration = 1;
  const slicedArray: any[][] = [];
  while (iteration <= numberOfSplitsNeeded) {
    const subArray = data.slice(
      (iteration - 1) * ListSliceIndex,
      iteration * ListSliceIndex
    );
    slicedArray.push(subArray);
    iteration += 1;
  }

  return slicedArray;
};
