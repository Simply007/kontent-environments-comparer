const getDashedGuid = (guid: string): string => {
  return `${guid.substr(0, 8)}-${guid.substr(8, 4)}-${guid.substr(
    12,
    4
  )}-${guid.substr(16, 4)}-${guid.substr(20)}`;
};

export { getDashedGuid };
