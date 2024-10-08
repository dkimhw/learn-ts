import { MatchResult } from "./MatchResult";
import { dateStringToDate } from "./utils";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

type MatchData = [Date, string, string, number, number, MatchResult, string]

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  static fromCsv(filename: string): MatchReader {
    return new MatchReader(new CsvFileReader(filename));
  }

  load(): void {
    this.reader.read();
    this.matches = this.reader.data
      .map((row: string[]): MatchData => {
        return [
          dateStringToDate(row[0]),
          row[1],
          row[2],
          Number(row[3]),
          Number(row[4]),
          row[5] as MatchResult,
          row[6],
        ]
      })
  }
}
