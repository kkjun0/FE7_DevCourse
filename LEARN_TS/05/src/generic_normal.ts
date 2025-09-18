{
  // 1
  function sumArray<T extends number | string>(arr: T[]): number | string {
    if (typeof arr[0] === 'number')
      return (arr as number[]).reduce((acc, curr) => acc + curr, 0);
    else return (arr as string[]).reduce((acc, curr) => acc + curr, '');
  }

  console.log(sumArray([1, 2, 3])); // 6
}

{
  // 2
  function reverseArray<T>(arr: T[]): T[] {
    return arr.reverse();
  }

  console.log(reverseArray([1, 2, 3])); // [3, 2, 1]
  console.log(reverseArray(['A', 'B', 'C']));
}

{
  // 3
  function removeDuplicates<T extends string | number | boolean>(
    arr: T[]
  ): T[] {
    return [...new Set(arr)];
  }

  console.log(removeDuplicates([1, 2, 2, 3])); // [1, 2, 3]
  console.log(removeDuplicates(['A', 'B', 'C', 'C']));
}

{
  // 4
  function setDefault<T, U extends number>(obj: {
    name: T;
    age: U;
  }): {
    name: T;
    age: number;
  } {
    return { ...obj, age: obj.age || 18 };
  }

  console.log(setDefault({ name: 'Alice', age: 0 })); // { name: "Alice", age: 18 }
}

{
  // 5
}

{
  // 6
}

{
  // 7
}

{
  // 8
}

{
  // 9
}

{
  // 10
}
