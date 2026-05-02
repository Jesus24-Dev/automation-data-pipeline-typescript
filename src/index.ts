import { cleanedUsers } from "./core/pipeline";
import {logger} from "./utils/logger";
import {readJsonFile, writeJsonFile, writeCsvFile} from "./services/file.service";

function main(){

  const args = process.argv.slice(2);

  if(args.length < 1) {
    logger.error("Usage: npm run start <input> [output]");
    process.exit(1);
  }

  const inputPath = args[0];
  const outputPath = args[1] || './output.json';

  try {
    logger.info('Starting data transformation pipeline', {inputPath});
    const data = readJsonFile(inputPath);
    const users = cleanedUsers(data);
    writeJsonFile(outputPath, users.success);
    writeJsonFile(outputPath.replace('json', 'error.json'), users.errors);
    writeCsvFile(outputPath.replace('json', 'success.csv'), users.success);
  } catch (error) {
    logger.error(`Error in data transformation pipeline: ${error}`);
  }

  logger.info('Data transformation completed');
}

main()


