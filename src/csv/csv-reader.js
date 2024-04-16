import { parse } from 'csv-parse';
import fs from 'node:fs';

const __dirname = new URL('.', import.meta.url).pathname;

const addTasks = async (task) => {
  await fetch('http://localhost:3000/tasks', {
    method: 'POST',
    body: JSON.stringify(task)
  })
}


const processFile = async () => {
  const records = [];
  const parser = fs
    .createReadStream(`${__dirname}/tasks.csv`)
    .pipe(parse({
      delimiter: ',',
      from_line: 2
    }));
  for await (const record of parser) {
    const task = {
      title: record[0],
      description: record[1]
    }
    addTasks(task)
    records.push(record);
  }
  return records;
};

(async () => {
  const records = await processFile();
  console.info(records);
})();

