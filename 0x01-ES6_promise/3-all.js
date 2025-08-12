import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  return Promise.all([uploadPhoto, createUser])
    .then((profile) => {
      console.log(`${profile[0].body} ${profile[1].firstName} ${profile[1].lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
    });
}
