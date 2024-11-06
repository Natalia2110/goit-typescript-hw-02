export interface Image {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
    large: string;
  };
}

export interface Response {
  results: Image[];
  total_pages: number;
}
