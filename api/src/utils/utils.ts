export const safeUser = (user: any) => {
  if (!user) {
    console.log("No user found");
  }
  const { password, ...safeUser } = user;
  return safeUser;
};
