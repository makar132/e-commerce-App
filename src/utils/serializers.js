export const serializeUser = fbUser => ({
    uid: fbUser.uid,
    email: fbUser.email
});
export const serializeProfile = raw => ({
    uid: raw.uid,
    name: raw.name,
    email: raw.email,
    role: raw.role,
    createdAt: raw.createdAt.seconds * 1000
});
