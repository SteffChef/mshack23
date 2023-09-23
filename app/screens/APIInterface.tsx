interface categories {
  id: number;
  name: string;
}

export interface ApiDatatype {
  id: number;
  locationType: string;
  name: string;
  address: string;
  latitude: number;
  longitude: number;
  openingHours: string;
  infoLink: string;
  carrier: string;
  comments: null;
  categories: [
    {
      id: number;
      name: string;
    }
  ];
}
