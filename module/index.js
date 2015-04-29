const isSubset = (superset, subset) => {
  if (subset == null) return false;

  return Object.keys(subset).every((key) => {
    if (
      (typeof superset !== 'object' || superset === null) ||
      !superset.propertyIsEnumerable(key)
    ) return false;

    const subsetItem = subset[key];
    const supersetItem = superset[key];
    if (
      (typeof subsetItem === 'object' && subsetItem !== null) ?
      !isSubset(supersetItem, subsetItem) :
      supersetItem !== subsetItem
    ) return false;

    return true;
  });
};

export {isSubset as default};
