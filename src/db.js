/**
 * Created by sushanta on 4/4/18.
 */
import Dexie from 'dexie';

const db = new Dexie('flashCardsDB');
db.version(1).stores({
  decks: `id, createdAt, name`
});

export default db;