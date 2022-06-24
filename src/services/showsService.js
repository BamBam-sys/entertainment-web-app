import { doc, runTransaction } from 'firebase/firestore';
import { database } from '../firebaseConfig';

export const bookmarkShow = async (title) => {
  const showRef = doc(database, 'shows', title);
  try {
    const bookmarkState = await runTransaction(
      database,
      async (transaction) => {
        const show = await transaction.get(showRef);
        if (!show.exists()) {
          throw new Error("show doesn't exist");
        }

        const newBookmarkState = !show.data().isBookmarked;
        transaction.update(showRef, { isBookmarked: newBookmarkState });
        return newBookmarkState;
      }
    );
    console.log('Transaction successfully committed!', bookmarkState);
  } catch (error) {
    console.log(error, 'erorrrrr');
    return error;
  }
};
