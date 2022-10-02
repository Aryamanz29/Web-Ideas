export const extractIdFromDriveLink = (driveLink) => {
  return driveLink.split("/")[5];
};
