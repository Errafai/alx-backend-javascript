import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  return [
    signUpUser(firstName, lastName)
      .then((profile) => ({
        status: 'fulfilled',
        value: profile,
      }))
      .catch((err) => ({
        status: 'rejected',
        value: err,
      })),
    uploadPhoto(fileName)
      .then((img) => ({
        status: 'fulfilled',
        value: img,
      }))
      .catch((err) => ({
        status: 'rejected',
        value: err,
      })),
  ];
}
