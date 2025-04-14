export interface EmployeeDataType {
  ID: number;
  EmployeeName: string;
  TypeReason: string;
  Reason: string;
  EntryWork: string;
  ReturnWork: string;
  OfficeOpening: string;
  OfficeReEntry: string;
}

export interface TableDataState {
  message: string;
  orders: EmployeeDataType[];
}

export interface ActionMethods {
  updateMessage: (newMessage: string) => void;
  addTabelData: (firstData: string, secoundData: string) => void;
}
