    interface ITableUser {
    name: string;
    lastname: string;
    address?: string;
      
}

export interface ITableDataProps {
    data: ITableUser[];
  }