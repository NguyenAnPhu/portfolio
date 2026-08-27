export type ResponsibilityGroup = {
  title: string;
  items: string[];
  subGroups?: ResponsibilityGroup[];
};

export type Experience = {
  id: string;
  company: string;
  period: string;
  position: string;
  responsibilityGroups: ResponsibilityGroup[];
};
