export interface Balance {
  status: boolean;
  message: string;
  data: {
    balance: number;
  };
}

export interface Location {
  status: boolean;
  message: string;
  data: [
    {
      state: string;
      locals: [
        {
          name: string;
          locationCode: string;
        },
        {
          name: string;
          locationCode: string;
        }
      ];
    }
  ];
}
