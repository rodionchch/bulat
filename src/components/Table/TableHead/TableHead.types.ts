export type Data = {
  index: number;
  serverName: string;
  company: string;
  isActive: boolean;
  registered: string;
  description: string;
};

export type HeadCell = {
  disablePadding?: boolean;
  id: keyof Data;
  label: string;
  numeric: boolean;
  align?: "left" | "center";
};
