import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

export function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function submitEmailToWaitlist(email) {
  return await addDoc(collection(db, 'waitlist'), {
    email,
    timestamp: Timestamp.now(),
  });
}
