import request from "./request";

export type Record = {
  name: string;
  caseNumber: string;
  checkNumber: string;
  reportDate: string;
  checkType: string;
  resportDesc: string;
  status: string;
};
export type Report={
  order:string;
  data:string;
  checknumber:string;
  date:string;
  way:string;
  report:string
}
type GetRecordsResonse = {
  records: Record[];
};
type GetReportsResonse = {
  reports: Report[];
};

export const getRecords = () => {
  return request.get<GetRecordsResonse>("/records.json");
};
export const getReports = () => {
  return request.get<GetReportsResonse>("/reports.json");
};