const isSubset = (superset, subset) => {
  if (subset == null) return false;

  return Object.keys(subset).every((key) => {
    if (
      (typeof superset !== 'object' || superset === null) ||
      !superset.propertyIsEnumerable(key)
    ) return false;

    const item = subset[key];
    const supersetItem = superset[key];
    if (
      (
        (typeof item === 'object' && item !== null) &&
        !isSubset(supersetItem, item)
      ) ||
      supersetItem !== item
    ) return false;

    return true;
  });
};

export {isSubset as default};
