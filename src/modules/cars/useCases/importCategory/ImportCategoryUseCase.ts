import csvParse from "csv-parse";
import fs from "fs";

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    console.log(file);

    /**
     * Setting the path of the file it'll be stream
     */
    const stream = fs.createReadStream(file.path);

    /**
     * 'csv-parse' it'll be responsible for transmitting the file
     */
    const parseFile = csvParse();

    /** The "stream" now has some new functions. In this case, we will use the pipe
     * function because it will split the file to be read in parts.
     *
     * The argument, will be 'csv-parse'
     */
    stream.pipe(parseFile);

    /** And now, we will manipulate the file with 'parseFile'. Here, we are reading
     * line by line and printing */
    parseFile.on("data", async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
